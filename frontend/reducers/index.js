// Basic reducer to handle one action (UPDATE_CODE)

const rootReducer = (state = {code: ''}, action) => {
  switch (action.type) {
    case 'UPDATE_CODE':
      return {
        code: action.code
      }
    default:
      return state
  }
}

export default rootReducer