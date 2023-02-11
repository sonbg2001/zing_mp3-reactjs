import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { Data } from "./Data";
import "./ListTabs.scss";
// import Sonnet from '../../components/Sonnet';

function UncontrolledExample() {
  return (
    <div>
      <h3 className="zm-section-title title is-2">Mới phát hành</h3>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="all" title="Tất cả">
          {Data.map((item, index)=>{
            return(
              <div></div>
            )
          })}
            
        
            
          {/* <Sonnet /> */}
        </Tab>
        <Tab eventKey="vietnam" title="Việt Nam">
          <div>2</div>
          {/* <Sonnet /> */}
        </Tab>
        <Tab eventKey="quocte" title="Quốc tế">
          <div>3</div>
          {/* <Sonnet /> */}
        </Tab>
        <Link to="" className="discovery-btn">
          Tất cả <MdOutlineKeyboardArrowRight/>
        </Link>
      </Tabs>

    </div>
  );
}

export default UncontrolledExample;
