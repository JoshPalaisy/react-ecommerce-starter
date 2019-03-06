const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      console.log('Login Failed')
      return {
        ...state,
        authError: 'Login Failed'
      }
    case 'LOGIN_SUCCESS':
      console.log('Login Success')
      return {
        ...state,
        authError: null
      }
    case 'LOGOUT_SUCCESS':
      console.log('Signed Out Successully')
      return state
    case 'REGISTER_SUCCESS':
      console.log('User Registered Successfully')
      return {
        ...state,
        authError: null
      }
    case 'REGISTER_ERROR':
      console.log('Registration error')
      return {
        ...state,
        authError: action.err.message
      }
    default:
      return state
  }
}

export default authReducer