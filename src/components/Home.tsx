import myself from '../images/myself1-removebg.png'
import { Link } from 'react-scroll';


const Home: React.FC = () => {
    // const [blink, setBlink] = useState<boolean>(true);
    // const [visible, setVisible] = useState<boolean>(true);

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setBlink((blink) => !blink);
    //     }, 500);

        

    //     return () => clearInterval(intervalId);
    // }, [])

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setVisible(false);
    
    //         const timeoutId = setTimeout(() => {
    //             setVisible(true);
    //         }, 900); 
    
    //         return () => clearTimeout(timeoutId);
    //     }, 4000);
    
    //     return () => clearInterval(intervalId);
    // }, []);

    return (
        <>
            <div className='home'>
                <div className='home-text'>
                    <div>
                        <h1 className='name-is'>Hi, My name is </h1>
                        <h1 className='my-name'>Garri Shtyrkin</h1>
                        <div className='webDev'>
                            <h1>I'm</h1>
                            <div className='web-animation'>
                                {/* <h1 className={`text-cursor ${blink ? "" : "blink"}`}>|</h1> */}
                                <h1 className={`web-developer-animation `}>Web Developer</h1>
                            </div>
                        </div>
                        <p className='lower-font-size'>Need a Web site, let me know</p>
                    </div>
                    
                    <Link to="contactSection" smooth={true} duration={300}>
                        <button>Contact me</button>
                    </Link>
                    
                </div>
                <div className='home-imgs'>
                    <div className='home-circles'>
                        <div className="circle-1" ></div>
                        <div className="circle-2" ></div>
                        <div className="circle-3" ></div>
                    </div>
                    <img src={myself} alt="" />
                </div>
            </div>
            
        </>
    )
}

export default Home;