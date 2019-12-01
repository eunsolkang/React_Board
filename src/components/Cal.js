import React, { Component } from 'react';
import deleteImg from '../img/delete.png'


class Cal extends Component{
  handleCalRemove = () =>{
    const { cal, onCalRemove } = this.props;
    console.log('캘린더 삭제!');
    if(window.confirm('일정을 정말 삭제하시겠습니까?') === true){
      onCalRemove( cal.id)
    }
    else{
      return;
    }

  }
  render(){
    const {id, testName, date} = this.props.cal;
    return(
      <figure className="movie-card" onClick={this.handleCalRemove}>
        <img src={deleteImg}></img>
        <figcaption className="movie-content">
          <div className="card-name">{testName}</div>
          <div className="card-date">{date}</div>
        </figcaption>
      </figure>
    )
  }
}
export default Cal;
