import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import { useAuth } from './context/AuthContext'

import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'
import AppHeader from './components/AppHeader'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

import theme from './theme'



const App: React.FC = () => {
  const { currentUser, signedIn } = useAuth()
  console.log(currentUser)

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Router>
            <AppHeader signedIn={signedIn} user={currentUser} />
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PublicRoute path="/login" restricted={true} component={Login} />
            </Switch>
          </Router>
        </CssBaseline>
      </ThemeProvider>
    </div>
  )
}

export default App
