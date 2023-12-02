import StarRatings from "react-star-ratings";
import {FC} from "react";

interface IProps {
    rating: number
}

const MovieRating: FC<IProps> = ({rating}) => {
    return (
        <StarRatings
            rating={rating}
            starRatedColor="gold"
            numberOfStars={10}
            name="rating"
            starDimension="20px"
            starSpacing="2px"
        />
    )
}

export {
    MovieRating
}