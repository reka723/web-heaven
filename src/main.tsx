import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import '@/styles/globals.css'
import { Layout } from './components/Layout'
import HomePage from './app/HomePage'
import AboutPage from './app/AboutSection'
import ProductsPage from './app/ProdutcsSection'
import ContactPage from './app/ContactSection'
import { ServicesPage2 } from './app/Services2'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'home', element: <ServicesPage2 /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
])

const root = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(root).render(<RouterProvider router={router} />)
