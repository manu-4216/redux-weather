export default function(state = null, action) {
    switch (action.type) {
        case 'Book_SELECTED':
            return action.payload;
            break;
        default:
            return state;
    }
}
