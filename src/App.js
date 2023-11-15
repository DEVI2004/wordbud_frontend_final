import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {HashRouter,Routes,Route} from "react-router-dom";
import AdminCreate from './components/AdminCreate';
import AdminHome from './components/AdminHome';
import EditContent from './components/EditContent';
import LoginPage from './components/LoginPage';
import CreateNewUser from './components/CreateNewUser';
import UserHome from './components/UserHome';
import ContentShow from './components/ContentShow';
import Home from './pages';
//import SigninPage from './pages/signin';

function App() {
  return (
    <div >
      <HashRouter>
          <Routes>
            <Route path='/signin' element={<LoginPage/>}/>
            <Route path='/' element={<Home/>}/>
            {/* <Route path="/signin" element={<SigninPage/>} /> */}
            <Route path='/AdminHome' element={<AdminHome/>}/>
            <Route path='/AddContent' element={<AdminCreate/>}/>
            <Route path='/Editcontent/:id' element={<EditContent/>}/>
            <Route path='/NewUser' element={<CreateNewUser/>}/>
            <Route path='/UserHome/:id' element={<UserHome/>}/>
            <Route path='/content-show/:id1/:id2' element={<ContentShow/>}/>
          </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
