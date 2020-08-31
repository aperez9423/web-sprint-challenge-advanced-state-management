import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getSmurf } from '../actions/getSmurf';


class SmurfList extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getSmurf()
    }

    render() {
        console.log('smurfs', this.props)

        return (
            <div className='smurf-list'>
                <Heading>List of Smurf Villagers</Heading>
                {this.props.smurfs.map(smurf => {
                    return (
                        <div>
                            <p>Name: {smurf.name}</p>
                            <p>Age: {smurf.age} years old</p>
                            <p>Height: {smurf.height} cm</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        smurfs: state.smurfs,
        error: state.error
    }
}

export default connect(mapStateToProps, { getSmurf })(SmurfList)

const Heading = styled.h2 `
    font-size: 2rem;
    font-family: Londrina Solid;
    font-weight: bolder;
`