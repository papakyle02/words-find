import React, { Component } from 'react';
import './WordList.scss';

class WordList extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className='word-list'>
                <p>Tap the circle to enter your letters</p>
            </div>
        );
    }
}

export default WordList;