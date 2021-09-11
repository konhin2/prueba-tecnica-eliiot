import './App.css'
import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'react-router-dom'

// Views
import Home from './components/Home'
import NotFound from './components/NotFound'

// Global Context
import CurrencyState from './context/CurrencyState'

function App() {
  return (
    <>
      <Router>
        <Switch>
          {/* Public Routes */}
          <Route exact patch="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
