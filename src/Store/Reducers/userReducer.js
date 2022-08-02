import { ADD_USER, DELETE_USER, EDIT_USER } from '../types/user'

const DEFAULT_STATE = {
    userList: [],
    selectedUser: null,
}

export const userReducer = (state = DEFAULT_STATE, { type, payload }) => {
    switch (type) {
        case ADD_USER: {
            const data = [...state.userList]
            data.push({ ...payload, id: Date.now() })

            state.userList = data

            return { ...state }
        }

        case DELETE_USER: {
            const data = [...state.userList]

            const index = data.findIndex((ele) => ele.id === payload)

            if (index !== -1) {
                data.splice(index, 1)
            }

            state.userList = data

            return { ...state }
        }

        case EDIT_USER: {
            state.selectedUser = payload
            return { ...state }
        }
        default:
            return state
    }
}
