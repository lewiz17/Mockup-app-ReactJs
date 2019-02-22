import React, { Component } from "react";

class SmartFilters extends Component {
  render() {
    const { filterType,vfil,type, iconClass} = this.props

    return (
      <div className="hold-check">
        <input id={type} type="checkbox" defaultChecked={vfil} value={vfil} name={type} className='filter' onChange={(e) => {filterType(e) }} />
        <label htmlFor={type}></label>
        <span className={iconClass}></span>
      </div>
    ); 
  }
}

export default SmartFilters
