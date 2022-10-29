import Plant1 from "../../assets/best/plant1.png";
import Plant2 from "../../assets/best/plant2.png";
import Plant3 from "../../assets/best/plant3.png";

const SnakeCategories: React.FC = () => {
    const plants = [
        {
            id: 1,
            name: "juniper bonsai",
            image: Plant1,
            price: 180,

        },
        {
            id: 2,
            name: "spider plant",
            image: Plant2,
            price: 100,
        },
        {
            id: 3,
            name: "snake plant",
            image: Plant3,
            price: 190,
        },
    ];

  return (
    <div className="flex flex-col items-start justify-evenly space-x-2 mx-10">
      <div className="w-[10rem] pb-5">
        <h1 className="section-title">Best seller</h1>
      </div>
      <div className="flex justify-center items-center pl-12">
        {plants.map((plant) =>
          plant.id % 2 === 0 ? (
            <div
              key={plant.id}
              className="flex flex-col justify-evenly items-start mt-[10rem]"
            >
              <img src={plant.image} alt="plant" className="w-[70%] h-[70%]" />
              <h1 className="text-xl font-bold pt-5">
                {plant.name.toUpperCase()}
              </h1>
              <h1 className="text-xl font-semibold ">{plant.price} EGP</h1>
            </div>
          ) : (
            <div
              key={plant.id}
              className="flex flex-col justify-evenly items-start "
            >
              <img src={plant.image} alt="plant" className="w-[70%] h-[70%]" />
              <h1 className="text-xl font-bold pt-5">
                {plant.name.toUpperCase()}
              </h1>
              <h1 className="text-xl font-semibold ">{plant.price} EGP</h1>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default SnakeCategories;
