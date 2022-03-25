import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from 'pages/Home'
import Service from 'pages/Service'
import Demo from 'pages/Demo'
import reportWebVitals from './reportWebVitals'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { theme } from './materialui/theme'

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <React.StrictMode>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/service" component={Service} />
            <Route exact path="/demo" component={Demo} />
          </Switch>
        </div>
      </BrowserRouter>
    </React.StrictMode>
  </MuiThemeProvider>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
