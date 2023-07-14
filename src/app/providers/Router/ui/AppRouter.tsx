import { Suspense, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { PageLoader } from 'widgets/PageLoader'
import { getUserAuthData } from 'entities/User'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

export const AppRouter = () => {
  const authData = useSelector(getUserAuthData)

  const routes = useMemo(() => {
    return Object.values(routeConfig)
      .filter(route => !(route.authOnly && !authData))
  }, [authData])

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map(route => (
          <Route
            path={route.path}
            element={route.element}
            key={route.path}
          />
        ))}
      </Routes>
    </Suspense>
  )
}
