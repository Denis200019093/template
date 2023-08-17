import ProductSlide from "../ProductSlide/index.js";
import ReviewsSlide from "../ReviewsSlide/index.js";

const SliderItem = ({item, type}) => {
    return (
        <>
            {type === 'product' && (
                <ProductSlide product={item}/>
            )}
            {type === 'reviews' && (
                <ReviewsSlide review={item}/>
            )}
        </>
    )
}

export default SliderItem