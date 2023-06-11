import { Link } from "react-router-dom";


const Error404 = () => {
    return (
        <div className="w-9/12 mx-auto">
             <h1 className="text-center text-5xl text-red-900 mt-40">Sorry! May be your URL is wrong.</h1>
             <Link to='/'><button className="btn flex justify-center bg-green-400 px-10 py-4 rounded-xl text-center mx-auto mt-10">Back to homepage</button></Link>
        </div>
    );
};

export default Error404;