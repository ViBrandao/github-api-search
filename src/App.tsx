import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Main } from './components/Main';
import './styles/global.scss';

function App() {
  return (
    <Router>
      <Route path="/:username?">
        <Main />
      </Route>
    </Router>
  );
}

export default App;
