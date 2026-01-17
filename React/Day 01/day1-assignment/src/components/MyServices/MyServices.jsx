import { Icon } from "@iconify/react";

function MyServices() {
  return (
    <>
      <div>
        <div className="text-center my-4">
          <p className="text-xl text-gray-700 my-1">Check out all</p>
          <p className="text-4xl text-gray-800 font-semibold my-2">
            MY SERVICES
          </p>
        </div>
        <div className="grid grid-cols-2 justify-center mx-20">
          <div className="flex my-6">
            <Icon
              icon="famicons:document-text-outline"
              className="text-8xl w-40 text-gray-500 border-2 border-gray-400 p-2 mx-2 rounded-md"
            />
            <div className="mx-2">
              <p className="font-bold text-gray-800">BRAND DESIGN</p>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit dolores earum harum blanditiis fugit nihil optio
                recusandae labore aliquam eos!
              </p>
            </div>
          </div>
          <div className="flex my-6">
            <Icon
              icon="famicons:desktop-outline"
              className="text-8xl w-40 text-gray-500 border-2 border-gray-400 p-2 mx-2 rounded-md"
            />
            <div className="mx-2">
              <p className="font-bold text-gray-800">WEB DESIGN</p>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit dolores earum harum blanditiis fugit nihil optio
                recusandae labore aliquam eos!
              </p>
            </div>
          </div>
          <div className="flex my-6">
            <Icon
              icon="famicons:phone-portrait-sharp"
              className="text-8xl w-40 text-gray-500 border-2 border-gray-400 p-2 mx-2 rounded-md"
            />
            <div className="mx-2">
              <p className="font-bold text-gray-800">MOBILE APPLICATIONS</p>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit dolores earum harum blanditiis fugit nihil optio
                recusandae labore aliquam eos!
              </p>
            </div>
          </div>
          <div className="flex my-6">
            <Icon
              icon="famicons:camera"
              className="text-8xl w-40 text-gray-500 border-2 border-gray-400 p-2 mx-2 rounded-md"
            />
            <div className="mx-2">
              <p className="font-bold text-gray-800">WEB DESIGN</p>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit dolores earum harum blanditiis fugit nihil optio
                recusandae labore aliquam eos!
              </p>
            </div>
          </div>
          <div className="flex my-6">
            <Icon
              icon="tabler:target"
              className="text-8xl w-40 text-gray-500 border-2 border-gray-400 p-2 mx-2 rounded-md"
            />
            <div className="mx-2">
              <p className="font-bold text-gray-800">GAME DEVELOPMENT</p>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit dolores earum harum blanditiis fugit nihil optio
                recusandae labore aliquam eos!
              </p>
            </div>
          </div>
          <div className="flex my-6">
            <Icon
              icon="tabler:brand-hipchat"
              className="text-8xl w-40 text-gray-500 border-2 border-gray-400 p-2 mx-2 rounded-md"
            />
            <div className="mx-2">
              <p className="font-bold text-gray-800">MARKETING</p>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit dolores earum harum blanditiis fugit nihil optio
                recusandae labore aliquam eos!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyServices;
