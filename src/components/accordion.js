import React, { Component } from 'react';

class Accordion extends Component{
    constructor(props){
        super(props);
        this.state = {
            isCollapsed: true
        };
        this.onClickHeading = this.onClickHeading.bind(this);
    }

    onClickHeading(){
        this.setState({
            isCollapsed: !this.state.isCollapsed
        });
    }

    render(){
        const {heading, children} = this.props;
        const {isCollapsed} = this.state;
        return (<div className = "Accordion">
            <div className = "Heading" onClick = {this.onClickHeading}>
                <h3>
                    {heading}
                </h3>
            </div>
            {   !isCollapsed && 
                    <div className = "Content">
                        {children}
                    </div>
            }
        </div>);
    }
}

export default Accordion;