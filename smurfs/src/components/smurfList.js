import React from 'react';

const SmurfList = props => {

        return (
            <div className = 'smurf-list'>
                <p>Name: {props.smurf.name}</p>
                <p>Age: {props.smurf.age} years old</p>
                <p>Height: {props.smurf.height}</p>
            </div>
        );
};

export default SmurfList;