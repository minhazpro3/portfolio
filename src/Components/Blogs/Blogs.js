import AOS from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";

const Blogs = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="bg-gray-800 pb-8" id="blogs">
      <h2
        data-aos="fade-up"
        className=" text-white mt-5 justify-center text-2xl bg-green-500   px-8 d-inline-block w-32 mx-auto py-3  mb-8 rounded-md"
      >
        Blogs
      </h2>
      <div className="container mx-auto py-8">
        <div className="grid  sm:grid-cols-1 md:grid-cols-2 gap-2  md:justify-content-center md:align-items-center">
          <div className="text-white mx-8 my-5">
            <h4 className="text-2xl mb-3">CRUD Operations:</h4>
            <p>
              In computer programming, create, read, update, and delete (CRUD)
              are the four basic operations of persistent storage. CRUD is also
              sometimes used to describe user interface conventions that
              facilitate viewing, searching, and changing information using
              computer-based forms and reports.{" "}
            </p>
          </div>
          <div className="text-white mx-8 my-5">
            <h4 className="text-2xl mb-3"> JSX:</h4>
            <p>
              {" "}
              It is simply a syntax extension of JavaScript. It allows us to
              directly write HTML in React (within JavaScript code). It is easy
              to create a template using JSX in React, but it is not a simple
              template language instead it comes with the full power of
              JavaScript.{" "}
            </p>
          </div>
          <div className="text-white mx-8 my-5">
            <h4 className="text-2xl mb-3"> Virtual DOM:</h4>
            <p>
              {" "}
              A virtual DOM is a lightweight JavaScript representation of the
              DOM used in declarative web frameworks such as React, Vue.js, and
              Elm. Updating the virtual DOM is comparatively faster than
              updating the actual DOM.{" "}
            </p>
          </div>
          <div className="text-white mx-8 my-5">
            <h4 className="text-2xl mb-3"> PropTypes:</h4>
            <p>
              {" "}
              PropTypes exports a range of validators that can be used to make
              sure the data you receive is valid. When an invalid value is
              provided for a prop, a warning will be shown in the JavaScript
              console. For performance reasons, propTypes is only checked in
              development mode.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
