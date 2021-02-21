// import logo from './logo.svg';
import './App.css';
import TodoEdit from './components/TodoEdit';
import TodoListALL from './components/TodoListAll';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      
      <Router>
        <TodoListALL />
        
      </Router>
      
    </div>
  );
}

export default App;
