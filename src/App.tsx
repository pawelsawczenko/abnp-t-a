import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CataloguePage } from './pages/CataloguePage';
import { CartPage } from './pages/CartPage';
import { Header } from './components/Header/Header';
import { ToastContainer } from 'react-toastify';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer toastClassName="!bg-stone-200 dark:!bg-slate-600 dark:!text-white" />

      <BrowserRouter>
        <div className="flex min-h-screen flex-col bg-stone-100 dark:bg-slate-800">
          <Header />

          <main className="flex justify-center p-4">
            <Routes>
              <Route index element={<CataloguePage />} />
              <Route path="/cart" element={<CartPage />} />

              <Route path="/*" element={<Navigate to={'/'} />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
