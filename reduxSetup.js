const INITIAL_STATE = { payload: "🤯" }
const moodReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'Happy':
            return { ...state, payload: "😊" }
        case 'Sad':
            return { ...state, payload: "😓" }
        case 'Angry':
            return { ...state, payload: "😡" }
        case 'Confused':
            return { ...state, payload: "😕" }
        default:
            return state
    }
}

const store = Redux.createStore(moodReducer);
