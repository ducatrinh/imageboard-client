import { CHECK_LOGIN } from '../actions'

export default function (state = null, action = {}) {
    switch (action.type) {
        case CHECK_LOGIN:
            return action.payload
        default:
            return state
    }
}