import CustomButton from '../CustomButton';

export default function WhoWeAre() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 ">
      <div className="my-10 md:my-32">
        <div className="max-w-screen-md mx-auto text-center mb-10 md:mb-20">
          <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-8">
            Who We Are
          </h1>
          <p className="text-gray-500 text-base md:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
            modi vel hic, atque quidem totam alias voluptatem enim. Amet
            excepturi odit itaque numquam ad quas accusantium architecto eaque
            blanditiis commodi.
          </p>
        </div>
        <div className="grid grid-row md:grid-cols-2 gap-6 md:gap-14">
          <div className="rounded-xl border flex justify-center">
            <img src="/homepage/who-we-are.svg" alt="who we are" />
          </div>
          <div className=" p-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="https://img.icons8.com/?size=64&id=44806&format=png"
                  alt="mission"
                  className="h-10"
                />
                <h1 className="text-2xl font-semibold ">Our Mission</h1>
              </div>
              <p className="text-gray-500 text-base md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                explicabo aliquam labore. Numquam, quo! Sunt magni amet laborum
                dolores, pariatur ut. Distinctio, placeat deleniti! Hic,
                voluptas accusamus! Sit, sapiente harum!
              </p>
            </div>
            <div className="my-6">
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="https://img.icons8.com/?size=64&id=CN3dYHrmiBjg&format=png"
                  alt="mission"
                  className="h-10"
                />
                <h1 className="text-2xl font-semibold ">Our Vission</h1>
              </div>
              <p className="text-gray-500 text-base md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                explicabo aliquam labore. Numquam, quo! Sunt magni amet laborum
                dolores, pariatur ut. Distinctio, placeat deleniti! Hic,
                voluptas accusamus! Sit, sapiente harum!
              </p>
            </div>
            <CustomButton bgColor="[#007aff]" text="Contact Us" />
          </div>
        </div>
      </div>
    </div>
  );
}
