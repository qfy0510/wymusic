import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import {NavLink} from 'react-router-dom';
import Router from './router';

class App extends Component {
  render() {
    return (
      <div>
          <header className='clearfix'>
              <span>网易云音乐</span>
              <strong>下载APP</strong>
          </header>
          <nav>
              <NavLink  exact to='/' activeClassName='active'>推荐音乐</NavLink>
              <NavLink to='/list' activeClassName='active'>热歌榜</NavLink>
              <NavLink to='/saerch' activeClassName='active'>搜索</NavLink>
          </nav>
          <Router></Router>
      </div>
    ) 
  }
}

export default App;
