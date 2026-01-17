import profileImg from "../../assets/profile-image.jpg";
import Resume from "../../assets/resume.pdf";

function HeroSection() {
  return (
    <>
      <div className="flex justify-center gap-16 py-12" id="about-me">
        <div className="w-3/12">
          <img src={profileImg} alt="Profile Image" className="w-full" />
        </div>
        <div className="w-6/12">
          <p className="text-5xl font-semibold text-gray-700 leading-tight">
            HELLO. I'm
            <br />
            MOSTAFA EDREES
          </p>
          <p className="w-fit leading-7 text-gray-700 my-2">
            A motivated Frontend Developer with a solid technical foundation in
            building user-friendly web applications. Competent in front-end
            technologies including HTML, CSS, JavaScript, Bootstrap, and
            Tailwind CSS. In addition to knowledge in backend and mobile
            development (Node JS, SQL, Dart/Flutter). A collaborative team
            member committed to continuous learning and developing clean,
            high-quality, and easily maintainable code.
          </p>
          <button className="border-2 border-gray-800 rounded-lg p-2 my-2 bg-blue-500 text-white font-bold">
            Download Resume
          </button>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
