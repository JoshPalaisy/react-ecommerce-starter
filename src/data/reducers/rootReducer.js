import authReducer from './authReducer'
import productReducer from './productReducer'
import slideshowReducer from './slideshowReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  slideshow: slideshowReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})

export default rootReducer