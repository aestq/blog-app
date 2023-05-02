import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { AppRouter } from './providers/Router'
import { Suspense, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'shared/lib/hooks/useTheme'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { userActions } from 'entities/User'

const App = () => {
  const { theme } = useTheme()
  const dispatch = useAppDispatch()

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
            <AppRouter />
          </div>
        </div>
      </Suspense>
    </div>
  )
}

export default App
