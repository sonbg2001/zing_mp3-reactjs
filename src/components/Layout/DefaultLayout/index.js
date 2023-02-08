import Header from "../../component/Header";
import Sidebar from "../../component/Sidebar";
import PlayerControl from "../../component/PlayerControl";
function DefaultLayout({ children }) {
  return (
    <div>
      <Sidebar />
      <div>
        <Header />
        <div>{children}</div>
      </div>
      <PlayerControl/>
    </div>
  );
}

export default DefaultLayout;
