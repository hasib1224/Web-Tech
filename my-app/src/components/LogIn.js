

import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const nav=useNavigate(); 
    const FindDashboard=()=>{
        nav('/dashboard');
      }

    return (
        <>
        <div>
            <h1>This is LogIn Page</h1> 
        </div>

        <div className='Homebody-Servdiv'>
            <div>
                <button className='App-Servbtn' onClick={FindDashboard}>Dashboard</button>
            </div>
        </div>
        
        </>
         
    );
  }