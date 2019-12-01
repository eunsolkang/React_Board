import React, { Component } from 'react';
import MovieInfo from './MovieInfo.js';
import './css/MovieList.css'

class MovieInfoList extends Component{
  static defaultProps = {
    data : [],
    onRemove : () => {console.log('onRemove is not defined');},
  }
  render(){
    const {data, onRemove} = this.props;
    const list = data.map(
      info => (
        <MovieInfo
          key={info.id}
          info={info}
          onRemove={onRemove}
        />
      )
    )
    return(
      <div className="movie-list">
        {list}
      </div>
    );
  }
}
export default MovieInfoList;
