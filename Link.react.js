import React from 'react';

export default class Link extends React.Component {

    constructor() {
        super();
        this.state = { value : false };
        this.normal = "normal";
        this.hovered = "hovered";
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this)
    }

    onMouseEnter (e) {
        this.setState({value : true})
    }

    onMouseLeave (e) {
        this.setState({value : false})
    }

    render () {


        return (
            <a href = "#"
               onMouseEnter={this.onMouseEnter}
               onMouseLeave={this.onMouseLeave}>{this.state.value? this.hovered:this.normal}</a>

        )
    }
}