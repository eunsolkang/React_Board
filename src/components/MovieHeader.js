import React, { Component } from 'react';
import logo from '../img/google.png';
import './css/header.css'
import { Link } from 'react-router-dom';

class MovieHeader extends Component{
  static defaultProps = {
    onChange : () => console.warn('onChange is not defined!'),
  }
  state = {
    keyword : '',
  }
  handleChange = (e) =>{
    this.setState({
      keyword : e.target.value,
    })
  }
  handleSubmit = (e) =>{
    const { onChange } = this.props;
    onChange(this.state.keyword)
  }

  render(){

      return(
      <header>
        <div className="header-left">
          <div className="logo-box">
            <Link to="/home"><img src={logo} className="logo-img"></img></Link>
          </div>
          <div className="search-box">
            <input
              type="text"
              value={this.state.keyword}
              onChange={this.handleChange}
              className="search-input"
              name="keyword"
              ></input>
            <button onClick={this.handleSubmit}>0</button>
          </div>
        </div>
        <Link to='/write' className="write-button">추가하기</Link>
      </header>
    )
  }
}
export default MovieHeader
