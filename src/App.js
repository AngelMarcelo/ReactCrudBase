
import './App.css';
import Navigation from './components/common/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/common/Footer';
import Error404 from './components/pages/Error404';

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Error404/>
      <Footer></Footer>
    </div>
  );
}

export default App;
