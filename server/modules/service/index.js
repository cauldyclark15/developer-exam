import { isEmpty } from 'lodash';

import {
  AccessDeniedError,
  AuthenticationError,
  ValidationError,
  EmailExistError,
} from '../errors';

class Service {
  showValidationError(resource) {
    if (!isEmpty(resource)) {
      throw new ValidationError({ resource });
    }
  }

  showAccessDeniedError() {
    throw new AccessDeniedError();
  }

  showAuthenticationError() {
    throw new AuthenticationError();
  }

  showEmailExistError() {
    throw new EmailExistError();
  }
}

export default Service;
