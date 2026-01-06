import MainPage from 'src/pages/MainPage';

export const defaultRoutes = [
  { path: '/', element: <MainPage /> },
  { path: '*', element: <div>404 Not Found</div> },
];
