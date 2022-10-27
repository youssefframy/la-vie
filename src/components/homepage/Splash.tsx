import { Link } from "react-router-dom";
import Tree from "../../assets/tree1.png";


const Splash : React.FC = () => {
    return (
      <div className="flex justify-center items-center my-10">
        <img src={Tree} alt="tree" className="w-[35%]" />
        <div className="p-[100px]">
          <h1 className="text-3xl font-bold text-green mb-3">
            Perfect way to plant in house
          </h1>
          <p className="text-lg leading-8">
            leaf, in botany, any usually flattened green outgrowth from the stem
            of a vascular plant. As the primary sites of photosynthesis, leaves
            manufacture food for plants, which in turn ultimately nourish and
            sustain all land animals.
          </p>
          <Link
            to="/signup"
            className="flex justify-center items-center bg-green w-[12rem] h-12 px-10 rounded-lg text-white text-center font-semibold Poppins hover:opacity-90 mt-5"
          >
            Explore Now
          </Link>
        </div>
      </div>
    );
};

export default Splash;