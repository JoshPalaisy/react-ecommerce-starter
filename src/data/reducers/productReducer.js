const initState = {
	products: []
}

const productReducer = (state = initState, action) => {
	switch (action.type) {
		case 'CREATE_PROJECT':
			console.log('New product listed:', action.project)
			return state
		case 'CREATE_PROJECT_ERROR':
			console.log('New product error:', action.err)
			return state
		default:
			return state;
	}
}

export default productReducer