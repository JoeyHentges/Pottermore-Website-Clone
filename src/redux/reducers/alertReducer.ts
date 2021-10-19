const initialState = {
  alertError: null,
};

export const alertReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case 'DELETE_ALERT_SUCCESS':
      console.log('alert mark read success');
      newState.alertError = null;
      break;

    case 'DELETE_ALERT_ERROR':
      console.log('alert mark read error', action.error);
      newState.alertError = action.error.message;
      break;

    default:
      return newState;
  }
  return newState;
};
