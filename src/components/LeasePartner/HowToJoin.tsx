export default function HowToJoin() {
  return (
    <div>
      <div className="max-w-screen-xl  mx-auto">
        <div className="max-w-screen-xl my-8 mx-4 md:mx-8 p-2 ">
          <h1 className="text-center text-lg leading-5 md:text-3xl font-semibold mt-8 text-center">
            Join MyVault's Lease Partnership in <br /> just a few clicks
          </h1>
          <p className="text-[#6c6c72] text-base md:text-2xl my-4 text-center">
            3 simple steps towards affordable Gold access
          </p>
          <div className="relative">
            <div className="flex  items-center justify-center  p-2 md:p-5 ">
              <div className=" w-full md:w-1/2 ">
                <h1 className=" text-sm lg:text-xl font-semibold mb-2">
                  STEP 1
                </h1>
                <ul className="list-disc list-outside text-xs lg:text-lg text-[#6C6C72] lending-5">
                  <li>Click link ---------- Download the Web App</li>
                  <li>Enroll as a Lease Partner on the MyVault web app</li>
                  <li>Enter your valid GST number</li>
                </ul>
              </div>
              <div className="hidden md:block w-1/2 ">
                <img src="/lease-partner/step1.svg" alt="Step1" />
              </div>
            </div>
            <div className="flex  items-center gap-x-40  p-2 md:p-5 ">
              <div className="hidden md:block w-1/2 ">
                <img src="/lease-partner/step2.svg" alt="Step2" />
              </div>
              <div className=" w-full md:w-1/2 ">
                <h1 className=" text-sm lg:text-xl font-semibold">STEP 2</h1>
                <ul className="list-disc list-outside text-xs lg:text-lg text-[#6C6C72]">
                  <li>Complete the KYC</li>
                  <li>
                    After Auto-Approval within a few hours, you are <br /> now a
                    registered Lease Partner with MyVault
                  </li>
                  <li>
                    All authorized signatories will sign the Company's <br />
                    Resolution on letterhead and upload the scanned copy
                  </li>
                  <li>
                    Assigning Authorised signatory to sign NDA, <br /> Agreement
                    and Terms & Conditions
                  </li>
                  <li>E-Adhaar Verification by all signatories</li>
                </ul>
              </div>
            </div>
            <div className="flex  items-center justify-center  p-2 md:p-5 ">
              <div className=" w-full md:w-1/2 ">
                <h1 className=" text-sm lg:text-xl font-semibold">STEP 3</h1>
                <ul className="list-disc list-outside text-xs lg:text-lg text-[#6C6C72]">
                  <li>Upload document for eBG</li>
                  <li>Start availing Gold</li>
                </ul>
              </div>
              <div className="hidden md:block w-1/2 ">
                <img src="/lease-partner/step3.svg" alt="step3" />
              </div>
            </div>

            <img
              src="/lease-partner/Vector.svg"
              alt="curve-right"
              className="absolute hidden md:block h-20 lg:h-32 top-[28%] left-[37%] "
            />
            <img
              src="/lease-partner/VectorLeft.svg"
              alt="curve-left"
              className="absolute hidden md:block  h-20 lg:h-32 bottom-[28%] right-[45%] "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
