//Reducer
// const initialState = {
// 	text: 'Allo'
// }
const todo = (state, action) => {
	switch(action.type) {
		case 'ADD_TODO':
			return {
				id: action.id,
				text: action.text,
				completed: false
			}
		case 'TOGGLE_TODO':
			if(state.id !== action.id) {
				return state;
			}
			return Object.assign({}, state, {
				completed: !state.completed
            });
        // case 'SET_VISIBILITY':
        //     console.log("im in here!");
		default:
			return state;
	}
}

const initialState = [];
// const initialState = {
// 	text: '',
// 	id: 0,
// 	completed: false
// }

const todos = (state=initialState, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return [
                ...state,
                todo(undefined, action)
            ]
        case "TOGGLE_TODO":
            return state.map(t=>todo(t, action));
        default: 
            return state;
    }
}

export {todos};