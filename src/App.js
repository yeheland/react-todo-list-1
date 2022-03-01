import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Form';
import Todos from './Todos';

function App() {
  return (
    <div className="App">
      <Form />
      <hr />
      <Todos />
    </div>
  );
}

export default App;
