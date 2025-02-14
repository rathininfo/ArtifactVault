import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
    <h1 className="text-9xl font-bold">404</h1>
    <p className="text-xl mt-4">Page not found Here</p>
    <Link
      to="/"
      className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
    >
      Go Home
    </Link>
  </div>
  )
}

export default ErrorPage
