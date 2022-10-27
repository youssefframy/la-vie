interface Props{
    date: string;
    title: string;
    description: string;
    image: string;
}

const Card : React.FC<Props> = ({date, title, description, image}: Props) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={image} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <p className="text-green text-xs mb-2">{date}</p>
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default Card;