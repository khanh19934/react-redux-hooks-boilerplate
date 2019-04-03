interface IAction {
  type: string
  payload: any
}

export interface IHomeState {
  title: string
}

const initialState = {
  title: 'Home'
}

const HomeReducer = (state: IHomeState = initialState, action: IAction) => {
  switch (action.type) {
    case 'CHANGE_HOME_TITLE': {
      return { ...state, title: action.payload }
    }

    default:
      return state
  }
}

export default HomeReducer
