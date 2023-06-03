import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Stake from "./components/index/Stake/Stake";
import Journey from "./components/index/Journey/Journey";
import Footer from "./components/Footer/Footer";
import RoadMap from "./components/index/RoadMap/RoadMap";
import ComingSoon from "./components/index/Coming/ComingSoon";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  const index = (
    <div className={styles.App}>
      <Header />
      <Stake />
      <Journey />
      <RoadMap />
      <ComingSoon />
      <Footer />
    </div>
  );
  return (
    <div className={styles.App}>
      {/* <Header />
      <Dashboard/>
      <Footer /> */}
      {index}
    </div>
  );
}

export default App;
