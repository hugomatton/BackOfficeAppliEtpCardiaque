import 'bootstrap/dist/css/bootstrap.min.css'

import ParagraphesContextProvider from './store/ParagraphesContext';
import AddNotionScreen from "./screens/AddNotionScreen";
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ParagraphesContextProvider>
        <AddNotionScreen/>
      </ParagraphesContextProvider>
    </div>
  );
}

export default App;
