export const createSlide = (slideshow) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('slideshow').add({
      ...slideshow,

    }).then(() => {
      dispatch({ type: 'CREATE_SLIDE', slideshow })
    }).catch(() => {
      dispatch({ type: 'CREATE_SLIDE_ERROR' })
    })
  }
}