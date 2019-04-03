import { createContext } from 'react'

const initial = {
  store: {},
  dispatch: {}
}

const Context = createContext(initial)

export default Context
