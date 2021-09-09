import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import './App.css'
import Landing from './components/home/Landing'
import Movie from './components/home/Movie'
import AboutUs from './components/home/AboutUs'
import store from './store'
import { HashRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/movie/:id" component={Movie} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Footer />
          </>
        </Router>
      </Provider>
    )
  }
}

export default App
