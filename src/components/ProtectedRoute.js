import React from 'react'
import {Route} from 'react-router-dom'
import UnAuthorized from './UnAuthorized'

const ProtectedRoute = props => {

    const {component: ProtectedComponent, ...rest} = props
    const renderProtected = (routeProps) => (localStorage.getItem('token') ? <ProtectedComponent {...routeProps}/> : <UnAuthorized />)

    return <Route {...rest} render={renderProtected}/>
}

export default ProtectedRoute