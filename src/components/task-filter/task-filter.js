import './task-filter.css'
import PropTypes from 'prop-types'

const filterButtons = [
  { name: 'all', text: 'All' },
  { name: 'active', text: 'active' },
  { name: 'completed', text: 'completed' },
]
function Taskfilter({ filter = 'all', onFilterChange = () => {} }) {
  const buttons = filterButtons.map(({ name, text }) => {
    const isActive = name === filter
    const classNames = `btn${isActive ? 'btn-info' : 'btn-secondary'}`

    return (
      <li key={name}>
        <button key={name} type="button" onClick={() => onFilterChange(name)} className={classNames}>
          {text}
        </button>
      </li>
    )
  })
  Taskfilter.defaultProps = {
    filter: 'all',
    onFilterChange: () => {},
  }
  Taskfilter.propTypes = {
    filter: PropTypes.string,
    onFilterChange: PropTypes.func,
  }

  return <ul className="filters">{buttons}</ul>
}

export default Taskfilter
