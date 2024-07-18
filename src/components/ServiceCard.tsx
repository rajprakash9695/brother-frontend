import { Link } from 'react-router-dom';
import { GoArrowUpRight } from 'react-icons/go';
import { motion } from 'framer-motion';

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
    <motion.div whileHover={{ scale: 1.1 }} className="duration-400">
      <div className="  w-64 md:w-80 min-h-[270px]   box-content p-3 md:p-6 border-2 md:shadow-xl  rounded-xl bg-white">
        <div className="child h-16 md:h-20 md:w-20 object-cover  w-fit">
          <img src={img} alt={title} className="w-full h-full" />
        </div>
        <h3 className="text-xl font-semibold my-1 md:my-3 text-black">
          {title}
        </h3>
        <p className=" text-sm text-gray-600 w-full md:w-54">{description}</p>

        <ul className=" mt-2 md:mt-4 text-[15px] text-black">
          {<li>{lists}</li>}
        </ul>
        <Link to={'/service'}>
          <button className="mt-2 md:mt-4 text-sm border-b border-gray-800 flex gap-1 items-center text-black hover:text-blue-700">
            Readmore <GoArrowUpRight />
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
