
const Banner = () => {
    return (
<div className="bg-cover w-11/12 mx-auto mt-6 bg-no-repeat rounded-3xl h-full md:h-[35.5rem] mb-10" style={{backgroundImage:'url(https://i.ibb.co.com/HFRvYMR/brick-wall-1834784-1920.jpg)'}}>
           
        <div className="w-9/12 mx-auto flex flex-col justify-center items-center text-center h-full space-y-6 py-4">
            <h1 className="font-bold text-white md:text-3xl">Discover an exceptional cooking class tailored for you!</h1>
            <p className="text-lg text-white font-normal">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
            <div className="flex gap-4 text-xl font-semibold">
                <button className="btn bg-green-500 rounded-full border-none"> Explore Now</button>
                <button className="btn btn-outline text-white hover:bg-green-500 rounded-full">Our Feedback</button>
            </div>
        </div>


        </div>

        
    );
};

export default Banner;