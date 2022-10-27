import Plant1 from '../../assets/popular/plant1.png';
import Plant2 from '../../assets/popular/plant2.png';
import Plant3 from '../../assets/popular/plant3.png';

const Categories : React.FC = () => {
    const plants = [
        {
          id: 1,
          name: 'Tools',
          image: Plant1,
        },
        {
          id: 2,
          name: 'Seeds',
          image: Plant2,
        },
        {
          id: 3,
          name: 'Low Light Plants',
          image: Plant3,  
        },
      ]

    return (
      <div className="flex flex-col items-start justify-evenly space-x-2 my-20 mx-10 ">
        <div className="w-[10rem] pb-5">
          <h1 className="text-3xl font-bold mb-3">Popular Categories</h1>
        </div>
        <div className='flex justify-evenly items-center'>
          {plants.map((plant) => (
            <div key={plant.id} className="flex flex-col justify-start items-center">
                <img src={plant.image} alt="plant" className="w-[70%] h-[70%]" />
                <h1 className="text-xl font-bold pt-10">{plant.name}</h1>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Categories;