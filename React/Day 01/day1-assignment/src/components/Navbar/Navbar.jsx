import { Icon } from "@iconify/react";
import logo from "../../assets/react.svg";

function Navbar() {
  return (
    <>
      <div className="flex gap-4 justify-items-center justify-between">
        <div className="flex gap-8 justify-items-center py-4 px-6">
          <div>
            <img src={logo} alt="Logo image" />
          </div>
          <div className="flex gap-4">
            <a href="#" className="flex gap-1">
              <Icon icon="mdi:home" className="text-3xl text-gray-500" />
              <span className="text-xl">Home</span>
            </a>

            <a href="#about-me" className="flex gap-1">
              <Icon icon="mdi-information" className="text-3xl text-blue-400" />
              <span className="text-xl">About Me</span>
            </a>
            <a href="#skills-experience" className="flex gap-1">
              <Icon
                icon="mdi:work-outline"
                className="text-3xl text-green-600"
              />
              <span className="text-xl">Skills</span>
            </a>
            {/* <a href="#">Work</a> */}
            <a href="#contact-me" className="flex gap-1">
              <Icon icon="mdi:contact-mail" className="text-3xl text-red-500" />
              <span className="text-xl">Contact</span>
            </a>
          </div>
        </div>
        <div className="flex gap-2 px-4 py-2">
          <a href="https://www.linkedin.com/in/mostafa-edrees11/">
            <Icon icon="mdi:linkedin" className="text-blue-500 text-5xl" />
          </a>
          <a href="https://github.com/MostafaEdrees11">
            <Icon icon="mdi:github" className="text-5xl" />
          </a>
          <a href="https://www.facebook.com/mostafa.edrees.549">
            <Icon icon="mdi:facebook" className="text-blue-700 text-5xl" />
          </a>
        </div>
      </div>
      <hr className="h-1 bg-gray-400" />
    </>
  );
}

export default Navbar;
