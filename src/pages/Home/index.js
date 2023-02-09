import Channel from "../../components/component/Channel";
import Playlist from "../../components/component/Playlist";
import Slide from "../../components/component/Slider";




function Home() {
    return ( 
        <div>
            <Slide/>
            <Playlist/>
            <Channel/>
        </div>
     );
}

export default Home;