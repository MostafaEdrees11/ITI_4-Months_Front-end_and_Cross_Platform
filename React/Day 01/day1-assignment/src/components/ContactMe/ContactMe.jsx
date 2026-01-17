import { Icon } from "@iconify/react";

function ContactMe() {
  return (
    <>
      <p
        id="contact-me"
        className="text-center my-4 text-4xl text-gray-800 font-semibold "
      >
        CONTACT ME
      </p>
      <div className="grid grid-cols-3">
        <div className="text-center p-4">
          <a href="#" className="flex flex-col items-center">
            <Icon
              icon="famicons:location"
              className="text-red-700 text-5xl p-1"
            />
            Samannud-Gharabia
          </a>
        </div>
        <div className="text-center p-4">
          <a href="tel:+201558795641" className="flex flex-col items-center">
            <Icon
              icon="famicons:phone-portrait-sharp"
              className="text-green-700 text-5xl p-1"
            />
            Call Me
          </a>
        </div>
        <div className="text-center p-4">
          <a
            href="mailto:mostafaedrees018@gmail.com"
            className="flex flex-col items-center"
          >
            <Icon icon="famicons:mail" className="text-blue-500 text-5xl p-1" />
            Send Email
          </a>
        </div>
        <div className="text-center p-4">
          <a
            href="https://www.linkedin.com/in/mostafa-edrees11"
            className="flex flex-col items-center"
          >
            <Icon
              icon="famicons:logo-linkedin"
              className="text-blue-500 text-5xl p-1"
            />
            Mostafa Edrees
          </a>
        </div>
        <div className="text-center p-4">
          <a
            href="https://github.com/MostafaEdrees11"
            className="flex flex-col items-center"
          >
            <Icon icon="famicons:logo-github" className="text-5xl p-1" />
            MostafaEdrees11
          </a>
        </div>
        <div className="text-center p-4">
          <a
            href="https://www.facebook.com/mostafa.edrees.549"
            className="flex flex-col items-center"
          >
            <Icon
              icon="famicons:logo-facebook"
              className="text-blue-700 text-5xl p-1"
            />
            Mostafa Edrees
          </a>
        </div>
      </div>
      {/* <div className="flex gap-48 justify-center">
        <div className="text-center p-4">
          <a href="#" className="flex flex-col items-center">
            <Icon
              icon="famicons:location"
              className="text-red-700 text-5xl p-1"
            />
            Samannud-Gharabia
          </a>
        </div>
        <div className="text-center p-4">
          <a href="#" className="flex flex-col items-center">
            <Icon
              icon="famicons:phone-portrait-sharp"
              className="text-green-700 text-5xl p-1"
            />
            +201558795641
          </a>
        </div>
        <div className="text-center p-4">
          <a href="#" className="flex flex-col items-center">
            <Icon icon="famicons:mail" className="text-blue-700 text-5xl p-1" />
            mostafaedrees018@gmail.com
          </a>
        </div>
      </div>
      <div className="flex gap-64 justify-center">
        <div className="text-center p-4">
          <a href="#" className="flex flex-col items-center">
            <Icon
              icon="famicons:logo-linkedin"
              className="text-blue-500 text-5xl p-1"
            />
            Mostafa Edrees
          </a>
        </div>
        <div className="text-center p-4">
          <a href="#" className="flex flex-col items-center">
            <Icon icon="famicons:logo-github" className="text-5xl p-1" />
            MostafaEdrees11
          </a>
        </div>
        <div className="text-center p-4">
          <a href="#" className="flex flex-col items-center">
            <Icon
              icon="famicons:logo-facebook"
              className="text-blue-700 text-5xl p-1"
            />
            Mostafa Edrees
          </a>
        </div>
      </div> */}
    </>
  );
}

export default ContactMe;
