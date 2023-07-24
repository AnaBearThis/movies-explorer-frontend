import { Link } from 'react-router-dom';
import arr from '../../images/arr.png';
import photo from '../../images/me.jpg';

function Portfolio() {
    return (
        <section className="portfolio">
            <p className='portfolio__subheading'>Портфолио</p>
            <div className='portfolio__linkContainer'>
                <a className='portfolio__linkProject' href='https://github.com/AnaBearThis/how-to-learn-public' target="_blank" rel='noreferrer'>Статичный сайт</a>
                <p className='portfolio__linkPic'>↗</p>
            </div>
            <div className='portfolio__linkContainer'>
                <a className='portfolio__linkProject' href='https://github.com/AnaBearThis/russian-travel' target="_blank" rel='noreferrer'>Адаптивный сайт</a>
                <p className='portfolio__linkPic'>↗</p>
            </div>
            <div className='portfolio__linkContainer portfolio__linkContainer_type_no-line'>
                <a className='portfolio__linkProject' href='https://github.com/AnaBearThis/react-mesto-api-full-gha' target="_blank" rel='noreferrer'>Одностраничное приложение</a>
                <p className='portfolio__linkPic'>↗</p>
            </div>
        </section>
    )
}

export default Portfolio;