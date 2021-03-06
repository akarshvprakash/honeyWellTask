const initialData = {

}

export const githubMainReducer = function (state = initialData, action) {
    switch (action.type) {
      case 'SUCCESS':
        return action.data
      default:
        return state;
    }
};