import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Stake from "./components/index/Stake/Stake";
import Journey from "./components/index/Journey/Journey";
import Footer from "./components/Footer/Footer";
import RoadMap from "./components/index/RoadMap/RoadMap";
import ComingSoon from "./components/index/Coming/ComingSoon"; 

function App() {
  return (
    <div className={styles.App}>
      <Header/>
      <Stake/>
      <Journey/>
      <RoadMap/>
      <ComingSoon/>
      <Footer/>
    </div>
  );
}

export default App;
