import './Navigator.css';
import React from 'react';
import axios from 'axios';

class Navigator extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      entities: [{}],
      entity_index: 0,
      entities_saved: [],
      entities_index_saved: [],
      editing: false,
      creating: false,
    };
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.create = this.create.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.save = this.save.bind(this);
    this.remove = this.remove.bind(this);
    this.cancel = this.cancel.bind(this);
    this.edit = this.edit.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    let index = this.state.entity_index;
    let entities = [...this.state.entities];
    let entity = {
      ...entities[index],
      [name]: value,
    };
    entities[index] = entity;
    this.setState({entities});
  }

  componentDidMount () {
    this.refresh();
  }

  refresh () {
    axios.get("/" + this.props.entityUrl + "/")
      .then( (response) => {
        if(response.data._embedded[this.props.entityUrl].length !== 0 ) {
          this.setState({
            entities: response.data._embedded[this.props.entityUrl],
            creating: false,
            editing: false,
          });
        }
      }, (error) => {
        console.log(error);
      });
  }

  save () {
    const entityToSave = { ...this.state.entities[this.state.entity_index]};
    if(this.state.creating) {
      axios.post(this.props.entityUrl, entityToSave)
        .then( (response) => {
          console.log(response);
          this.refresh();
        }, (error) => {
          console.log(error);
        });
    } else {
      const url = this.state.entities[this.state.entity_index]._links.self.href;
      axios.put(url, entityToSave)
        .then( (response) => {
          console.log(response);
          this.refresh();
        }, (error) => {
          console.log(error);
        });
    }
  }

  remove () {
    const url = this.state.entities[this.state.entity_index]._links.self.href;
    axios.delete(url)
      .then( (response) => {
        console.log(response);
        this.refresh();
      }, (error) => {
        console.log(error);
      });
  }

  cancel() {

  }

  create () {
    const entities_saved = [...this.state.entities];
    const entity_index_saved = this.state.entity_index.valueOf();
    this.setState({
      creating: true,
      editing: true,
      entities_saved: entities_saved,
      entity_index: 0,
      entity_index_saved: entity_index_saved,
      entities: [{}],
    });
  }

  edit () {
    const entity = {...this.state.entities[this.state.entity_index]};
    this.setState({
      editing: true,
      entity_saved: entity,
    });
  }

  next() {
    if(this.state.entity_index < this.state.entities.length) {
      this.setState({ entity_index : this.state.entity_index + 1});
    }
  }

  prev() {
    if(this.state.entity_index > 0) {
      this.setState({ entity_index : this.state.entity_index - 1});
    }
  }

  render () {
    const Entity =  this.props.entityComponent;
    let message = <p></p>;
    if(this.state.entities.length === 0) {
      message = <p>Nenhum {this.props.entityName} cadastrada</p>;
    }
    return (
      <div className="Navigator">
        <h1>{this.props.entityUrl}</h1>
        {message}
        <Entity entity={this.state.entities[this.state.entity_index]} editing={this.state.editing} onChange={this.handleInputChange}/>
        <button onClick={this.prev} disabled={this.state.entity_index === 0}>Anterior</button>
        <button onClick={this.save}>Salvar</button>
        <button onClick={this.cancel}>Descartar</button>
        <button onClick={this.remove}>Apagar</button>
        <button onClick={this.create}>Novo</button>
        <button onClick={this.edit}>Editar</button>
        <button onClick={this.next} disabled={this.state.entity_index === this.state.entities.length - 1}>Próximo</button>
      </div>
    );
  }

}

export default Navigator;
