import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

export const AppRouter = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      {Object.values(routeConfig).map((route) => (
        <Route {...route} key={route.path} />
      ))}
    </Routes>
  </Suspense>
)
