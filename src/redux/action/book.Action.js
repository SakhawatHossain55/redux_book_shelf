import axios from "axios"

export const loadBooks = (payload) => {
    return (dispatch, getState) => {
        fetch(`https://redux-book-shelf.herokuapp.com/books`)
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: 'LOAD_BOOKS',
                payload: data.data
            })
            console.log('data', data.data)
        })
    }
}

export const addToReadingList = (payload) => {
    return async (dispatch) => {
        const data = await axios.post(`https://redux-book-shelf.herokuapp.com/add-to-reading-list`, payload)
        dispatch({
            type: 'ADD_TO_REDING_LIST',
            payload
        })
    }
}

export const removeFromReadingList = (payload) => {
    return {
        type: 'REMOVE_FROM_READING_LIST',
        payload
    }
}

