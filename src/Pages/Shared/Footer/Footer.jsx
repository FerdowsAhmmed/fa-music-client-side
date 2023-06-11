
const Footer = () => {
    return (
      <div>
        <footer className="footer footer-center p-2 md:p-10 bg-slate-700 text-white rounded">
          <img src="#" alt="Logo" />
  <div className="grid grid-flow-col gap-4">
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <div className="grid grid-flow-col gap-4">
      <img src="#" alt="Facebook" />
      <img src="#" alt="Linkedin" />
      <img src="#" alt="Youtube" />
    </div>
  </div> 
  <div>
    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
  </div>
</footer>
      </div>
    );
};

export default Footer;