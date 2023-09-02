import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageLoader } from 'widgets/PageLoader'
import { type AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig'
import { RequireAuth } from './RequireAuth'

const renderWithWrapper = (route: AppRoutesProps) => (
  <Route
    path={route.path}
    key={route.path}
    element={route.authOnly ? <RequireAuth>{route.element}</RequireAuth> : route.element}
  />
)

export const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(renderWithWrapper)}
      </Routes>
    </Suspense>
  )
}
