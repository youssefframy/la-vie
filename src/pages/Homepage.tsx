import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Splash from "../components/Splash";
import Categories from "../components/Categories";


const Homepage : React.FC = () => {
    const homepageList : string[] = ['Home', 'Shop', 'Blog', 'About', 'Community'];
    const signedIn : boolean = true;

    return (
      <div>
        <Navbar list={homepageList} auth={signedIn} />

        <Splash />
        <Categories />


      </div>
    );
}

export default Homepage;