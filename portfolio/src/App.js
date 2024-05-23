import logo from './logo.svg';
import './App.css';
import Header from "./component/pages/Header";
import About from "./component/pages/About";
import Projects from "./component/pages/Projects";
import Contact from "./component/pages/Contact";
import Footer from "./component/pages/Footer";

function App() {
  return (
      <div className="App">
        <Header />
        <main>
          <About />
        </main>
        <Footer />
      </div>
  );
}

export default App;
