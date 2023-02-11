import Channel from "../../components/component/Channel";
import Playlist from "../../components/component/Playlist";
import Slide from "../../components/component/Slider";
import ListTabs from "../../components/component/ListTabs"



function Home() {
    return ( 
        <div>
            <Slide/>
            <Playlist/>
            <Channel/>
            <ListTabs/>
        </div>
     );
}

export default Home;