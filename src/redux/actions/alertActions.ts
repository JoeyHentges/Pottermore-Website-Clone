export const deleteAlert = (alertId) => (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();
  console.log(alertId);
  firestore
    .collection('alerts')
    .doc(alertId)
    .delete()
    .then(() => dispatch({ type: 'DELETE_ALERT_SUCCESS' }))
    .catch((error) => dispatch({ type: 'DELETE_ALERT_ERROR', error }));
};

/*
export const markAlertRead = (alertId) => (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();
  console.log(alertId);
  firestore
    .collection('alerts')
    .doc(alertId)
    .update({
      read: true,
    })
    .then(() => dispatch({ type: 'MARK_ALERT_READ_SUCCESS' }))
    .catch((error) => dispatch({ type: 'MARK_ALERT_READ_ERROR', error }));
};
*/
