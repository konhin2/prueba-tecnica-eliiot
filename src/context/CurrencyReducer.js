const reducer = (globalState, action) => {
    switch (action.type) {
        case "GET_CURRENCIES":
            return {
                ...globalState,
                currency: action.payload
            }
        case "SET_INFO":
            return {
                ...globalState,
                msg: action.payload.msg,
                url: action.payload.url
            }
        default:
            return globalState;
    }
}
export default reducer