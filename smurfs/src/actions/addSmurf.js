import axios from 'axios';

export const ADD_SMURF = "ADD_SMURF";

export const addSmurf = newSmurf => {
    return dispatch => {
        console.log('new smurf creator', newSmurf)
        dispatch({ type: ADD_SMURF, payload: newSmurf })

        axios
            .post('http://localhost:3333/smurfs', 
            {
                name: newSmurf.name,
                age: newSmurf.age,
                height: newSmurf.height,
                id: newSmurf.id
            });
    };
};