import React from "react";

const Project = () => {
  return (
    <div className="flex flex-col items-center justify-center" id="projects">
      <div className="container mx-auto flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://catherinetagao.github.io/webapp/"
              title="College Portfolio Website"
              className="h-full w-full rounded-lg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="bg-gray-300 rounded-lg shadow-lg p-6">
            <div className="text-gray-800">
              <h1 className="text-3xl lg:text-4xl font-bold mb-4 font-['Arial_Black']">
                Simple Portfolio Website
              </h1>
              <div className="flex flex-wrap gap-2 mb-4 uppercase font-['Arial_Black']">
                <span className="bg-purple-500 text-white rounded-lg px-2 py-1 text-xs">
                  Html
                </span>
                <span className="bg-purple-500 text-white rounded-lg px-2 py-1 text-xs">
                  Bootstrap
                </span>
                <span className="bg-purple-500 text-white rounded-lg px-2 py-1 text-xs">
                  Css
                </span>
              </div>
              <p className="text-base leading-relaxed mb-4">
                This is a simple portfolio that I made in my 3rd year of
                college. where I use HTML, CSS, and Bootstrap. This portfolio
                website contains our activity during that time.
              </p>
              <div className="flex justify-between items-center uppercase font-['Arial_Black']">
                <a
                  href="https://catherinetagao.github.io/webapp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-800 hover:bg-indigo-700 text-white rounded-lg px-6 py-3 text-center transition duration-300 ease-in-out"
                >
                  View Project
                </a>
                <a
                  href="https://github.com/catherinetagao/webapp.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-gray-200 border border-gray-300 rounded-lg px-6 py-3 text-center transition duration-300 ease-in-out hover:bg-gray-300"
                >
                  <span className="mr-2">Source Code</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v4a1 1 0 11-2 0V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M4 7a1 1 0 011-1h4a1 1 0 110 2H6v10h8V8h2a1 1 0 110 2h-2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="bg-gray-300 rounded-lg shadow-lg p-6">
            <div className="text-gray-800">
              <h1 className="text-3xl lg:text-4xl font-bold mb-4 font-['Arial_Black']">
                Simple Website
              </h1>
              <div className="flex flex-wrap gap-2 mb-4 uppercase font-['Arial_Black']">
                <span className="bg-purple-500 text-white rounded-lg px-2 py-1 text-xs">
                  Html
                </span>
                <span className="bg-purple-500 text-white rounded-lg px-2 py-1 text-xs">
                  Css
                </span>
              </div>
              <p className="text-base leading-relaxed mb-4">
                This is a simple portfolio that I made in my 4th year of
                college. where I use HTML and CSS. This simple website created
                during pastime.
              </p>
              <div className="flex justify-between items-center uppercase font-['Arial_Black']">
                <a
                  href="https://myfriends-rho.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-800 hover:bg-indigo-700 text-white rounded-lg px-6 py-3 text-center transition duration-300 ease-in-out"
                >
                  View Project
                </a>
                <a
                  href="https://github.com/catherinetagao/myfriends"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-gray-200 border border-gray-300 rounded-lg px-6 py-3 text-center transition duration-300 ease-in-out hover:bg-gray-300"
                >
                  <span className="mr-2">Source Code</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v4a1 1 0 11-2 0V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M4 7a1 1 0 011-1h4a1 1 0 110 2H6v10h8V8h2a1 1 0 110 2h-2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://myfriends-rho.vercel.app/"
              title="My Friends"
              className="h-full w-full rounded-lg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          {/* Project 4 */}
          <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://cathorbe.vercel.app/"
              title="College Portfolio Website"
              className="h-full w-full rounded-lg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="bg-gray-300 rounded-lg shadow-lg p-6">
            <div className="text-gray-800">
              <h1 className="text-3xl lg:text-4xl font-bold mb-4 font-['Arial_Black']">
                Simple Portfolio Website
              </h1>
              <div className="flex flex-wrap gap-2 mb-4 uppercase font-['Arial_Black']">
                <span className="bg-purple-500 text-white rounded-lg px-2 py-1 text-xs">
                  Html
                </span>
                <span className="bg-purple-500 text-white rounded-lg px-2 py-1 text-xs">
                  Bootstrap
                </span>
                <span className="bg-purple-500 text-white rounded-lg px-2 py-1 text-xs">
                  Css
                </span>
              </div>
              <p className="text-base leading-relaxed mb-4">
                This is a simple portfolio that I made in my 3rd year of
                college. where I use HTML, CSS, and Bootstrap. This portfolio
                website contains our activity during that time.
              </p>
              <div className="flex justify-between items-center uppercase font-['Arial_Black']">
                <a
                  href="https://cathorbe.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-800 hover:bg-indigo-700 text-white rounded-lg px-6 py-3 text-center transition duration-300 ease-in-out"
                >
                  View Project
                </a>
                <a
                  href="https://github.com/catherinetagao/myportfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-gray-200 border border-gray-300 rounded-lg px-6 py-3 text-center transition duration-300 ease-in-out hover:bg-gray-300"
                >
                  <span className="mr-2">Source Code</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v4a1 1 0 11-2 0V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M4 7a1 1 0 011-1h4a1 1 0 110 2H6v10h8V8h2a1 1 0 110 2h-2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
