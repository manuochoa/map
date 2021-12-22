import cloud1 from '../images/clouds/cloud1.png';
import cloud2 from '../images/clouds/cloud2.png';
import cloud3 from '../images/clouds/cloud3.png';
import cloud4 from '../images/clouds/cloud4.png';
import cloud5 from '../images/clouds/cloud5.png';
import cloud6 from '../images/clouds/cloud6.png';

export default function Clouds() {

    return (
        <>
            <img src={cloud1} alt="cloud1" className='cloud cloud--1' />
            <img src={cloud2} alt="cloud2" className='cloud cloud--2' />
            <img src={cloud3} alt="cloud3" className='cloud cloud--3' />
            <img src={cloud4} alt="cloud4" className='cloud cloud--4' />
            <img src={cloud5} alt="cloud5" className='cloud cloud--5' />
            <img src={cloud6} alt="cloud6" className='cloud cloud--6' />
        </>
    )
}
