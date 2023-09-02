import { Suspense, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { getUserInited, userActions } from 'entities/User'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useTheme } from 'shared/lib/hooks/useTheme'
import { AppRouter } from './providers/Router'

const App = () => {
  const { theme } = useTheme()
  const dispatch = useAppDispatch()
  const userInit = useSelector(getUserInited)

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <div className='page-wrapper'>
            {userInit && <AppRouter />}
          </div>
        </div>
      </Suspense>
    </div>
  )
}

export default App
