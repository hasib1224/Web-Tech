import { useNavigate } from 'react-router-dom';

export default function Homepage() {
    const nav=useNavigate(); 
    const findLogIn=()=>{
        nav('/login');
      }

    return (
        <>
        <div>
            <h1>This is Homepage</h1> 
        </div>

        <div className='Homebody-Servdiv'>
            <div>
                <button className='App-Servbtn' onClick={findLogIn}>Log In</button>
            </div>
        </div>
        
        </>
         
    );
  }