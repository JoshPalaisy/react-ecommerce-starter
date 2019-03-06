import React from 'react'

const WelcomeMsg = (props) => {
  const { profile } = props
  return (
    <React.Fragment>
      <h1>Welcome {profile.firstName}!</h1>
      <h3>React Ecommerce Starter Kit</h3>
    </React.Fragment>
  )
}

export default WelcomeMsg