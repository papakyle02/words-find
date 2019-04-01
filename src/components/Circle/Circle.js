import React, { Component } from 'react';
import './Circle.scss';

class circle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: null
        };
    }

componentDidMount(){
    this.createInputs(5);
}

createInputs = (qty) => {
    // array with index for each input desired
    const inputs = Array.from(Array(5)).forEach( (e,i) => e = (i + 1))
    console.log(inputs)
}

    render() {
        return (
            <div className='circle'>
                <input className='letter'/>
                <input className='letter'/>
                <input className='letter'/>
                <input className='letter'/>
                <input className='letter'/>
            </div>
        );
    }
}

export default circle;