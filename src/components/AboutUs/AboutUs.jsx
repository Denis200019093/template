import '../../SCSS/ReusableStyles.scss'
import './AboutUs.scss'

const AboutUs = () => {
    return (
        <div className='about-us flex-between'>
            <h3 className='about-us__left'>Про нас</h3>
            <div className='about-us__middle'>
                <p>Наша компанія присвячена створенню високоякісних продуктів, які вирощуються
                    та виробляються з дбайливим ставленням
                    до навколишнього середовища.</p>
                <button>ознайомитись з продуктами</button>
            </div>
            <p className='about-us__right'>Ми прагнемо забезпечити споживачів здоровою та натуральною альтернативою
                у світі харчових продуктів. </p>
        </div>
    )
}

export default AboutUs