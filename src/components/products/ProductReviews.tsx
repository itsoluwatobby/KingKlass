import Ratings from "../Ratings";
import RequestStages from "../RequestStage"


type ProductReviewsProps = {
  refContainer: React.RefObject<HTMLDivElement>
  isLoading: boolean; 
  isError: boolean;
  isSuccess: boolean;
  productReviews: Reviews[][];
}

export default function ProductReviews({ refContainer, productReviews, isLoading, isError, isSuccess }: ProductReviewsProps) {

  return (
    <div
      ref={refContainer}
      className="relative px-2 scroll-smooth flex items-center gap-x-4 overflow-x-scroll"
  >
      <RequestStages useRelative={false}
      isLoading={isLoading} isError={isError}
      targetVal={productReviews} isSuccess={isSuccess as boolean} errorText="Error Fetching Reviews" warnText="No Reviews"
      >
        {
          productReviews?.map((splittedReviews, index) => (
            <div
              key={index * (index+2)}
              className="flex flex-col min-w-full md:flex-row md:gap-x-4"
            >
              {splittedReviews?.map((eachReview) => (
                <Reviews key={eachReview["id"]} review={eachReview} />
              ))}
            </div>
          ))
        }
      </RequestStages>
    </div>
  )
}


type ReviewsProps = {
  review: {
    rating: number[];
    content: string;
    author: string;
    createdAt: string;
  };
};
const Reviews = ({ review }: ReviewsProps) => {
  return (
    <div className="w-full flex items-start flex-col gap-y-2 border-0 midscreen:border-b-2 md:border-r-2 md:pr-2 py-1">
      <Ratings addScore={false} ratedStars={review["rating"]} type="rate" />
      <div className="flex gap-x-8">
        <p className="whitespace-pre-wrap">{review["content"]}</p>
        <span className="self-end flex-none text-gray-600 text-[11px] font-sans">
          {review["createdAt"]}
        </span>
      </div>
      <span className="flex-none text-gray-700">{review["author"]}</span>
    </div>
  );
};
