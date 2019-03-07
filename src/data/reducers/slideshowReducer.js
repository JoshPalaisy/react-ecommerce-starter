const initState = {
  slideshow: []
}

const slideshowReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_SLIDE':
      console.log('New slide published:', action.slideshow)
      return state
    case 'CREATE_SLIDE_ERROR':
      console.log('New slide error:', action.err)
      return state
    default:
      return state;
  }
}

export default slideshowReducer