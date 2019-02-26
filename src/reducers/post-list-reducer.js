export default (state = {}, action) => {
  switch (action.type){
  case 'ADD_POST':
    const { name, content, likes, dislikes, id } = action;
    let newState = Object.assign({},state, {
      [id] : {
        name: name,
        content: content,
        id: id,
        likes: likes,
        dislikes: dislikes
      }
    });
    return newState;
  default:
    return state;
  }
};