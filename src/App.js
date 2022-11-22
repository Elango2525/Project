import './App.css';
import PER from './PER'
import Admin from './Admin'
import FB from './FB'
import Create from './Create'
import Com from './Com'
import Search from './Search'
import Percnt from './Percnt'
import Forgot from './Forgot'
import Contact from './Contact'
import About from './About'
import First from './First'
import Second from './Second'
import Street from './Street'
import Drain from './Drain'
import Water from './Water'
import Submit from './Submit';
import{ BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <Router>
      
    <div className="App">
      <Switch>
        <Route exact path="/" component={PER}></Route>
        <Route exact path="/Ad" component={Admin}></Route>
        <Route exact path="/Us" component={PER}></Route>
        <Route exact path="/Cr" component={Create}></Route>
        <Route exact path="/fb" component={FB}></Route>
        <Route exact path="/Com" component={Com}></Route>
        <Route exact path="/Sea" component={Search}></Route>
        <Route exact path="/Pcnt" component={Percnt}></Route>
        <Route exact path="/for" component={Forgot}></Route>
        <Route exact path="/Con" component={Contact}></Route>
        <Route exact path="/Abt" componenet={About}></Route>
        <Route exact path="/Fir" component={First}></Route>
        <Route exact path="/Second" component={Second}></Route>
        <Route exact path="/Street" component={Street}></Route>
        <Route exact path="/Drain" component={Drain}></Route>
        <Route exact path="/Water" component={Water}></Route>
        <Route exact path="/Submit" component={Submit}></Route>
      </Switch>
     
        
    </div>
    </Router>
  );
}
export default App;

