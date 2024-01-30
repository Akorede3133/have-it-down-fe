import { createRoutesFromElements, createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import AppLayout from './components/AppLayout'
import Feeds from './features/feeds/routes/Feeds'
import FollowingFeeds from './features/feeds/routes/FollowingFeeds'

import FeedsLayout from './components/FeedsLayout'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Settings from './features/settings/routes/Settings'
import Login from './features/auth/routes/Login'
import Register from './features/auth/routes/Register'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from 'react-hot-toast'

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
        <Route path='followingFeeds' element={<FollowingFeeds />} />
      </Route>
      <Route path='settings' element={<Settings />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
    </Route>
  ))
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster 
      />
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App