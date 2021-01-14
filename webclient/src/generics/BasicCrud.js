import axios from 'axios';


class BasicCrud {

  constructor (url, projection) {
    this.url = url;
    this.projection = projection;
  }

  getOperation (setEntities) {
    axios.get("/" + this.url + "/" + this.projection ? this.projection : "")
      .then( (response) => {
        setEntities(response.data._embedded[this.url]);
      }, (error) => {
        console.log(error);
      });
  }

  postOperation (setEntities, entityToSave) {
    axios.post(this.url, entityToSave)
      .then( (response) => {
        console.log(response);
        this.getOperation(setEntities);
      }, (error) => {
        console.log(error);
      });
  }

  putOperation (setEntities, url, entityToSave) {
    axios.put(url, entityToSave)
      .then( (response) => {
        console.log(response);
        this.getOperation(setEntities);
      }, (error) => {
        console.log(error);
      });
  }


  deleteOperation (setEntities, url) {
    axios.delete(url)
      .then( (response) => {
        console.log(response);
        this.getOperation(setEntities);
      }, (error) => {
        console.log(error);
      });
  }
}

export default BasicCrud;
