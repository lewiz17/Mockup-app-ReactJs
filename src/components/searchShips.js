import React, { Component } from 'react'

class Search extends Component {
  render() {
    const { filterVal, filterUpdate} = this.props
    return (
        <input 
          type='text'
          ref='filterInput'
          placeholder='&#xe803; Search'
          className='icon xsm input-sh'
          value={filterVal}
          onChange={() => {
           filterUpdate(this.refs.filterInput.value) 
          }}
        />
    )
  }
}

export default Search