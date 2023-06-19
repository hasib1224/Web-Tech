// It's an Higher Order component so convention is to start with "With"

import React from "react";

const withCounter = (OriginalComp) =>{
    class NewComponent extends React.Component{
        state = {
            count: 0,
          };
        
          countChange = () => {
            this.setState((prevStat) => ({ count: prevStat.count + 1 }));
          };

        render(){
            const {count}=this.state;

            return(
                <OriginalComp count={count} countChange={this.countChange}/>
            );
        }
    }
    return NewComponent;
}

export default withCounter;