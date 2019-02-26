import postListReducer from './../../src/reducers/post-list-reducer';

describe('postListReducer', () => {

    let action;
    const samplePostData = {
        name: 'Gulzat K',
        content: 'Lorem ipsum dolor sit amet c.',
        id: '0',
        likes: 0,
        dislikes: 0
    };

    test('Should return default state if no action type is recognized', () => {
        expect(postListReducer({}, { type: null })).toEqual({});
      });

      test('Should successfully add new post data to masterPostList', () => {
        const { name, content, likes, dislikes, id } = samplePostData;
        action = {
          type: 'ADD_POST',
          name: name,
          content: content,
          id: id,
          likes: likes,
          dislikes: dislikes
        };
        expect(postListReducer({}, action)).toEqual({
          [id] : {
            name: name,
            content: content,
            id: id,
            likes: likes,
            dislikes: dislikes
          }
        });
      });

});