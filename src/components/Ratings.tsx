import { MdStar } from 'react-icons/md';
import { useDesignerContext } from '../hooks/useDesignerContext'
import { checkCount } from '../utility/truncateTextLength';

type RatingProps = {
  size?: string,
  gap?: string,
  textSize?: string,
  rate_score?: number,
  addScore: boolean,
  type: 'rate' | 'others',
  ratedStars: number[]
}

let leastRating = 0;
export default function Ratings({
  type, gap, size = "text-[11px]", textSize = '11px',
  rate_score, addScore, ratedStars
}: RatingProps) {
  const RATE_SCORE = 4 as const
  const { setStarRating } = useDesignerContext()
  const RATING_STAR = [
    { id: 0, ICON: MdStar },
    { id: 1, ICON: MdStar },
    { id: 2, ICON: MdStar },
    { id: 3, ICON: MdStar },
    { id: 4, ICON: MdStar },
  ]

  const handleRatings = (id: number) => {
    let ratingArr = [...Array(id).keys()]
    if (leastRating === id) {
      setStarRating([])
      leastRating = 0;
      ratingArr = []
    }
    else setStarRating([...Array(id).keys()])
    leastRating = (ratingArr.length == 1) ? id : 0;
  }

  return (
    <div className={`flex items-center ${gap}`}>
      <div className={`flex items-center ${gap}`}>
        {
          RATING_STAR.map(rater => (
            <rater.ICON
              key={rater.id}
              onClick={() => type === 'rate' ? handleRatings(rater.id + 1) : null}
              className={`${addScore ? 'cursor-default' : 'cursor-pointer'} ${size} ${ratedStars?.includes(rater.id) ? 'text-[#FCC200]' : 'text-gray-400'} ${type === 'rate' ? 'hover:scale-[1.09] text-lg active:scale-[1]' : ''} transition-all`} />
          ))
        }
      </div>
      <span className={`${addScore ? 'block' : 'hidden'} text-${textSize}`}>({checkCount((rate_score as number) * RATE_SCORE)})</span>
    </div>
  )
}