function Home(){
    return (
    <div className="flex flex-col justify-center">
        <div className="hero min-h-screen bg-base-300">
    <div className="hero-content text-center">
        <div className="max-w-md">
        <h1 className="text-7xl font-bold">Hello there!</h1>
        <p className="py-10">The Pomodoro Technique is a time management method that can greatly enhance productivity and focus. 
        This technique helps individuals maintain concentration and avoid burnout by providing structured periods of intense work and rejuvenation.</p>
        <button className="btn btn-primary"><a href="/timer">Get Started</a></button>
        </div>
    </div>
    </div>
        </div>
    )
}

export default Home;