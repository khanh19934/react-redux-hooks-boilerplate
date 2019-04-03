import React, { useReducer, useEffect, useState } from 'react'
import Context from './Context'

interface IProps {
  children: any
  reducer: any
}

const Provider = ({ children, reducer }: IProps) => {
  const [store, dispatch] = useReducer(reducer, {})
  const [state, setState] = useState({ isLoaded: false })
  useEffect(() => {
    dispatch({ type: '@init' })
    setState({ isLoaded: true })
  }, [])

  return <Context.Provider value={{ dispatch, store }}>{state.isLoaded ? children : false}</Context.Provider>
}

export default Provider
