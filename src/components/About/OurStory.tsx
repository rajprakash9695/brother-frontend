import { TiTick } from 'react-icons/ti';
import Rating from '../Rating';

export default function OurStory() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10 md:py-32">
      <div className="grid md:grid-cols-2  md:gap-10">
        <div className="text-gray-500">
          <h1 className="text-2xl md:text-4xl font-semibold text-black mb-4">
            Our Story
          </h1>
          <p>
            We know each customer is different and we take an agile method to
            implement a win-win strategy to ensure we are transparent in where
            we can add value.
          </p>
          <ul className="list-inside mt-3">
            <li className="flex ">
              <TiTick className="text-2xl text-black" />
              <ul className="list-inside">
                <p className="text-black font-bold">Excellence:</p>
                <p>
                  We strive for excellence in everything we do, from the quality
                  of our services to our client relationships.
                </p>
              </ul>
            </li>
            <li className="flex my-3 ">
              <TiTick className="text-2xl text-black " />
              <ul className="list-inside">
                <p className="text-black font-bold">Excellence:</p>
                <p>
                  We strive for excellence in everything we do, from the quality
                  of our services to our client relationships.
                </p>
              </ul>
            </li>
            <li className="flex ">
              <TiTick className="text-2xl text-black" />
              <ul className="list-inside">
                <p className="text-black font-bold">Excellence:</p>
                <p>
                  We strive for excellence in everything we do, from the quality
                  of our services to our client relationships.
                </p>
              </ul>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <img src="/about/our-story.svg" alt="our story" />
        </div>
      </div>
      <div className="my-10 md:my-20">
        <Rating />
      </div>
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl font-semibold">Our Approach</h1>
        <p className="text-gray-500 max-w-screen-md mx-auto my-4 md:my-10">
          Flexible client interaction can range from client providing us a
          problem state in which we would requires some data provide a proposal,
          or can engage in lockdown working session discussions.
        </p>
        <div className="max-w-screen-lg mx-auto ">
          <img src="/about/approach.png" alt="approach" className="w-full" />
        </div>
      </div>
    </div>
  );
}
