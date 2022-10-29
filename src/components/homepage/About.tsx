import AboutImage from '../../assets/about.png';

const About : React.FC = () => {
    return (
      <div className="flex items-center justify-between space-x-2 my-20 mx-10">
        <div className="w-[60%] pb-5">
          <h1 className="section-title">About us</h1>
          <h1 className="text-s w-[100%] text-darkgray pl-5 leading-7">
            Welcome to La Vie, your number one source for planting. We're
            dedicated to giving you the very best of plants, with a focus on
            dependability, customer service and uniqueness. Founded in 2020, La
            Vie has come a long way from its beginnings in a home office our
            passion for helping people and give them some advices about how to
            plant and take care of plants. We now serve customers all over
            Egypt, and are thrilled to be a part of the eco-friendly wing{" "}
            Welcome to La Vie, your number one source for planting. We're
            dedicated to giving you the very best of plants, with a focus on
            dependability, customer service and uniqueness. Founded in 2020, La
            Vie has come a long way from its beginnings in a home office our
            passion for helping people and give them some advices about how to
            plant and take care of plants. We now serve customers all over
            Egypt, and are thrilled to be a part of the eco-friendly wing{" "}
          </h1>
        </div>
        <div className='border border-green rounded-lg flex justify-center items-center w-[25rem] h-[25rem]'>
            <img src={AboutImage} alt="About" className='relative w-[25rem] h-[25rem] right-[-1rem] top-[-1rem]' />
        </div>
      </div>
    );
}

export default About;