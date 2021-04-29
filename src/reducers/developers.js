// Expenses Reducer

const developersReducerDefaultState = [];

export default (state = developersReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_DEVELOPER':
      return [
        ...state,
        action.developer
      ];    
    case 'EDIT_DEVELOPER':
      return state.map((developer) => {
        if (developer.id === action.id) {
          return {
            ...developer,
            ...action.updates
          };
        } else {
          return developer;
        };
      });
    case 'SET_DEVELOPERS':
      return action.developers;
    default:
      return state;
  }
};
