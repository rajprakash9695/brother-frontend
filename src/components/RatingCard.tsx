interface IProps {
  img: string;
  title: string;
  description: string;
}

export default function RatingCard({ img, title, description }: IProps) {
  return (
    <div className="p-3 rounded-xl bg-white border w-40">
      <div className="flex items-center gap-2 mb-4">
        <img src={img} alt={title} className="w-10 h-10" />
        <p className="text-2xl font-semibold text-[#0A0A72] ">{title}</p>
      </div>
      <p className=" text-gray-500  w-32">{description}</p>
    </div>
  );
}
