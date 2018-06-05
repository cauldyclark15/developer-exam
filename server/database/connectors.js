import { eventModel as Event, userModel as User } from './models';

User.hasMany(Event);
Event.belongsTo(User);

export { User, Event };
