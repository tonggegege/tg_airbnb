import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux"
import { HashRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import "normalize.css"


import "./assets/css/index.less"
import store from "./store"
import theme from './assets/theme';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Suspense fallback={<h2>loading...</h2>}>
      <HashRouter>
        <ThemeProvider theme={theme}>
            {/* 
              受suspense的摆放位置影响
              suspense是使得页面还没被加载出来前的异步加载展示
              默认源码中有.subscribe()不会监听异步加载的js文件的事件
            */}
              <App />
        </ThemeProvider>
      </HashRouter>
    </Suspense>
  </Provider>

);

