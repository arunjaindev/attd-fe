import React, { useContext } from "react"
import { Route, redirect } from "react-router-dom"
import { AuthContext } from "../contexts/AuthState"

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext)

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <redirect to="/login" />
      }
    />
  )
}

export default PrivateRoute
