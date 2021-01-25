
const INITIAL_STATE = {
  items: [
    {id: 1, name: 'React'},
    {id: 2, name: 'Redux'},
    {id: 3, name: 'Laravel'}
  ]
}

export default function tools(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      state.items.push({
        id: state.items.length + 1,
        name: action.item
      });
      return {...state};
    default:
      return state;
  }
  
}