import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import DashboardPanel from "../components/Dashboard/DashboardPanel";

function Dashboard(props) {
  return (
    <React.Fragment>
      <Header />
      <DashboardPanel />
      <Footer />
    </React.Fragment>
  );
}
export default Dashboard;
