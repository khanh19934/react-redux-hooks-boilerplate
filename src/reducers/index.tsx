import combineReducers from './combineReducer'

import homeReducer, { IHomeState } from '../pages/Home/Home.reducer'

const reducer = combineReducers({ home: homeReducer })

export interface IStore {
  home: IHomeState
}

export default reducer
