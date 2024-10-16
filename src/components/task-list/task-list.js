import './task-list.css'
import PropTypes from 'prop-types'

import Task from '../task'

function TaskList({ data, onDeleted, onToggleDone, onChange, onSubmit }) {
  const elements = data.map((item) => {
    const { id, className, text, done } = item
    return (
      <li key={id} className={className}>
        <Task
          done={done}
          text={text}
          onDeleted={() => onDeleted(id)}
          onToggleDone={() => onToggleDone(id)}
          onChange={onChange}
          onSubmit={onSubmit}
          id={id}
        />
      </li>
    )
  })
  TaskList.defaultProps = {
    onDeleted: () => {},
    onToggleDone: () => {},
    data: [{}],
  }

  TaskList.propTypes = {
    onDeleted: PropTypes.func,
    onToggleDone: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.shape({})),
  }

  return (
    <section className="main">
      <ul className="todo-list">{elements}</ul>
    </section>
  )
}

export default TaskList
