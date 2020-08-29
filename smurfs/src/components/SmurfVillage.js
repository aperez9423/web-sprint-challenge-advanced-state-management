import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { getSmurf } from '../actions/getSmurf';

import SmurfList from './smurfList';
import SmurfForm from './smurfForm';

const SmurfVillage = props => {
    useEffect(() => {
        props.getSmurf();
    }, [getSmurf]);

    return (
        <div>
            <SmurfForm/>
            {props.smurfs.map(smurf => (
                <SmurfList smurf={smurf}/>
            ))}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { getSmurf })(SmurfVillage);