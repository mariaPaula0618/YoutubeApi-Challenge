import  React from 'react';
import {Route,Switch, BrowserRouter as Router} from 'react-router-dom';
import {Searcher} from '../Components/Searcher/Searcher';
import {VideosList} from '../Components/VideosList/VideosList';

const BaseRouter = (props) => (
    <div className="router-container" style={{width :'100%'}}>
    <Router>
        <Switch>
            <Route exact path="/" component={Searcher} />
            <Route exact path="/VideosList/:keyword" component={VideosList} />
        </Switch>
    </Router>
    </div>
    );
    
export default BaseRouter;