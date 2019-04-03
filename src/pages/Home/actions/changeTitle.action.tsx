export const changeTitle = dispatch => (payload: string) => {
  return dispatch({
    type: 'CHANGE_HOME_TITLE',
    payload
  })
}
