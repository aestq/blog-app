import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageLoader } from 'widgets/PageLoader'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

export const AppRouter = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      {Object.values(routeConfig).map(route => (
        <Route
          path={route.path}
          element={route.element}
          key={route.path}
        />
      ))}
    </Routes>
  </Suspense>
)
