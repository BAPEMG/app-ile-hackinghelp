import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

import { Spin } from 'antd'

const Home = React.lazy(() => import('./pages/Home'))
const User = React.lazy(() => import('./pages/Users'))
const Search = React.lazy(() => import('./pages/Search'))
const Chat = React.lazy(() => import('./pages/Chat'))
const Messages = React.lazy(() => import('./pages/Messages'))
const ExpertHelp = React.lazy(() => import('./pages/ExpertHelp'))

const Routes = props => (
  <Suspense fallback={<Spin size="large" />} >
    <Switch>
      <Route exact path='/' component={routerProps => <Home {...routerProps} />} />
      <Route exact path='/user/:userId' component={routerProps => <User {...routerProps} />} />
      <Route exact path='/search' component={routerProps => <Search {...routerProps} />} />
      <Route exact path='/chat' component={routerProps => <Chat {...routerProps} />} />
      <Route exact path='/messages' component={routerProps => <Messages {...routerProps} />} />
      <Route exact path='/expert-help' component={routerProps => <ExpertHelp {...routerProps} />} />
    </Switch>
  </Suspense>
)

export default Routes