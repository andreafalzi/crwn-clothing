import { createAction } from '../../utilities/reducer/reducer.utilities';
import { USER_ACTION_TYPE } from './user.types';

export const setCurrentUser = (user) => {
  return createAction(USER_ACTION_TYPE.SET_CURRENT_USER, user);
};
