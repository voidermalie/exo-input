export const initialState = {
    items: [],
}

export const ACTIONS = {
    ADD_ITEM: 'add_item',
    REMOVE_ITEM: 'remove_item'
}

const listReducer = (state, action) => {
    let newItem;
    switch(action.type) {
        case ACTIONS.ADD_ITEM:
            newItem = {
                id: Date.now(), 
                text: action.payload.trim(),
              };
            return {
                ...state,
                items: [...state.items, newItem],
            };
        case ACTIONS.REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id!== action.payload),
            };
        default:
            return state;
    }
};

export default listReducer;
