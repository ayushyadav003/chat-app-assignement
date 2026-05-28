import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from '../../utils/AppUtils'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.route}
            path={route.route}
            element={route.element}
          />
        ))}
      </Routes>
    </BrowserRouter>
  )
}
export default Router
