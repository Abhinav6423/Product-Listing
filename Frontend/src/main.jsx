import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient(); // in this line we create our query client instance

createRoot(document.getElementById('root')).render(

  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>

)
