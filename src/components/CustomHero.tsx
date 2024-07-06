interface IProps {
  title: string;
  description: string;
}

export default function CustomHero({ title, description }: IProps) {
  return (
    <div className="">
      <div className=" heroCustom pt-32 pb-6 md:pb-8 px-2 ">
        <div className="max-w-screen-xl  mx-auto  px-3">
          <div className="my-20 max-w-screen-md text-center text-white mx-auto">
            <h1 className=" text-xl md:text-4xl font-bold mb-8">{title}</h1>
            <p className="leading-6">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
