import { compose } from 'recompose'

import connect from '../../context/connect'
import HomeView from './Home.view'
import { IStore } from '../../reducers'
import { changeTitle } from './actions/changeTitle.action'

const mapStateToProps = (store: IStore) => ({
  title: store.home.title
})

const mapDispatchToProps = {
  changeHomeTitle: changeTitle
}

const enhance = compose<any, any>(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export default enhance(HomeView)
