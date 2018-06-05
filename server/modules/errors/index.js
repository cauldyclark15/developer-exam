class ServiceError extends Error {
  constructor(message) {
    super(message);

    this.name = this.constructor.name;

    Error.captureStackTrace(this, this.constructor);
  }
}

class ValidationError extends ServiceError {
  constructor({ resource }) {
    super(`Error occured while validating ${resource}.`);

    this.data = { resource };
  }
}

class AccessDeniedError extends ServiceError {
  constructor() {
    super('Sorry, you do not have permission to do that.');
  }
}

class AuthenticationError extends ServiceError {
  constructor() {
    super('An authentication error has occured.');
  }
}

export { ValidationError, AccessDeniedError, AuthenticationError };
