//import Lista from "./components/Lista";
import {BrowserRouter} from 'react-router-dom';
//import Rutas from "./routes/Rutas";
//import './App.css';
import {AdminRouter, WebRouter} from './routes';




function App() {
  return (
  <BrowserRouter>
    <AdminRouter/>
    <WebRouter/>
  </BrowserRouter>
  );
}

export default App;
