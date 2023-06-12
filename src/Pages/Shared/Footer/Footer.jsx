import { BsFacebook } from "react-icons/bs";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-base-300">
      <footer className="footer footer-center pt-1 md:pt-4 rounded">
        <img
          src="https://i.ibb.co/j35Jr89/logo2.png"
          alt="Logo"
          className="w-16 pt-2 md:h-16 md:w-48 rounded-md"
        />
        <h1 className="mt-2">Kaligat Road-3210, Sreemangal, Moulvibazar</h1>
        <div className="grid grid-flow-col gap-2">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Our Classes</a>
          <a className="link link-hover">Privacy Policy</a>
        </div>
        <div>
          <div className="grid grid-flow-col gap-2">
            <span className="text-4xl text-blue-700">
              <BsFacebook />
            </span>
            <span className="text-4xl text-red-700">
              <FaYoutube />
            </span>
            <span className="text-4xl text-blue-700">
              <RxLinkedinLogo />
            </span>
          </div>
        </div>
        <div className="px-4 md:pb-2">
          <p className="text-sm">
            &copy; 2023 - All rights reserved by FA Music Center Bangladesh
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
