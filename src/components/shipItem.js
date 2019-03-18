import React, { Component } from 'react';
import Moment from 'react-moment';

class ShipItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
          qt: 1,
        }
        this.updatePrice = this.updatePrice.bind(this);
        this.preventDel = this.preventDel.bind(this);
    }

    updatePrice(v){
        this.setState({
            qt: parseInt(v.target.value)
        })
    }

    preventDel(v){
        if (v.keyCode == 8){
            v.preventDefault();
        }
    }

    

    render() {
        const {ship} = this.props; 
        return (
            <li className="ship-item animated fadeIn">
                <div className="hold-col">
                    <span className="date-text">
                        <Moment parse="DD-MM-YYYY" format="dddd Do">{ship.date}</Moment>
                    </span>                        
                </div>
                <div className="hold-col">
                    <i className="icon icon-direction">&#xe808;</i>
                    <div className="rute-ship">
                        {ship.origy}
                        <i className="icon icon-down">&#xe807;</i>
                        {ship.dest}
                    </div>
                </div>
                <div className="hold-col">
                    <i className="icon icon-truck icon-3x">&#xe809;</i>
                    <div className="value-ship">
                        <span className="price">{"$"+ship.price*this.state.qt+".00"}</span>
                        <span className="qty"><input type="number" min="1" max="10" step="1" value={this.state.qt} onChange={(e) => {this.updatePrice(e)}} onKeyDown={(e) => {this.preventDel(e)}} className="input_q"/></span>
                    </div>                        
                </div> 
            </li>
        );
    }
}

export default ShipItem;