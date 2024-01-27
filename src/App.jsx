import { createRoutesFromElements, createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import AppLayout from './components/AppLayout'
import Feeds from './features/feeds/routes/Feeds'
import FeedsLayout from './components/FeedsLayout'
import FollowingFeeds from './features/feeds/FollowingFeeds'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Settings from './features/settings/routes/Settings'
import Login from './features/auth/routes/Login'
import Register from './features/auth/routes/Register'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
      retry: false
    }
  }
})
const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path='/' element={<FeedsLayout />}>
        <Route index element={<Feeds />} />
        <Route path='follwingFeeds' element={<FollowingFeeds />} />
      </Route>
      <Route path='settings' element={<Settings />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
    </Route>
  ))
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App