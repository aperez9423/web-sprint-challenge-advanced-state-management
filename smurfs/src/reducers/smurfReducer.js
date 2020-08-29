import { FETCHING_SMURF_START, FETCHING_SMURF_SUCCESS } from '../actions/getSmurf';
import { ADD_SMURF } from '../actions/addSmurf'; 

const initialState = {
    smurfs: [
        {
            name: 'Brainey',
            age: 200,
            height: '5cm',
            id: 0
        }
    ],
    isFetching: false,
    error: ''
};

export const smurfReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case FETCHING_SMURF_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCHING_SMURF_SUCCESS:
            return{
                ...state,
                smurfs: action.payload,
                isFetching: false
            }
        case ADD_SMURF:
            return {
                ...state, 
                smurfs: [...state.smurfs, action.payload]
            }
        default: 
            return state;
    }
}
