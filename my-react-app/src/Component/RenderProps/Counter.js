import React from "react";


export default class counter extends React.Component{

    state={
        count: 0,
    };
    
    increment = () =>{
        this.setState((prevStat) => ({ count: prevStat.count + 1 }));
        
    }

    render(){
        
        //commented code is also correct

        const {children}=this.props;
        // const {render} =this.props;
        const{count}=this.state;
        // return render(count,this.increment);
        return children(count,this.increment);

    }

}