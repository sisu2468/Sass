// All components mapping with path for internal routes

import { lazy } from 'react'

const Page404 = lazy(() => import('../pages/protected/404'))
const Blank = lazy(() => import('../pages/protected/Blank'))
const ProfileSettings = lazy(() => import('../pages/protected/ProfileSettings'))
const App = lazy(() => import('../pages/protected/App'))
const dashboard = lazy(() => import('../pages/protected/Dashboard'))
const AppPage = lazy(() => import('../pages/protected/Edit'))

const StripePaymentPage = lazy(() => import('../pages/protected/payment/Stripe'))

const routes = [
  {
    path: '/App',
    component: App
  },
  {
    path: '/Edit',
    component: AppPage
  },
  {
    path: '/Create',
    component: AppPage
  },
  {
    path: '/dashboard',
    component: dashboard,
  },
  {
    path: '/payment',
    component: StripePaymentPage,
  },
  {
    path: '/settings-profile',
    component: ProfileSettings,
  },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/blank',
    component: Blank,
  },
]

export default routes
