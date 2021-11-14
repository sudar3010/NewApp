import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Emp from './Componenet/Em2';
function App() {
  return (
    <BrowserRouter>
    <div>
      <switch>
      <Route  exact strict path="/"  component={Emp} />
      </switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
