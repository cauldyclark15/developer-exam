import { isEmpty } from 'lodash';

import {
  AccessDeniedError,
  AuthenticationError,
  ValidationError,
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
}

export default Service;
