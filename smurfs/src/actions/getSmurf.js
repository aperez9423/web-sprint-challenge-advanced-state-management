import axios from 'axios';

export const FETCHING_SMURF_START = "FETCHING_SMURF_START";
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS";

export const getSmurf = () => dispatch => {
    dispatch({ type: FETCHING_SMURF_START });

    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log("fetching smurf", res);
            dispatch({ type: FETCHING_SMURF_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log("Error!", err)
        })
}