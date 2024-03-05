import React from 'react'
import { Link } from 'react-router-dom'
import DashboardPage from '../dashboard_page/DashboardPage';

const LoginPage = () => {
  return (
    <div><h1>
        Dashboard
        </h1>
        <Link to={'/dashboard'}>
        DashboardPage
        </Link>
        </div>
  )
}

export default LoginPage