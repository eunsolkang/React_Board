import React, { Component } from 'react';
import PropTypes from 'prop-types'
import MovieInfoList from '../components/MovieInfoList.js'
import CalList from '../components/CalList.js'
import MovieHeader from '../components/MovieHeader.js'
import {
  Link, withRouter
} from 'react-router-dom'
class Home extends Component {
  state = {
    keyword : '',
    logged : false,
  }

  render(){
    const {filteredList, filteredCalList, onCalRemove ,onRemove, onChange, location, history, logged} = this.props;
    if ( logged ){
        return (
          <div>
            <MovieHeader
              onChange={onChange}>
            </MovieHeader>
            <main>
              <MovieInfoList
                data={filteredList}
                onRemove={onRemove}>
              </MovieInfoList>
            </main>
            <main>
              <CalList
                data={filteredCalList}
                onCalRemove={onCalRemove}>
              </CalList>
            </main>
          </div>
        )
    }
    else{
      history.push('./')
      return(
        <div>
        </div>
      )

    }

  }
}
export default withRouter(Home)
