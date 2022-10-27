import Plant1 from "../../assets/blog/plant1.png";
import Plant2 from "../../assets/blog/plant2.png";
import Plant3 from "../../assets/blog/plant3.png";

import Card from "../Card";

const Blogs: React.FC = () => {
  const plants = [
    {
      id: 1,
      image: Plant1,
      date: "2 days ago",
      title: "The Coldest Sunset",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    },
    {
      id: 2,
      image: Plant2,
      date: "2 days ago",
      title: "The Coldest Sunset",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    },
    {
      id: 3,
      image: Plant3,
      date: "2 days ago",
      title: "The Coldest Sunset",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    },
  ];

  return (
    <div className="flex flex-col items-start justify-evenly space-x-2 my-20 mx-10 ">
      <div className="w-[10rem] pb-5">
        <h1 className="text-3xl font-bold mb-3">Blogs</h1>
      </div>
      <div className="flex items-start justify-between space-x-10 my-10">
        {plants.map((plant) => (
          <Card
            key={plant.id}
            image={plant.image}
            date={plant.date}
            title={plant.title}
            description={plant.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
