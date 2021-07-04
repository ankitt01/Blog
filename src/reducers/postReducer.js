export default (state = [], action) => {
    // if(action.type == 'FETCH_POSTs') {
    //     return action.payload;
    // }
    // return state;
    //Instead we will use switch statement

    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }

}