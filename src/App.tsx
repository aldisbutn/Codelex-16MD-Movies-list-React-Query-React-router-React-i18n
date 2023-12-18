import { ToastContainer } from 'react-toastify';
import NavBar from './components/NavBar/NavBar';
import RouteProvider from './router/RouteProvider';
import 'react-toastify/dist/ReactToastify.css';
import LanguageSwitch from './components/LanguageSwitch/LanguageSwitch';
const App = () => {
  return (
    <>
      <ToastContainer />

      <NavBar />
      <LanguageSwitch />
      <RouteProvider />
    </>
  );
};

export default App;
