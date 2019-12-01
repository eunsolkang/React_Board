import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './css/Posts.css'
import {
  Link, withRouter
} from 'react-router-dom'

class Posts extends Component{
  state = {
    date : '',
    name : '',
    testName : '',
  }
  handleChange = (e) =>{
    this.setState({
      [e.target.name] : e.target.value,
    })
  }
  handleSubmit = (e) =>{
    const { history } = this.props;
    console.log('dkdk');
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      date : '',
      name : '',
      testName : '',
    })
    history.push('./home')
  }
  handleDateSubmit = (e) =>{
    const { history } = this.props;
    console.log(this.state.cal);
    e.preventDefault();

    this.props.onCalCreate(this.state);
    this.setState({
      date : '',
      name : '',
      testName : '',
    })
    history.push('./home')
  }
  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="context">
            <div className="title"> 명언 추가 </div>
            <div className="index">
              <input
                placeholder = 'Input Name'
                value = {this.state.name}
                onChange={this.handleChange}
                name = 'name'
              />
              <button type="submit">등록</button>
            </div>
        </form>
        <form onSubmit={this.handleDateSubmit} className="context">
            <div className="title"> 시험 일정 추가 </div>
            <div className="index">
              <input
                placeholder = 'Input ExamName'
                value = {this.state.testName}
                onChange={this.handleChange}
                name = 'testName'
                type= 'text'
              />
              <input
                placeholder = 'Input Date'
                value = {this.state.date}
                onChange={this.handleChange}
                name = 'date'
                type= 'date'
              />
              <button type="submit">등록</button>
            </div>
        </form>
      </div>
    )
  }

}
export default withRouter(Posts)
