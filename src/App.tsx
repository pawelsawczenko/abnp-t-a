import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CataloguePage } from './pages/CataloguePage'
import { CartPage } from './pages/CartPage'
import { Header } from './components/Header/Header'

const queryClient = new QueryClient()

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="flex flex-col bg-stone-100 dark:bg-slate-800">
          <Header />

          <main className="flex grow items-start justify-center rounded-t-xl p-4">
            <Routes>
              <Route index element={<CataloguePage />} />
              <Route path="/cart" element={<CartPage />} />

              <Route path="/*" element={<Navigate to={'/'} />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
