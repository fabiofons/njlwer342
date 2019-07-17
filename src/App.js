import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor() {
    super()

    this.state = { 
      text: "",
      tasks: ['Sacar la ropa', 'Hacer la cama', 'Leer un rato']
    }
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit(e) {
    const tasks = this.state.tasks
    this.setState({
      tasks: tasks.concat(this.state.text),
      text: ""
    })
    e.preventDefault();
  }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((t, i) => 
              <li key={i}>{t}</li>
            )}
          </ul>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <input type="text" id="new-task" value={this.state.text} onChange={this.handleChange.bind(this)} placeholder="Ingresa una tarea y oprime Enter" />
            </form>
        </div>
      </div>
    )
  }
}


export default App;
