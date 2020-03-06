import './App.css';

import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'React Simple CRUD Application',
      act: 0,
      index: '',
      datas: []
    }
  }

  componentDidMount() {
    // this.refs.name.focus()
  }

  onSubmit = (e) => {
    e.preventDefault()
    console.log('click button!')

    let datas = this.state.datas
    let name = this.refs.name.value
    // let lastName = this.refs.lastname.value
    // let userName = this.refs.username.value
    let email = this.refs.email.value

    if (this.state.act === 0) {
      let data = {
        name, email
      }
      datas.push(data)
    } else {
      let index = this.state.index
      datas[index].name = name
      datas[index].email = email
    }




    this.setState({
      datas: datas,
      act: 0
    })

    this.refs.myForm.reset()

  }

  fRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i, 1)
    this.setState({
      datas: datas
    })
  }

  fEdit = (i) => {
    let data = this.state.datas[i]
    this.refs.name.value = data.name
    // this.refs.lastName.value = data.lastName
    // this.refs.userName.value = data.userName
    this.refs.email.value = data.email

    this.setState({
      act: 1,
      index: i
    })
  }


  render() {
    let datas = this.state.datas
    return (
      <div className="App">
        <h2>{this.state.title}</h2>
        <form ref="myForm" className="myForm">
          <input
            type="text"
            ref="name"
            placeholder="First Name"
            className="formField"
          />

          <input
            type="email"
            ref="email"
            placeholder="Email"
            className="formField"
          />
          <button onClick={this.onSubmit}
            className="myButton"
          >
            Submit
          </button>
        </form>
        <br />
        <br />
        <div>
          {datas.map((item, i) => {
            return (
              <span>
                <li key={i} className="myList">
                  {i + 1} - {item.name} - {item.email}
                  <button onClick={() => this.fRemove(i)} className="myListButton">Delete</button>
                  <button onClick={() => this.fEdit(i)} className="myListButton">Edit</button>
                </li>
                <br />
              </span>

            )
          }
            // <li key={i} className="myList">
            //   <span>{i + 1}.{item.firstname}{item.lastname}{item.username}{item.email}</span>


            // </li>

          )}
        </div>
      </div>
    )
  }
}


export default App;
