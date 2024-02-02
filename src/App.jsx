import { createRoutesFromElements, createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import AppLayout from './components/AppLayout'
import Feeds from './features/feeds/routes/Feeds'
import FollowingFeeds from './features/feeds/routes/FollowingFeeds'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Settings from './features/settings/routes/Settings'
import Login from './features/auth/routes/Login'
import Register from './features/auth/routes/Register'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from 'react-hot-toast'
import FeedsLayout from './features/feeds/components/FeedsLayout'
import Editor from './features/editor/routes/Editor'
import EditorLayout from './features/editor/components/EditorLayout'
import DraftLayout from './features/editor/components/DraftLayout'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
      retry: false
    }
  }
})
const DEFAULT_INITIAL_DATA = () => {
  return {
    "time": new Date().getTime(),
    "blocks": [
      {
        "type": "header",
        "data": {
          "text": "This is my awesome editor!",
          "level": 1
        }
      },
    ]
  }
}
const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route element={<AppLayout />}>
        <Route path='/' element={<FeedsLayout />}>
          <Route index element={<Feeds />} />
          <Route path='followingFeeds' element={<FollowingFeeds />} />
        </Route>
        <Route path='settings' element={<Settings />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Route>
      <Route element={<EditorLayout />}>
        <Route path='editor' element={<Editor />} />
      </Route>
      <Route element={<DraftLayout />}>
        <Route path='p/:id/edit' element={<Editor value={DEFAULT_INITIAL_DATA} />} />
      </Route>
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