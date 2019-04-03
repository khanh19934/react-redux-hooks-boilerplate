import React, { useContext } from 'react'
import Context from './Context'

export default (mapStateFn, mapDispatchFn) => WrappedComponent => () => {
  const { store, dispatch } = useContext(Context)

  const newActions = {}
  if (typeof mapDispatchFn === 'object') {
    const keyDispatchArr = Object.keys(mapDispatchFn)
    const valueDispatchArr = Object.values(mapDispatchFn)

    const newDispatchArr = valueDispatchArr.map((item: any) => item(dispatch))

    for (let i = 0; i < keyDispatchArr.length; i++) {
      newActions[keyDispatchArr[i]] = newDispatchArr[i]
    }
  }

  const actions = typeof mapDispatchFn !== 'object' ? mapDispatchFn(dispatch) : newActions

  return <WrappedComponent {...mapStateFn(store)} {...actions} />
}
