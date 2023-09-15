import chatPage from "../../assets/chat.png";
import dashboardPage from "../../assets/dashboard.png";
import plantsPage from "../../assets/plants.png";
import "./ui.css";

const Ui = () => {
  return (
    <section id="ui-design">
        <div className="budder-wrap">
        <h2 className="works-title">UI Design</h2>
        <div className="budder-ui">
          <img src={chatPage} alt="chatPage" className="panel" />
          <img src={dashboardPage} alt="dashboardPage" className="panel" />
          <img src={plantsPage} alt="plantsPage" className="panel" />
        </div>
      </div>
    </section>
  )
}

export default Ui