import { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import { FaBars } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';
import PreLoader from './Components/PreeLoader/PreLoader';

function App() {
  const [values, setValue] = useState(true);
  const [loading,setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    },2000)
  },[])

  return (
   <div>
    {loading ? <PreLoader/> : <div className='flex'>
    <div
      className={`w-[220px] absolute md:relative h-[100vh] overflow-y-auto bg-[#17181B] z-[999] duration-500 sidbarContainer ${
        values ? "-left-[500px]" : "left-[0px]"
      } md:left-0`}
    >
      <Sidebar/>
    </div>

    <div
      onClick={() => setValue(!values)}
      className='md:hidden absolute right-0 top-2 text-lg cursor-pointer p-2'
    >
      <button><FaBars/></button>
    </div>
    {/* outlet */}
    <div className='flex-1  overflow-y-auto p-2 md:px-4 bg-gray-500'>
      <Outlet></Outlet>
      
    </div>
  </div>}
     
   </div>
  );
}

export default App;