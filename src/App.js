import 'bootstrap/dist/css/bootstrap.min.css'
import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AddNotionScreen from "./screens/AddNotionScreen";
import EditNotionScreen from './screens/EditNotionScreen';
import LoginScreen from './screens/LoginScreen';
import Navbar from './Components/Navbar/Navbar';
import NavBrand from './Components/Navbar/NavBrand';

import ParagraphesContextProvider from './store/ParagraphesContext';
import AuthContextProvider from './store/AuthContext';
import { AuthContext } from './store/AuthContext';

/**
 * Ce que l'utilisateur voit quand il est connecté
 */
function Application(){
  return(
    <div>
        <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route 
                path='/addNotion' 
                element={
                  <ParagraphesContextProvider>
                    <AddNotionScreen/>
                  </ParagraphesContextProvider>
                }
              />
              <Route 
                path='/editNotion' 
                element={<EditNotionScreen/>}
              />
            </Routes>
        </BrowserRouter>

      </div>
  )
}

/**
 * Ce que l'utilisateur voit quand il n'est pas connecté
 */
function Login(){
  return(
    <div>
      <NavBrand/>
      <LoginScreen/>
    </div>
  )
}

/**
 * Gère ce que l'utilisateur voit en fonction de si il est connecté ou non
 */
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
