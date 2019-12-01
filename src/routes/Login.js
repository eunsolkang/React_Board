import React from 'react'
import PropTypes from 'prop-types'
import {
  Link, withRouter
} from 'react-router-dom'
import './css/Posts.css'

class Login extends React.Component {
  login = false;
  state = {
    password : 0,
  }

  handleChange = (e) =>{

    this.setState({
      [e.target.name] : e.target.value,
    })

  }

  handleSubmit = () =>{
    const { onLogin , history, } = this.props;
    const { password } = this.state;
    const { admin  } = this.props;
    this.login = (password == admin) ? true : false
    onLogin(this.login)
    history.push('./home')
  }
  render () {
     return(
      <div className="context">
        <div className="title">로그인</div>
        <div className="index">
          <input name="password" placeholder="Input password" value={this.state.password} onChange={this.handleChange}/>
          <button onClick={this.handleSubmit}>로그인</button>
        </div>
      </div>
    )
  }
}

export default withRouter(Login);
