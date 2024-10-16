import './task.css'
import { Component } from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'

export default class Task extends Component {
  state = {
    createdAt: Date.now(),
  }

  render() {
    const { text, onDeleted, onToggleDone, done } = this.props
    const { createdAt } = this.state
    const createdTime = new Date(createdAt)
    const timeAgo = formatDistanceToNow(createdTime, {
      includeSeconds: true,
      addSuffix: true,
    })

    let classNames = 'description'
    if (done) {
      classNames += ' completed'
    }

    return (
      <div className="view">
        <input className="toggle" type="checkbox" checked={done} onChange={onToggleDone} />
        <label onClick={onToggleDone}>
          <span className={classNames} onChange={onToggleDone}>
            {text}
          </span>
          <span className="created">{`created ${timeAgo}`}</span>
        </label>
        <button type="button" className="icon icon-edit" aria-label="Edit" />
        <button type="button" className="icon icon-destroy" aria-label="Edit" onClick={onDeleted} />
      </div>
    )
  }
}
Task.defaultProps = {
  text: '',
  onDeleted: () => {},
  onToggleDone: () => {},
  done: false,
}

Task.propTypes = {
  text: PropTypes.string,
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
  done: PropTypes.bool,
}
