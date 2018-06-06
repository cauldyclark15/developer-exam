import isEmail from 'validator/lib/isEmail';
import { isEmpty, pick } from 'lodash';
import bcrypt from 'bcrypt-nodejs';
import jwt from 'jsonwebtoken';

import { User } from '../../database/connectors';
import { secret } from '../../config/jwt';
import Service from '../service';

class UserService extends Service {
  async create(input) {
    const { first_name, last_name, email, password } = input;

    try {
      if (!email || !isEmail(email)) {
        this.showValidationError('email');
      }

      if (!password || password.length < 6) {
        this.showValidationError('password');
      }

      if (!first_name || !last_name) {
        this.showValidationError('name');
      }

      const userExisting = await User.findOne({ where: { email } });

      if (!isEmpty(userExisting)) {
        this.showEmailExistError();
      }

      const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(8));

      const newUser = await User.create({
        first_name,
        last_name,
        email,
        password: hashedPassword,
      });

      const token = await this.getJwt(newUser);

      const safeUser = this.getSafeUser(newUser);

      return { user: safeUser, token };
    } catch (error) {
      console.log(error);
    }
  }

  async authenticate({ email, password }) {
    try {
      if (!email) {
        this.showValidationError('email');
      }

      if (!password) {
        this.showValidationError('password');
      }

      const user = await User.findOne({ where: { email } });

      const isValidUser = bcrypt.compareSync(password, user.password);

      if (!isValidUser) {
        this.showAuthenticationError();
      }

      const token = await this.getJwt(user);

      return { user: this.getSafeUser(user), token };
    } catch (error) {
      console.log(error);
    }
  }

  async getJwt(user) {
    const token = await jwt.sign({ user }, secret, {
      expiresIn: 86400,
      jwtid: 'test_jwt_id',
    });

    return token;
  }

  getSafeUser(user) {
    return pick(user, [
      'id',
      'first_name',
      'last_name',
      'email',
      'created_date',
    ]);
  }
}

export default UserService;
