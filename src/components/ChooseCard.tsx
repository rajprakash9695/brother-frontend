interface IProps {
  img: string;
  title: string;
  description: string;
}

export default function ChooseCard({ img, title, description }: IProps) {
  return (
    <div>
      <div className=" object-fit w-fit p-2">
        <div className="h-16 w-20  ">
          <img src={img} alt={title} />
        </div>
        <h3 className="font-semibold my-2">{title}</h3>
        <p className="w-60 text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
