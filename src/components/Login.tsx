import { Button, Container, Grid } from '@material-ui/core'
import React, { useState } from 'react'

import Typography from '@material-ui/core/Typography'
import Alert from '@material-ui/lab/Alert'

import { ReactComponent as BkrScene } from '../assets/bkr-scene.svg'
import { ReactComponent as GoogleIcon } from '../assets/google-icon.svg'
import { useAuth } from '../context/AuthContext'

import { useHistory } from 'react-router-dom'


const Login = () => {

  const { logInWithGoogle } = useAuth()
  const history = useHistory()
  const [error, setError] = useState("")

  async function handleLogin() {
    try {
      setError("")
      await logInWithGoogle()
      history.push("/")
    } catch (error) {
      setError("Failed to sign in")
    }

  }

  return (
    <>
      <Container
        style={{
          margin: 'auto',
          paddingTop: '5vh',
          width: '90%',
          textAlign: 'center'
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5}>
            <BkrScene style={{ width: '100%', height: '400px' }} />
          </Grid>
          <Grid item xs={12} sm={7}>
            <Typography variant='h4'>BKR CONNECT</Typography>
            <Typography variant='h5' style={{ paddingBottom: 20 }}>
              Manage everything about<br></br> Brown Kids Read
            </Typography>
            <Button variant='outlined' size='large' onClick={handleLogin}>
              <GoogleIcon style={{ height: 15, width: 15, marginRight: 15 }} /> <Typography variant='body1'>
                Sign In With
                Google
              </Typography>
            </Button>

            {error && <Alert variant="outlined" severity="error">{error}</Alert>}
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Login
