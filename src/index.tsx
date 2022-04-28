import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from 'pages/Home'
import Service from 'pages/Service'
import ShopInfoDemo from 'pages/ShopInfoDemo'
import Demo from 'pages/Demo'
import reportWebVitals from './reportWebVitals'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { theme } from './theme'
import { Provider as ResizeObserverProvider } from '@envato/react-resize-observer-hook'

ReactDOM.render(
  <ResizeObserverProvider>
    <ChakraProvider theme={theme}>
      <React.StrictMode>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/service" component={Service} />
              <Route exact path="/shop_info_demo" component={ShopInfoDemo} />
              <Route exact path="/demo" component={Demo} />
            </Switch>
          </div>
        </BrowserRouter>
      </React.StrictMode>
    </ChakraProvider>
  </ResizeObserverProvider>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
