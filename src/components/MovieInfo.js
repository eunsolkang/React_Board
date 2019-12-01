import React, { Component } from 'react';
import deleteImg from '../img/delete.png'


class MovieInfo extends Component{
  handleRemove = () =>{
    const { info, onRemove } = this.props;
    console.log('명언 삭제!');
    if(window.confirm('명언을 정말 삭제하시겠습니까?') === true){
      onRemove(info.id)
    }
    else{
      return;
    }

  }
  render(){
    const {id, name} = this.props.info;
    return(
      <figure className="movie-card" onClick={this.handleRemove}>
        <img src={deleteImg}></img>
        <figcaption className="movie-content">
          <div className="card-name">{name}</div>
        </figcaption>
      </figure>
    )
  }
}
export default MovieInfo;
