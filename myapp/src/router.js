import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './components/home';
import List from './components/list';
import Search from './components/search';
class Router extends React.Component{
    render(){
        return <div>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/list' component={List}/>
                <Route path='/saerch' component={Search}/>
            </Switch>
        </div>
    }
}
export default Router;