import Header from "../../component/Header";
import Playingbar from "../../component/Playingbar";
import Sidebar from "../../component/Sidebar";
function DefaultLayout({ children }) {
  return (
    <div>
      <Sidebar />
      <div>
        <Header />
        <div>{children}</div>
      </div>
      <Playingbar/>
    </div>
  );
}

export default DefaultLayout;
