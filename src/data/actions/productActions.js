export const createProduct = (product) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('products').add({
      ...product,

    }).then(()=>{
      dispatch({ type: 'CREATE_PRODUCT', product })  
    }).catch(() => {
      dispatch({type: 'CREATE_PRODUCT_ERROR'})
    })
  }
}