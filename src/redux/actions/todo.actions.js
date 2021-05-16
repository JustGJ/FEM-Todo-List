export const ADD_TODO = 'ADD_TODO';

const addTodo = () => {
    return {
        type: ADD_TODO
    }
}



// export const apiCall = () => {
//     return (dispatch) => {
//         dispatch(loadApiComments());
//         axios.get('http://jsonplaceholder.typicode.com/comments')
//         .then( res => {
//             dispatch(loadCommentsSuccess(res.data));
//         })
//         .catch(err => {
//             dispatch(loadCommentsError(err.message))
//         })
//     }
// }