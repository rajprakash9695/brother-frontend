export default function Hero() {
  return (
    <div>
      <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#141952]  to-[#49143A] pt-32 pb-6 md:pb-8 px-2 rounded-b-xl">
        <div className="max-w-screen-xl  mx-auto">
          <div className="  max-w-screen-xl">
            <div className="flex flex-col-reverse md:flex-row items-center p-2 justify-center  gap-5 ">
              <div className="w-full md:w-1/2 flex flex-col  items-center md:items-start   ">
                <h2 className=" text-center md:text-start text-[#FFBD03] font-extrabold text-lg md:text-4xl">
                  LEASE PARTNER
                </h2>
                <h1 className="text-center md:text-start text-white text-base md:text-4xl font-semibold leading-5 my-3 md:my-4">
                  Multiply Earnings by Slashing <br />
                  Working Capital up to 90%
                </h1>
                <p className="text-center md:text-start text-xs  md:mt-4 md:text-xl text-[#efefef] ">
                  MyVault provides access to Gold at just 0.75% per <br />{' '}
                  month, making Gold Metal Loan rates less relevant.
                </p>
              </div>
              <div className="w-full md:w-1/2 flex justify-end">
                <img
                  src=" /lease-partner/leasePartnerHero.svg"
                  alt="leasePartnerHero"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
