import {Link} from 'react-router-dom'
import {useTheme} from './providers/ThemeProvider/lib/useTheme'
import {classNames} from 'shared/lib/classNames/classNames'
import {AppRouter} from 'app/providers/Router'
import './styles/index.scss'

const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>toggle</button>
      <Link to='/'>Main</Link>
      <Link to='/about'>About</Link>
      <AppRouter />
    </div>
  )
}

export default App