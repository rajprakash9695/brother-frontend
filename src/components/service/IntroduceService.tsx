import { TiTick } from 'react-icons/ti';

export default function IntroduceService() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-4 py-10 md:py-32">
        <div className="text-center my-4">
          <h1 className="text-xl md:text-4xl mb-4 font-semibold">
            Introduce Service
          </h1>
          <p className="text-sm md:text-lg text-gray-500 max-w-4xl mx-auto">
            Panoptes Group LLC is a data consulting firm dedicated to helping
            businesses harness the power of their data. Our team of experienced
            data scientists, analysts, and consultants work collaboratively to
            provide innovative solutions tailored to your unique needs.{' '}
          </p>
        </div>
        <div className="grid md:grid-cols-2  md:gap-10 mt-20 items-center ">
          <div className="md:hidden">
            <img src="/service/service.png" alt="our story" />
          </div>
          <div className="text-gray-500 max-w-md">
            <ul className="list-inside mt-3">
              <li className="flex ">
                <TiTick className="text-2xl text-black" />
                <ul className="list-inside">
                  <p className="text-black font-bold mb-2">
                    Data Integration and Management
                  </p>
                  <p className="mb-2">
                    Seamlessly integrate data from various sources to create a
                    unified and accurate view of your business.{' '}
                  </p>
                  <p>
                    Ensure data quality and consistency through robust data
                    management practices.
                  </p>
                </ul>
              </li>
              <li className="flex my-3 ">
                <TiTick className="text-2xl text-black " />
                <ul className="list-inside">
                  <p className="text-black font-bold mb-2">
                    Dashboards and Reporting
                  </p>
                  <p className="mb-2">
                    Develop intuitive and interactive dashboards that provide
                    real-time insights.
                  </p>
                  <p>
                    Create comprehensive reports tailored to your business
                    needs, enabling informed decision-making.
                  </p>
                </ul>
              </li>
              <li className="flex ">
                <TiTick className="text-2xl text-black" />
                <ul className="list-inside">
                  <p className="text-black font-bold mb-2">
                    Advanced Analytics
                  </p>
                  <p className="mb-2">
                    Utilize advanced analytical techniques, including predictive
                    analytics and machine learning, to uncover hidden patterns
                    and trends.
                  </p>
                  <p>
                    Provide deep insights that help you anticipate market
                    changes and optimize operations.
                  </p>
                </ul>
              </li>
            </ul>
          </div>
          <div className="hidden md:block">
            <img src="/service/service.png" alt="our story" />
          </div>
        </div>
      </div>
    </div>
  );
}
