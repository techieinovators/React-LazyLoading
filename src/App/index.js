import React, { lazy, Suspense } from 'react'
import { Provider } from 'react-redux'

import store from './store'

import AddListPage from 'Pages/AddListPage'
const DoneRemovedPage = lazy(() => import('Pages/DoneRemovedPage'))

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

export default function App() {
  return <Provider store={store}>
    <h1>Todo Application</h1>

    <BrowserRouter history={window.history}>
      <ul>
        <li>
          <Link to="/" >Home</Link>
        </li>
        <li>
          <Link to="/done-and-removed" >Done and Removed</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/">
          <AddListPage />
        </Route>
        <Route path="/done-and-removed">
          <Suspense fallback={<p>Loading...</p>}>
            <DoneRemovedPage />
          </Suspense>
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>
}
