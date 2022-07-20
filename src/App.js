import { Route, Routes } from 'react-router-dom';
import Login from './Shared/Login/Login';
import SignUp from './Shared/SignUp/SignUp';
import Nav from './Shared/Nav/Nav';
import Home from './HomeSection/Home/Home';


function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={ <Home/> }></Route>
        <Route path='/login' element={ <Login/> }></Route>
        <Route path='/signUp' element={ <SignUp/> }></Route>
      </Routes>      
    </div>
  );
}

export default App;
