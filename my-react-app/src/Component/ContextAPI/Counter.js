import React from "react";

export default class counter extends React.Component{

    state={
        count: 0,
    };
    
    increment = () =>{
        this.setState((prevStat) => ({ count: prevStat.count + 1 }));
        
    }

    render(){
        const {children}=this.props;
        const{count}=this.state;
        return children(count,this.increment);

    }

}