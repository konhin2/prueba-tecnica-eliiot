const reducer = (globalState, action) => {
    switch (action.type) {
        case "GET_CURRENCIES":
            return {
                ...globalState,
                currency: action.payload
            }
        default:
            return globalState;
    }
}
export default reducer