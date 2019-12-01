import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import './App.css';
import MovieInfoList from './components/MovieInfoList.js';
import MovieHeader from './components/MovieHeader.js';
import { fire, getFireDB, writeUserData, removeUserData, writeCalData, removeCalData } from './shared/firebase';

import Home from './routes/Home';
import Posts from './routes/Posts';
import Login from './routes/Login'

class App extends Component {
  constructor() {
      super();
      fire();
  }
  admin = 0
  logged = false;
  id = -1;
  calId = -1;
  state = {
    information : [

    ],
    calendar : [

    ],
    keyword : '',
    value : 0,
  }
  componentDidMount = () =>{
    console.log('ComponentDidMount!!');
    getFireDB().then(res =>{
      if(res.val() !== null)
      {
        this.admin = res.val().admin;
        if(res.val().information != 'empty'){
          this.id = res.val().information.length - 1;
          console.log(this.id);
          this.setState({
            information : res.val().information,
          })
        }
        if(res.val().calendar != 'empty'){
          this.calId = res.val().calendar.length - 1;
          this.setState({
            calendar : res.val().calendar,
          })
        }
      }

   });

  }



  handleChange = (keyword) =>{
    this.setState({
      keyword : keyword,
    })
  }
  handleRemove = (id) =>{
    console.log('Fucking Delete');
    const {information} = this.state;
    removeUserData(information, id);
    this.setState({
      information : information.filter(info => info.id !== id),
    })
  }
  handleCalRemove = (calId) =>{
    const { calendar } = this.state;
    console.log('Sex Delete');
    removeCalData(calendar, calId);
    this.setState({
      calendar : calendar.filter(cal => cal.id !== calId),
    })
  }
  handleCreate = (data) =>{
    const { information } = this.state;
    this.setState({
      information : information.concat({id : ++this.id, ...data })
    })
    writeUserData(information, this.id, data.name)
  }
  handleCalCreate = (calData) =>{
    const { calendar } = this.state;
    this.setState({
      calendar : calendar.concat({id : ++this.calId, ...calData })
    })
    writeCalData(calendar, this.calId, calData.testName, calData.date)
  }
  handleLogin = (login) =>{
    this.logged = login
  }
  render() {
    console.log('Rendering!!!');
    const {information, keyword, calendar} = this.state;

    const filteredList =  information.filter(
      info => info.name.indexOf(keyword.trim()) !== -1
    );
    const filteredCalList =  calendar.filter(
      cal => cal.testName.indexOf(keyword.trim()) !== -1
    );
    return (
      <BrowserRouter>
        <div className="App">
          <Route
            exact
            path='/'
            component={() => <Login admin={this.admin} onLogin={this.handleLogin}></Login> }/>
          <Route
            path='/write'
            component={()=> <Posts onCreate={this.handleCreate} onCalCreate={this.handleCalCreate}></Posts>}/>
          <Route
            path='/home'
            component={()=>
              <Home onRemove={this.handleRemove} onCalRemove={this.handleCalRemove} onChange={this.handleChange} filteredList={filteredList} filteredCalList={filteredCalList} logged={this.logged}></Home>}/>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
