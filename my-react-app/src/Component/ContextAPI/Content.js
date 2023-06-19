// import Counter from "./Counter";
// import HoverCount from "./HoverCount";
// import ThemeContext from "../../Contexts/ThemeContext";

// export default function content() {
//   return (
//     <>
//       <div>
//         <h1>This is a Content</h1>
//       </div>

//       <Counter>
//         {(count, increment) => (
//           <ThemeContext.Consumer>
//             {({ theme,switchTheme }) => (
//               <HoverCount 
//               count={count} 
//               increment={increment} 
//               theme={theme} 
//               switchTheme={switchTheme}
//               />
//             )}
//           </ThemeContext.Consumer>
//         )}
//       </Counter>
//     </>
//   );
// }




//.............Class Component ..........

import Counter from "./Counter";
import HoverCount from "./HoverCount";
import ThemeContext from "../../Contexts/ThemeContext";
import React from "react";

export default class Content extends React.Component {

    componentDidMount(){
        console.log(this.context);
    }

    render(){
        const { theme,switchTheme } =this.context;
        
        return (
            <>
              <div>
                <h1>This is a Content</h1>
              </div>
        
              <Counter>
                {(count, increment) => (
                  
                      <HoverCount 
                      count={count} 
                      increment={increment} 
                      theme={theme} 
                      switchTheme={switchTheme}
                      />
                    
                )}
              </Counter>
            </>
          );

    }
  
}

Content.contextType=ThemeContext;


//..........Using Hookk...........

// import Counter from "./Counter";
// import HoverCount from "./HoverCount";
// import ThemeContext from "../../Contexts/ThemeContext";
// import { useContext } from "react";

// export default function Content() {
//     const context =useContext(ThemeContext);
//     // console.log(context);
//     const { theme,switchTheme } =context;

//   return (
//     <>
//       <div>
//         <h1>This is a Content</h1>
//       </div>

//       <Counter>
//         {(count, increment) => (
          
//               <HoverCount 
//               count={count} 
//               increment={increment} 
//               theme={theme} 
//               switchTheme={switchTheme}
//               />
          
//         )}
//       </Counter>
//     </>
//   );
// }