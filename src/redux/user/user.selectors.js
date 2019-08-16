import {createSelector} from 'reselect';

//getting our state selector
const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
)
