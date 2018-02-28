const defaultState = {
    movies: {}
};

export default function movieSearchReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case "SEARCH_BTN_FULFILLED": {
            return {
                ...state,
                movies: payload
            }
        }

        case "SEARCH_BTN_PENDING": {
            return {
                ...state,
                movies: {status: "loading..."}
            }
        }
        
        case "SEARCH_BTN_REJECTED": {
            return {
                ...state,
                movies: {status: "Failed"}
            }
        }

        default: {return state}
    }
}