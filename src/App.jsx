import Association from "./components/Association"
import Inclubotor from "./components/Inclubotor";
import Media from "./components/Media";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar.jsx"
import "./App.css";
import ReactGA from "react-ga";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

  function initializeAnalytics() {
    ReactGA.initialize("G-13VDW9PYVP");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  
  function App() {
    useEffect(() => {
      initializeAnalytics();
  
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-13VDW9PYVP");
    }, []);
  return (
    <>
      <Helmet>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-13VDW9PYVP"
        ></script>
      </Helmet>
      <Navbar />
      <Inclubotor />
      <Association />
      <Media />
      <Footer />
    </>
  );
}

export default App;
