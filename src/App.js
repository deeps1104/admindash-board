import './App.css';
import Admin from './component/Admin_Panel/Admin';
import Login from './component/Login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Job from './component/Job/Job';
import Application from './component/Job_Application/Application';
import Education from './component/Education/Education';
import Test from './component/Test/Test';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login />}></Route>
    <Route path='/admin' element={<Admin/>}></Route>
    <Route path='/job' element={<Job/>}></Route>
    <Route path='/application' element={<Application/>}></Route>
    <Route path='/education' element={<Education/>}></Route>
    </Routes>
    </BrowserRouter>
    {/* <Test/> */}
    </div>
  );
}

export default App;
