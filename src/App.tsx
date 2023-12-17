import NavBar from './components/NavBar/NavBar';
import RouteProvider from './router/RouteProvider';

const App = () => {
  return (
    <>
      <NavBar />
      <RouteProvider />
    </>
  );
};

export default App;
