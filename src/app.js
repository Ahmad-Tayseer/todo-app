import React, { Component } from 'react'

import ToDo from './components/todo/todo';
import Navbar from './components/navbar/navbar';
import SettingsContextProvider from './components/context/settings';
// import './App.css';


export default class App extends Component {
  render() {
    return (
      <div className='todo-app'>
        <SettingsContextProvider>
          <Navbar />
          <ToDo />
        </SettingsContextProvider>
      </div>
    )
  }
}
