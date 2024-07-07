import CRating from '../constant/rating';
import RatingCard from './RatingCard';

export default function Rating() {
  return (
    <div className="max-w-screen-xl mx-auto ">
      <div className="heroCustom rounded-xl p-10">
        <div className="grid grid-cols-2 gap-16">
          <div className="grid grid-cols-2 gap-4 ">
            {CRating.map((rating) => (
              <>
                <RatingCard
                  img={rating.img}
                  title={rating.title}
                  description={rating.description}
                />
              </>
            ))}
          </div>
          <div>hjgj</div>
        </div>
      </div>
    </div>
  );
}
