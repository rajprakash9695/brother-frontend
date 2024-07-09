import { MdOutlineArrowForwardIos } from 'react-icons/md';
interface IProps {
  title: string;
  description: string;
  page: string;
}

export default function CustomHero({ title, description, page }: IProps) {
  return (
    <div className=" heroCustom pt-32 pb-6 md:pb-8 px-2 ">
      <div className="max-w-screen-xl  mx-auto  px-3">
        <div className="my-4 md:my-20 max-w-screen-md text-center text-white mx-auto">
          <p className="flex justify-center items-center gap-2 my-4 text-sm md:text-lg">
            Home <MdOutlineArrowForwardIos /> {page}
          </p>
          <h1 className=" text-xl md:text-4xl font-bold mb-8">{title}</h1>
          <p className="leading-6">{description}</p>
        </div>
      </div>
    </div>
  );
}
