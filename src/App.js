import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import store from './utils/store';

function App() {  
  const appRouter = createBrowserRouter([{
    path:'/',
    element: <Body />, //Bcz only body will be changed rest will be same
    children:[
      {
        path:'/',
        element:<MainContainer />
      },
      {
        path:'/watch',
        element:<WatchPage />
      }
    ]
  }])
  return (
    <Provider store={store}>
    <>
    <Header />
    <RouterProvider router={appRouter} />
    </>
    </Provider>
  );
}

export default App;
