import React, { Component } from 'react';
import Cal from './Cal.js';
import './css/MovieList.css'

class CalList extends Component{
  static defaultProps = {
    data : [],
    onCalRemove : () => {console.log('onCalRemove is not defined');},
  }
  render(){
    const {data, onCalRemove} = this.props;
    const list = data.map(
      cal => (
        <Cal
          key={cal.id}
          cal={cal}
          onCalRemove={onCalRemove}
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
export default CalList;
