import Navbar from './components/Navbar';
import Home from './components/Home'
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';
import Practice from './components/Practice';
import ErrorBoundary from './components/ErrorBoundary';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  // const title = 'Welcome to my first react app';
  // const likes = 50;
  // const person = {
  //   name: 'Cedric',
  //   age: 22
  // };
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <ErrorBoundary>
                <Home />
              </ErrorBoundary>
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Router path="/practice">
              <Practice />
            </Router>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

