import './App.css';

import React, { Component } from 'react';
import { Navbar } from './component/Navbar';
import News from './component/News';
// import NewsItem from './component/NewsItem';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

export default class App extends Component {
  pageSize = 6;

  render() {
    return (
      <div>
        <Router>
          <Navbar />
        
          <Routes>
            <Route path="/" element={<News key1="general" pageSize={this.pageSize} country="in" category="general" />} />
            <Route path="/business" element={<News key1="business" pageSize={this.pageSize} country="in" category="business" />} />
            <Route path="/entertainment" element={<News key1="entertainment" pageSize={this.pageSize} country="us" category="entertainment" />} />
            <Route path="/health" element={<News key1="health" pageSize={this.pageSize} country="in" category="health" />} />
            <Route path="/science" element={<News key1="science" pageSize={this.pageSize} country="in" category="science" />} />
            <Route path="/sports" element={<News key1="sports" pageSize={this.pageSize} country="in" category="sports" />} />
            <Route path="/technology" element={<News key1="technology" pageSize={this.pageSize} country="in" category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
