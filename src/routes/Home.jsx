import useSound from "use-sound";
import click from '../sounds/sound2.mp3';

function Home(){
    const [playActive] = useSound(
        click,
        { volume: 0.5 }
      );
    
    return (
    <div className="flex flex-col justify-center">
        <div className="hero min-h-screen bg-base-300">
    <div className="hero-content text-center">
        <div className="max-w-md">
        <h1 className="text-7xl font-bold">Hello there!</h1>
        <p className="py-10">The Pomodoro Technique is a time management method that can greatly enhance productivity and focus. 
        This technique helps individuals maintain concentration and avoid burnout by providing structured periods of intense work and rejuvenation.</p>
        <a href="/timer" className="btn btn-primary">Get Started</a>
        </div>
    </div>
    </div>
        </div>
    )
}

export default Home;