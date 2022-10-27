import Navbar from "../components/Navbar";
import Splash from "../components/homepage/Splash";
import Categories from "../components/homepage/PopularCategories";
import SnakeCategories from "../components/homepage/SnakeCategories";
import Blogs from "../components/homepage/Blogs";
import About from "../components/homepage/About";

const Homepage : React.FC = () => {
    const homepageList : string[] = ['Home', 'Shop', 'Blog', 'About', 'Community'];
    const signedIn : boolean = true;

    return (
      <div>
        <Navbar list={homepageList} auth={signedIn} />
        <Splash />
        <Categories />
        <SnakeCategories />
        <Blogs />
        <About />
      </div>
    );
}

export default Homepage;