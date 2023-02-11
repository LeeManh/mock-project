import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import App from './App'
import { store, persistor } from 'app/store'
import LoadingDots from 'components/LoadingDots/LoadingDots'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1
    }
  }
})

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PersistGate loading={<LoadingDots />} persistor={persistor}>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <App />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </Provider>
      </PersistGate>
    </BrowserRouter>
  </React.StrictMode>
)
