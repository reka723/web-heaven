import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import '@/styles/globals.css'
import { Layout } from './components/Layout'
import HomePage from './app/HomePage'
import AboutPage from './app/AboutPage'
import ContactPage from './app/ContactSection'
import { ServicesPage } from './app/ServicesPage'
import FAQPage from './app/FAQPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'rolunk', element: <AboutPage /> },
      { path: 'szolgaltatasok', element: <ServicesPage /> },
      { path: 'gyik', element: <FAQPage /> },
      { path: 'kapcsolat', element: <ContactPage /> },
      { path: 'elso-alkalom', element: <ContactPage /> },
    ],
  },
])

const root = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(root).render(<RouterProvider router={router} />)
