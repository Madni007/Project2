import './App.css';

import React, { Component } from 'react';
import { Navbar } from './component/Navbar';
import News from './component/News';
// import NewsItem from './component/NewsItem';
import LoadingBar from 'react-top-loading-bar';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

export default class App extends Component {
  pageSize = 20;
 state ={
  progress:0
 }
   setProgress=(progress)=>{
    this.setState({progress:progress})
   }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
          <Routes>
            <Route path="/" element={<News setProgress ={this.setProgress} key1="general" pageSize={this.pageSize} country="in" category="general" />} />
            <Route path="/business" element={<News setProgress ={this.setProgress} key1="business" pageSize={this.pageSize} country="in" category="business" />} />
            <Route path="/entertainment" element={<News setProgress ={this.setProgress} key1="entertainment" pageSize={this.pageSize} country="us" category="entertainment" />} />
            <Route path="/health" element={<News setProgress ={this.setProgress} key1="health" pageSize={this.pageSize} country="in" category="health" />} />
            <Route path="/science" element={<News setProgress ={this.setProgress} key1="science" pageSize={this.pageSize} country="in" category="science" />} />
            <Route path="/sports" element={<News setProgress ={this.setProgress} key1="sports" pageSize={this.pageSize} country="in" category="sports" />} />
            <Route path="/technology" element={<News setProgress ={this.setProgress} key1="technology" pageSize={this.pageSize} country="in" category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
