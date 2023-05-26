import { csrfFetch } from "./csrf";
const SET_USER = "session/setUser";
const REMOVE_USER = "session/removeUser";
const CHANGE_KILL_COUNT_USER = "session/changeKillCountUser";
const GET_LEADERBOARD = 'session/getLeaderboard'
const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user,
    };
};

const removeUser = () => {
    return {
        type: REMOVE_USER,
    };
};

const changeKillsUser = (killData) => {
    return {
        type: CHANGE_KILL_COUNT_USER,
        payload: killData
    }
}

const getLeaderboardAction = (users) => (
    {
        type: GET_LEADERBOARD,
        users
    }
)

export const changeKillCountUser = (killData) => async (dispatch) => {
    const { newKills, id } = killData;

    const response = await csrfFetch('/api/users', {
        method: 'PUT',
        body: JSON.stringify({
            newKills,
            id
        })
    });
    const data = await response.json();
    dispatch(changeKillsUser(data.user));
    return response;
}

export const restoreUser = () => async (dispatch) => {
    const response = await csrfFetch("/api/session");
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
};

export const login = (user) => async (dispatch) => {
    const { credential, password } = user;
    const response = await csrfFetch("/api/session", {
        method: "POST",
        body: JSON.stringify({
            credential,
            password,
        }),
    });
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
};

export const logout = () => async (dispatch) => {
    const response = await csrfFetch('/api/session', {
        method: 'DELETE',
    });
    dispatch(removeUser());
    return response;
};

export const signup = (user) => async (dispatch) => {
    const { username, firstName, lastName, email, password } = user;
    const response = await csrfFetch("/api/users", {
        method: "POST",
        body: JSON.stringify({
            username,
            firstName,
            lastName,
            email,
            password,
        }),
    });
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
};

export const getLeaderboardThunk = () => async (dispatch) => {

    const response = await fetch('/api/users/leaderboard');

    const usersLeaderboard = await response.json();

    if (response.ok) {
        await dispatch(getLeaderboardAction(usersLeaderboard));
    } else {
        const error = await response.json();
        return error;
    }
}

const initialState = {
    user: null,
    leaderboard: []
};

const sessionReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_USER:
            newState = Object.assign({}, state);
            newState.user = action.payload;
            return newState;
        case REMOVE_USER:
            newState = Object.assign({}, state);
            newState.user = null;
            return newState;
        case CHANGE_KILL_COUNT_USER:
            newState = Object.assign({}, state);
            newState.user = action.payload;
            return newState;
        case GET_LEADERBOARD:
            newState = Object.assign({}, state);
            newState.leaderboard = [...action.users];
            console.log('here')
            return newState;
        default:
            return state;
    }
};

export default sessionReducer;
