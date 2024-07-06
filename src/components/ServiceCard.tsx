import { TiTick } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { GoArrowUpRight } from 'react-icons/go';

interface IProps {
  img: string;
  title: string;
  description: string;
  lists: { items: string }[];
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
      <div className=" box-content p-6 border-2 shadow-xl  rounded-xl bg-white">
        <div className="h-18 w-18 ">
          <img src={img} alt={title} />
        </div>
        <h3 className="text-xl font-semibold my-3">{title}</h3>
        <p className="w-80 text-sm text-gray-600">{description}</p>

        <ul className="mt-4 text-[15px]">
          {lists.length &&
            lists.map((item) => (
              <li className="flex items-center gap-1">
                <TiTick /> {item.items}
              </li>
            ))}
        </ul>
        <Link to={to}>
          <button className="mt-4 text-sm underline flex gap-1 items-center hover:text-blue-700">
            Readmore <GoArrowUpRight />
          </button>
        </Link>
      </div>
    </div>
  );
}
