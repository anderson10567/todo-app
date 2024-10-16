import { Component } from 'react'
import './new-task-form.css'

export default class NewTaskForm extends Component {
  state = {
    text: '',
  }

  onLabelChange = (e) => {
    this.setState({
      text: e.target.value,
    })
  }

  onSubmit = (e) => {
    const { onItemAdded } = this.props
    e.preventDefault()
    const { text } = this.state
    onItemAdded(text)
    this.setState({
      text: '',
    })
  }

  render() {
    const { text } = this.state
    return (
      <section className="todoapp">
        <form className="header" onSubmit={this.onSubmit}>
          <h1>Todos</h1>
          <input className="new-todo" placeholder="What needs to be done?" onChange={this.onLabelChange} value={text} />
        </form>
      </section>
    )
  }
}
