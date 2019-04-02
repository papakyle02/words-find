import React, { Component } from 'react';
import './Circle.scss';

class Circle extends Component {
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
    // create array with number of desired indexes with undefined values
    const inputs = Array.from(new Array(qty))
    // set values for indexes to be 1 to qty
    inputs.forEach( (e,i, arr) => arr[i] = (i + 1))
    this.setState({
        inputs
    })
}

    render() {
        const { inputs } = this.state
        const renderedInputs = inputs.map( e => {
            return <input className='letter' data-order={e}/>
        })
        return (
            <div className='circle'>
                

            </div>
        );
    }
}

export default Circle;