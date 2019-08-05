import request from 'superagent'

export const ALL_IMAGES = 'ALL_IMAGES'
export const NEW_IMAGE = 'NEW_IMAGE'
export const CHECK_LOGIN = 'CHECK_LOGIN'

const baseUrl = 'http://localhost:4000'

function allImages(payload) {
    return {
        type: ALL_IMAGES,
        payload
    }
}

function newImage(payload) {
    return {
        type: NEW_IMAGE,
        payload
    }
}

function checkLogin(payload) {
    return {
        type: CHECK_LOGIN,
        payload
    }
}

export const getImages = () => (dispatch, getState) => {
    const state = getState()
    const { images } = state

    if (!images.length) {
        request(`${baseUrl}/image`)
            .then(response => {
                const action = allImages(response.body)

                dispatch(action)
            })
            .catch(console.error)
    }
}

export const createImage = data => (dispatch, getState) => {
    const state = getState()
    const { user } = state
    
    request
        .post(`${baseUrl}/image`)
        .set('Authorization', `Bearer ${user}`)
        .send(data)
        .then(response => {
            const action = newImage(response.body)

            dispatch(action)
        })
        .catch(console.error)
}

export const login = (email, password) => dispatch => {
    request
        .post(`${baseUrl}/login`)
        .send( {email, password} )
        .then(response => {
            const action = checkLogin(response.body.jwt)

            dispatch(action)
        })
        .catch(console.error)
}