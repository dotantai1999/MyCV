import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Skill from './components/Skill'
import Experience from './components/Experience';
import Education from './components/Education';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <Router>
      <>
        <Route exact path="/" component={Home} />
        <Switch>
          <Route exact path="/skill" component={Skill} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/experience" component={Experience} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
