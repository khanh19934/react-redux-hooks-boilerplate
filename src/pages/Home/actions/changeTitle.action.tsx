import Actions from '../../../constants/actions'

export const changeTitle = dispatch => (payload: string) => {
  return dispatch({
    type: Actions.HOME.CHANGE_HOME_TITLE,
    payload
  })
}
