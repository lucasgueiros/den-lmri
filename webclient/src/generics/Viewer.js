import './Viewer.css';
import React from 'react';
import axios from 'axios';

class Viewer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      entity: {},
    }

    //this.create = this.create.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    //this.save = this.save.bind(this);
    //this.remove = this.remove.bind(this);
    //this.cancel = this.cancel.bind(this);
    //this.edit = this.edit.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount () {
    this.update();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    let entity = {
      ...this.state.entity,
      [name]: value,
    };
    this.setState({entity});
  }

  update () {
    axios.get(this.props.url)
      .then( (response) => {
        this.setState({
          entity: response.data,
          creating: false,
          editable: false,
        });
      }, (error) => {
        console.log(error);
      });
  }

  render () {
    const Entity =  this.props.entityComponent;
    return (
      <div className="Viewer">
        <Entity
          entity={this.state.entity}
          editable={this.state.editable}
          onChange={this.handleInputChange}/>
      </div>
    );
  }

}

export default Viewer;
