import React, { Component } from 'react';

import ShipItem from './shipItem';

class ShipList extends Component {
    constructor(props) {
        super(props)
        this.renderShipItem = this.renderShipItem.bind(this);
    }

    renderShipItem(ship,i) {
        return (
            <ShipItem
                key={i}
                ship={ship}
                num={i}
            ></ShipItem>
        );
    }
    
    render() {
        
        const {ships, filter, saleState, favState, dateState} = this.props;
        const input = filter.toLowerCase();
        const dateText = dateState;
        return (
            <ul className="list-ships">
                {ships
                    .filter((ship) => {
                        return ( 
                            (!saleState || ship.sale == saleState) &&
                            (!favState || ship.fav == favState) &&
                            (dateText == "" || ship.date == dateText) &&
                            (input == '' || !ship.origy.toLowerCase().indexOf(input) ||
                             !ship.dest.toLowerCase().indexOf(input) ||
                             !ship.origy.toLowerCase().split(', ')[0].indexOf(input) ||
                             !ship.origy.toLowerCase().split(', ')[1].indexOf(input) ||
                             !ship.origy.toLowerCase().split(', ')[2].indexOf(input) ||
                             !ship.dest.toLowerCase().split(', ')[0].indexOf(input) ||
                             !ship.dest.toLowerCase().split(', ')[1].indexOf(input) ||
                             !ship.dest.toLowerCase().split(', ')[2].indexOf(input) ||
                             !ship.price.toString().toLowerCase().indexOf(input)                              
                            )
                        )
                    })
                    .map(this.renderShipItem)}
            </ul>
        );
    }
}

export default ShipList;