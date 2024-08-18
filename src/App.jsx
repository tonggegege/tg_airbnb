import React, { memo } from 'react'
import { useRoutes, Route,
  Routes, } from "react-router-dom"
import AppFooter from './components/app-footer'
import AppHeader from './components/header'

import routes from "./router"
import AuthRoute from '@/router/AuthRouter'


const App = memo(() => {
  const RouteAuthFun = (
    (routeList) => {
      return routeList.map(
        (item) => {
          return (
            <Route
              path={item.path}
              element={
                <AuthRoute auth={item.auth} key={item.path}>
                  {item.element}
                </AuthRoute>
              }
              key={item.path}
            >
              {/* 递归调用，因为可能存在多级的路由 */}
              {item?.children && RouteAuthFun(item.children)}
            </Route>
          );
        }
      );
    }
  );


  return (
    <div className='app'>
      <AppHeader />
      <div className='content'>
      <Routes>{RouteAuthFun(routes)}</Routes>
      </div>
      <AppFooter />
    </div>
  )
})

export default App
