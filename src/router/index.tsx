import { createBrowserRouter } from 'react-router-dom';
import IndexLayout from 'src/layout/IndexLayout';
import { defaultRoutes } from 'src/router/default';

const router = createBrowserRouter([
  {
    element: <IndexLayout />,
    children: [...defaultRoutes],
  },
]);

export default router;