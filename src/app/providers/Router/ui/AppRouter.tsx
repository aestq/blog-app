import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'

export const AppRouter = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      {Object.values(routeConfig).map((route) => (
        <Route {...route} key={route.path} />
      ))}
    </Routes>
  </Suspense>
)
