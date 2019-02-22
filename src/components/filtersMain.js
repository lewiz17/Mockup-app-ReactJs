import React, { Component } from 'react';
import Search from './searchShips';
import SmartFilters from './smartFilters';
import App from '../App';

class FilterSide extends Component {

    constructor(props) {
        super(props)
        this.state = {
          saleState: false,
          favState: false,
          dateState: '',
          filterState: ''
        }
    }

    handleCk(v){
        let type = v.target.name;
        let val = v.target.value;
        let checked = v.target.checked;
        switch(type) { 
          case 'sale': { 
            this.setState({
              saleState: checked,
              formChanged: true
            });
            break; 
          } 
          case 'fav': { 
            this.setState({
              favState: checked,
              formChanged: true
            });
            break; 
          }
          case 'date': {
            if(checked){
              this.setState({
                dateState: new Date().toLocaleString().split(' ')[0],
                formChanged: true
              });
            }else{
              this.setState({
                dateState: '',
                formChanged: true
              });
            }                  
            break; 
          }
        }    
    }

    filterStatus(v){
      this.setState({
        filterState: v
      })
    }

    render() {
        const {saleState, favState, dateState, filterState} = this.state;
        return (
            <div className="columns">
                <div className="sidebar">
                  <h2 className="title-sm">
                     <i className="icon icon-lamp">&#xe806;</i>
                     Smart Filters
                  </h2> 
                  <div className="hold-filters">                  
                    <SmartFilters
                        filterType={this.handleCk.bind(this)}
                        vfil={saleState}
                        iconClass='icon-filter iconSale'
                        type='sale'
                    />
                    <SmartFilters
                        filterType={this.handleCk.bind(this)}
                        vfil={dateState}
                        iconClass='icon-filter iconSale'
                        type='date'
                    />
                    <SmartFilters
                        filterType={this.handleCk.bind(this)}
                        vfil={favState}
                        iconClass='icon-filter iconSale'
                        type='fav'
                    />
                  </div>
                  <div className="hold-status">
                    <h2 className="title-sm">Status</h2>  
                    <Search
                        filterVal={filterState}
                        filterUpdate={this.filterStatus.bind(this)}
                    />
                    <input type="button" value="Delivered" className="btn-gray mt-20"/>
                  </div>
                </div>
                <div className="main">
                  <App toSale={saleState} toFav={favState} toDate={dateState}/>
                </div>
            </div>
        )
    }

}

export default FilterSide;