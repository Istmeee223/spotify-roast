import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginButton from './components/LoginButton';
import RoastResult from './components/RoastResult';
import Spinner from './components/Spinner';
import useSpotify from './hooks/useSpotify';
import './styles/app.css';

const App = () => {
    const { loading } = useSpotify();

    return (
        <Router>
            <div className="App">
                {loading ? (
                    <Spinner />
                ) : (
                    <Switch>
                        <Route path="/" exact component={LoginButton} />
                        <Route path="/roast" component={RoastResult} />
                    </Switch>
                )}
            </div>
        </Router>
    );
};

export default App;