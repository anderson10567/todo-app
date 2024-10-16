import { Component } from 'react'

import NewTaskForm from '../new-task-form'
import TaskList from '../task-list'
import Footer from '../footer'

import './app.css'

export default class App extends Component {
  state = {
    data: [],
    filter: 'all',
  }

  getTaskId = () => Math.floor(Math.random() * 1000)

  onFilterChange = (filter) => {
    this.setState({ filter })
  }

  clearCompleted = () => {
    this.setState(({ data }) => {
      const taskLI = data.filter((item) => !item.done)

      return {
        data: [...taskLI],
      }
    })
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      const idx = data.findIndex((el) => el.id === id)
      const newArray = [...data.slice(0, idx), ...data.slice(idx + 1)]
      return {
        data: newArray,
      }
    })
  }

  addItem = (text) => {
    const newItem = this.createTodoItem(text)
    this.setState(({ data }) => {
      const newArr = [...data, newItem]
      return {
        data: newArr,
      }
    })
  }

  onToggleDone = (id) => {
    this.setState(({ data }) => {
      const idx = data.findIndex((el) => el.id === id)
      const oldTask = data[idx]
      const newTask = { ...oldTask, done: !oldTask.done }
      const newArray = [...data.slice(0, idx), newTask, ...data.slice(idx + 1)]
      return {
        data: newArray,
      }
    })
  }

  taskFilter(data, filter) {
    if (filter === 'all') {
      return data
    }
    if (filter === 'active') {
      return data.filter((item) => !item.done)
    }
    if (filter === 'completed') {
      return data.filter((item) => item.done)
    }
    return []
  }

  createTodoItem(text) {
    return {
      text,
      done: false,
      id: this.getTaskId(),
    }
  }

  render() {
    const { data, filter } = this.state
    const doneCount = data.filter((el) => el.done).length
    const todoCount = data.length - doneCount
    const visibleTask = this.taskFilter(data, filter)
    return (
      <div>
        <NewTaskForm onItemAdded={this.addItem} />
        <TaskList data={visibleTask} onDeleted={this.deleteItem} onToggleDone={this.onToggleDone} />
        <Footer
          doneCount={doneCount}
          todoCount={todoCount}
          filter={filter}
          onFilterChange={this.onFilterChange}
          clearCompleted={this.clearCompleted}
        />
      </div>
    )
  }
}
