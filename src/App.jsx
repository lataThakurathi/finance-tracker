import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddTransactions from './pages/AddTransactions';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Report from './pages/Report';
import TransactionsList from './pages/TransactionsList';
import UserSettings from './pages/UserSettings';
import EditTransaction from './pages/EditTransaction';
import { TransactionProvider } from './context/TransactionContext';


const router = createBrowserRouter([
  {
      path: "/",
      element: <Layout />,
      children: [
          {
              index: true,
              element: <Home />,
          },

          {
              path:"transactions",
              children: [
                  {
                      index: true,
                      element: <TransactionsList />,
                  },
                  {
                      path: "add",
                      element: <AddTransactions categories={[]} />,
                  },      {
                    path: "edit/:id",
                    element: <EditTransaction />,
                  }
              ],

          },
          
          {
            path: "/report",
            element: <Report/>
        },
          
        {
          path: "/user_settings",
          element: <UserSettings/>
      },
      ],
  },
]);

const App = () => {
  return (
    <TransactionProvider>
      <RouterProvider router={router} />
    </TransactionProvider>
  )
}

export default App
