import React from "react";
import ReactDOM from 'react-dom/client';
class Clock extends React.Component{
    render(){
        return (
            <h1 className="heading">
                <span className="text"> Hello 
                { new Date().toLocaleDateString(this.props.locale)}
                </span>
            </h1>
        );
    }
}

export default Clock;