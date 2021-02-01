
import * as React from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:6789/IBM-list';




class Ibm extends React.Component{
	  state = {
      users: [] ,
      selectedFile: null
           
            
           
    };
     refreshPage() {
      window.location.reload(false);
    }
   
    onChangeHandler=event=>{
      this.setState({
        selectedFile: event.target.files[0],
        loaded: 0,
      })
    }
   
    onClickHandler = () => {
      const data = new FormData()
      data.append('file', this.state.selectedFile)
      axios.post("http://localhost:6789/upload3", data, { 
         // receive two    parameter endpoint url ,form data
     })
     .then(res => { // then print response status
      console.log(res.statusText)
   })
  }
  
 


  async postData(value) {


    fetch('http://localhost:6789/runM', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
     

      body: JSON.stringify({
        user: {
            name: value,
            email: "john@example.com"
        }
    })
    
    
});
  }

  async postMigration() {


    fetch('http://localhost:6789/Migration', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
     

      body: JSON.stringify({
        user: {
           
            email: "john@example.com"
        }
    })
    
    
});
  }

  async deleteData(value) {


    fetch('http://localhost:6789/deleteM', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
     

      body: JSON.stringify({
        user: {
            name: value,
            email: "john@example.com"
        }

    })
   

});

  }
  
  componentDidMount() {
    const url = `${API_URL}`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ users: data })
      console.log(this.state.users)
     })
  }


  render() {

    return (
      <div>
      <main className="container my-5">
        <main>
        <h1 className="text-primary text-center" > Configuration IBM </h1>   

        </main>

        <input type="file" name="file" className="km-btn-file"  onChange={this.onChangeHandler}/>

        <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button> 




  <table className="table table-hover table-dark">
  <thead>
  <tr>

    <th scope="col">Script</th>
    <th scope="col">path</th>

    <th scope="col">size</th>

    <th scope="col">filetype</th>
    <th scope="col">    uploadDate</th>

    <th scope="col">Executer</th>
    <th scope="col">Delete</th>
  
  </tr>
  </thead>
  <tbody>
  {this.state.users.map((user) => (
  <tr>

    <td> {user.name}</td>
    <td> {user.path}</td>
    <td> {user.size}</td>
    <td> {user.filetype}</td>
    <td> {user.uploadDate}</td>
 
   <td> <button  onClick= {() => this.postData( user.name)}> Run  </button> </td>
   <td> <button  onClick= {() => this.deleteData( user.name)}> Delete  </button> </td>
  
  </tr>
    ))}
  
  </tbody>
  </table>
  
      </main>
      </div>
    
  
    
  )
  }
  }
    


export default Ibm;




