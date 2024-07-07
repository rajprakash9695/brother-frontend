import { TiTick } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { GoArrowUpRight } from 'react-icons/go';

interface IProps {
  img: string;
  title: string;
  description: string;
  lists: any;
  to: string;
}

export default function ServiceCard({
  img,
  title,
  description,
  lists,
  to,
}: IProps) {
  return (
    <div>
      <div className=" w-72 md:w-80  box-content p-6 border-2 shadow-xl  rounded-xl bg-white">
        <div className="h-20 w-20 object-cover  w-fit">
          <img src={img} alt={title} className="w-full h-full" />
        </div>
        <h3 className="text-xl font-semibold my-3 text-black">{title}</h3>
        <p className=" text-sm text-gray-600 w-54">{description}</p>

        <ul className="mt-4 text-[15px] text-black">{<li>{lists}</li>}</ul>
        <Link to={to}>
          <button className="mt-4 text-sm border-b border-gray-800 flex gap-1 items-center text-black hover:text-blue-700">
            Readmore <GoArrowUpRight />
          </button>
        </Link>
      </div>
    </div>
  );
}
