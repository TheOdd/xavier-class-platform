// Basic reducer to handle one action (UPDATE_CODE)

const rootReducer = (state = {code: '', flipSwitch: true}, action) => {
  switch (action.type) {
    case 'UPDATE_CODE':
      return {
        code: action.code,
        flipSwitch: !state.flipSwitch
      }
    default:
      return state
  }
}

export default rootReducer