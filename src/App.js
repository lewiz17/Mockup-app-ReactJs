import React, { Component } from 'react';
import dataShips from './components/data';
import Search from './components/searchShips';
import ShipList from './components/shipList';
import { Prompt } from "react-router-dom";
import Modal from 'react-awesome-modal';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
          ships: dataShips,
          filterText: '',
          formChanged: false,
          modalVisible: false
        }
    }

    openModal() {
        this.setState({
          modalVisible: true
        });
    }

    closeModal() {
        this.setState({
          modalVisible: false
        });
    }

    filterUpdate(value){
      this.setState({
        filterText: value,
        formChanged: true
      })
    }

    addShip(e){
      e.preventDefault();
      const newShip = {
        id: this.state.ships.length + 1,
        origy: this.origy.value,
        dest: this.dest.value,
        date: this.date.value,
        price: (this.price.validity.valid) ? this.price.value : price,
      };

      this.setState({
        ships: [...this.state.ships, newShip],
        formChanged: true
      })

      this.addForm.reset();
      this.title.focus();
      
    }

    render() {
      const {ships,filterText, formChanged} = this.state;
      const {toSale,toFav,toDate} = this.props;
      return (
        <div>
              <Prompt when={formChanged} message="¿Está seguro que desea cambiar de Pagina?" />         
              <Search
                filterVal={filterText}
                filterUpdate={this.filterUpdate.bind(this)}
              />
              <ShipList
                ships={ships}
                filter={this.state.filterText}
                saleState={toSale}
                favState={toFav}
                dateState={toDate}
              />
              
              <input type="button" value="Agregar" className="icon-more" onClick={() => this.openModal()} />
              <Modal visible={this.state.modalVisible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                  <div>
                      <form className="form-addNew" ref={(input) => this.addForm = input} onSubmit={(e) => {this.addShip(e)}}>
                        <input ref={(input) => this.title = input} name="origy" type="text" placeholder="Ingresar origen"/>
                        <input ref={(input) => this.title = input} name="dest" type="text" placeholder="Ingresar destino"/>
                        <input ref={(input) => this.price = input} pattern="[0-9]*" name="price" type="text" placeholder="Ingresar precio"/>
                        <button type="submit" className="btn">Aceptar</button>
                      </form>
                  </div>
              </Modal>
        </div>
      );
    }
}

export default App;