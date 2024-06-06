import { FaFacebook, FaInstagram, FaGithub, FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-[#82896E] text-white">
      <aside>
        <p className="text-2xl md:text-4xl font-extrabold">GreenAcres Realty</p>
        <p className="font-medium">
          Providing reliable dealer since 2000
        </p>
        <p className="font-medium">Copyright © 2024 - All right reserved by GreenAcres Realty</p>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4 text-2xl">
          <a>
            <FaFacebook />
          </a>
          <a>
            <FaInstagram />
          </a>
          <a>
            <FaGithub />
          </a>
          <a>
            <FaGoogle />
          </a>
        </div>
        <div>
          <form>
            <h6 className="footer-title mt-10">Newsletter</h6>
            <fieldset className="form-control w-80">
              <div className="join">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="px-4 py-4"
                />
                <button className="bg-[#264025] px-4">Subscribe</button>
              </div>
            </fieldset>
          </form>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
