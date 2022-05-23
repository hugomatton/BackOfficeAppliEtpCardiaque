import 'bootstrap/dist/css/bootstrap.min.css'
import { useContext } from 'react';

import AddNotionScreen from "./screens/AddNotionScreen";
import LoginScreen from './screens/LoginScreen';
import Navbar from './Components/Navbar/Navbar';

import ParagraphesContextProvider from './store/ParagraphesContext';
import AuthContextProvider from './store/AuthContext';
import { AuthContext } from './store/AuthContext';

function Application(){
  return(
    <div>
        <Navbar/>
        <ParagraphesContextProvider>
          <AddNotionScreen/>
        </ParagraphesContextProvider>
      </div>
  )
}

function Login(){
  return(
    <LoginScreen/>
  )
}

function Root(){
  const authCtx = useContext(AuthContext)
  return(
    <div>
      {
        authCtx.isAuthenticated ? <Application/>  : <Login/> 
      }
    </div>
  )
}

function App() {

  return (
    <AuthContextProvider>
          <Root/>
    </AuthContextProvider>
  );
}

export default App;
