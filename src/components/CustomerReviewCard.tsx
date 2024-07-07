interface IProps {
  img: string;
  name: string;
  description: string;
  job: string;
  date: string;
  rating: string;
}
export default function CustomReviewCard({
  img,
  name,
  description,
  job,
  date,
  rating,
}: IProps) {
  return (
    <div>
      <div className="w-72 md:w-96  border p-8 rounded-xl bg-white relative">
        <img
          src={img}
          alt="avator"
          className="h-16 w-16 bg-white rounded-full object-cover absolute top-[-10%] overflow-hidden"
        />
        <p className="text-gray-500 mt-8">{description}</p>
        <hr className="divide-y divide-[#D7D5D5] my-4" />
        <div className="flex justify-between">
          <p className="font-semibold">{name}</p>
          <p>{job}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm text-gray-400">{date}</p>
          <p>{rating}</p>
        </div>
      </div>
    </div>
  );
}
