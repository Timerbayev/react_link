import React from 'react';
import ReactDOM from 'react-dom';

class Link extends React.Component {
    constructor() {
        super();
        this.state = { text : 'normal' }
    }

    onMouseover (e) {
        this.setState({text : 'hovered'})
    }

    onMouseout (e) {
        this.setState({text : 'normal'})
    }
    render () {
        const {text} = this.state;
        return (
            <a href = "#"
                onMouseEnter={this.onMouseover.bind(this)}
                onMouseLeave={this.onMouseout.bind(this)}>{text} </a>
        )
    }
}

ReactDOM.render(<Link />, document.getElementById('root'));

