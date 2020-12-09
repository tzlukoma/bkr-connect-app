import React, { useContext, useState, useEffect } from 'react'
import { app, auth } from '../base'

export const AuthContext = React.createContext()

export function useAuth () {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
  const signedIn = !!currentUser

  function logInWithGoogle () {
    const provider = new app.auth.GoogleAuthProvider()
    return auth.signInWithPopup(provider)
  }

  function logout () {
    return auth.signOut()
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    signedIn,
    logInWithGoogle,
    logout,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
