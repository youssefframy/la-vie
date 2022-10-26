import Navbar from "../components/Navbar";

import Tree from "../assets/tree.jpg";

const Homepage : React.FC = () => {
    const homepageList : string[] = ['Home', 'Shop', 'Blog', 'About', 'Community'];
    const signedIn : boolean = true;

    return (
        <div>
            <Navbar list={homepageList} auth={signedIn} />
            <img src={Tree} alt="tree"/>
        </div>
    )
}

export default Homepage;