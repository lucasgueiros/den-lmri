import BasicCrud from './BasicCrud.js';
import axios from 'axios';

class FunctionalCrud extends BasicCrud {
  constructor(url, getConsumer, projection) {
    super(url, projection);
    this.getConsumer = getConsumer;
  }

  getOperation (setEntities, getConsumer) {
    axios.get("/" + this.url + "/" + (this.projection ? this.projection : ""))
      .then( (response) => {
        let entities = [];
        let entity = {};
        for(entity of response.data._embedded[this.url]) {
          //entity = getConsumer(entity);
          entities.push({...entity});
        }

        setEntities(entities);
      }, (error) => {
        console.log(error);
      });
  }
}

export default FunctionalCrud;
