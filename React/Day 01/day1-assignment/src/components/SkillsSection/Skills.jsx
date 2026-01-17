import { Icon } from "@iconify/react";
import CircleProgress from "../CircleProgress/CircleProgress";

function MySkills() {
  return (
    <>
      <div>
        <div id="skills-experience" className="text-center">
          <p className="text-xl text-gray-700 my-1">Here you can know</p>
          <p className="text-4xl text-gray-800 font-semibold my-2 mb-4">
            MY SKILLS
          </p>
        </div>
        <div className="flex gap-20 justify-center">
          <div>
            <h3 className="text-2xl font-medium text-gray-700 p-2 mb-2 text-center">
              Frontend Skills
            </h3>
            <table className="mx-2">
              <tr>
                <td>
                  <div className="font-bold text-center p-2">
                    <CircleProgress percentage="80" />
                    <p>HTML5</p>
                  </div>
                </td>
                <td>
                  <div className="font-bold text-center p-2">
                    <CircleProgress percentage="75" />
                    <p>CSS3</p>
                  </div>
                </td>
                <td>
                  <div className="font-bold text-center p-2">
                    <CircleProgress percentage="80" />
                    <p>JavaScript</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="font-bold text-center p-2">
                    <CircleProgress percentage="70" />
                    <p>TailwindCss</p>
                  </div>
                </td>
                <td>
                  <div className="font-bold text-center p-2">
                    <CircleProgress percentage="65" />
                    <p>Bootstrab</p>
                  </div>
                </td>
                <td>
                  <div className="font-bold text-center p-2">
                    <CircleProgress percentage="60" />
                    <p>Sass</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="font-bold text-center p-2">
                    <CircleProgress percentage="70" />
                    <p>TypeScript</p>
                  </div>
                </td>
                <td>
                  <div className="font-bold text-center p-2">
                    <CircleProgress percentage="5" />
                    <p>React</p>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div>
            <h3 className="text-2xl font-medium text-gray-700 p-2 mb-2 text-center">
              Backend Skills
            </h3>
            <table className="mx-2">
              <tr>
                <td>
                  <div className="font-bold text-center p-2">
                    <CircleProgress percentage="70" />
                    <p>Java</p>
                  </div>
                </td>
                <td>
                  <div className="font-bold text-center p-2">
                    <CircleProgress percentage="80" />
                    <p>OOP</p>
                  </div>
                </td>
                <td>
                  <div className="font-bold text-center p-2">
                    <CircleProgress percentage="80" />
                    <p>Node JS</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="font-bold text-center p-2">
                    <CircleProgress percentage="70" />
                    <p>Express JS</p>
                  </div>
                </td>
                <td>
                  <div className="font-bold text-center p-2">
                    <CircleProgress percentage="85" />
                    <p>SQL</p>
                  </div>
                </td>
                <td>
                  <div className="font-bold text-center p-2">
                    <CircleProgress percentage="60" />
                    <p>MongoDB</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="font-bold text-center p-2">
                    <CircleProgress percentage="80" />
                    <p>RestAPIs</p>
                  </div>
                </td>
                <td>
                  <div className="font-bold text-center p-2">
                    <CircleProgress percentage="80" />
                    <p>Postman</p>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default MySkills;
