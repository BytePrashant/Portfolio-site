export function Projects() {
  return (
    <div>
      <section
        id="projects"
        className="bg-gray-200 relative flex flex-col py-40"
      >
        <div className="container w-[1070px] h-[990px] mx-56 px-10">
          <div className="project-content w-[990px] h-[990px] absolute flex flex-col ">
            <h3 className="font-[sans-serif] font-bold uppercase text-blue-500 h-6 mb-3">
              portfolio
            </h3>
            <h3 className="h-[70px] text-3xl mb-10 font-bold">
              Each project is a unique piece of development 🧩
            </h3>
            <div className="projects-grid grid grid-cols-1 gap-12 h-auto w-full ">
              <div className="pro pro__1 flex flex-row gap-20 h-[400px] p-5 bg-white rounded-lg shadow-md">
                <div className="pro__img w-[530px] h-auto">
                  <a
                    target="_blank"
                    href="https://car-rental-ten.vercel.app/"
                    rel="noreferrer"
                  >
                    <img
                      src="/static/media/car-rental-full.c58b37da333d73238fdd.webp"
                      alt="website"
                    />
                  </a>
                </div>
                <div className="pro__text flex flex-col items-center justify-center w-[300px] h-auto">
                  <h3 className="flex gap-1 items-center justify-center font-bold text-gray-700 uppercase mb-5">
                    Nudemy{" "}
                    <span className="date-className text-gray-600 text-sm ml-1.5">
                      (November 2023)
                    </span>{" "}
                    🚗
                  </h3>
                  <p className="text-black/50 text-lg font-medium text-center">
                    A course-selling website that allows users to create and
                    sell courses online like Udemy. It provides an interface for
                    creating, updating, and selling courses.
                  </p>
                  <div className="stack flex justify-center w-full h-[50px] gap-4 mt-3">
                    <p className="bg-white shadow-md text-black/75 font-bold p-4">
                      React
                    </p>
                    <p className="bg-white shadow-md text-black/75 font-bold p-4">
                      Tailwind
                    </p>
                  </div>
                  <div className="links flex items-center justify-evenly mt-7 w-full h-[24px]">
                    <a
                      className="flex items-center text-gray-700 text-lg font-medium gap-1 hover:text-blue-500 transition-all duration-300"
                      target="_blank"
                      href="https://github.com/BytePrashant/Nudemy"
                      rel="noreferrer"
                    >
                      Code{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="tabler-icon tabler-icon-brand-github"
                      >
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                      </svg>
                    </a>
                    <a
                      className="flex items-center text-gray-700 text-lg font-medium gap-1 hover:text-blue-500 transition-all duration-300"
                      target="_blank"
                      href="https://www.youtube.com/watch?v=votHFNnrQCc&ab_channel=Tomar"
                      rel="noreferrer"
                    >
                      Live Demo
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="tabler-icon tabler-icon-external-link"
                      >
                        <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                        <path d="M11 13l9 -9"></path>
                        <path d="M15 4h5v5"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="pro pro__1 flex flex-row-reverse gap-20 h-[400px] p-5 bg-white rounded-lg shadow-md">
                <div className="pro__img w-[530px] h-auto">
                  <a
                    target="_blank"
                    href="https://drum-kit-rouge-gamma.vercel.app/"
                    rel="noreferrer"
                  >
                    <img src="./drum-kit.png" alt="website"/>
                  </a>
                </div>
                <div className="pro__text flex flex-col items-center justify-center w-[300px] h-auto">
                  <h3 className="flex gap-1 items-center justify-center font-bold text-gray-700 uppercase mb-5">
                    Drum-Kit{" "}
                    <span className="date-className">(February 2022)</span> 🥁
                  </h3>
                  <p className="text-black/50 text-lg font-medium text-center">
                    Click on drum icons to produce authentic sounds, or unleash
                    your inner rhythm using keyboard keys. Immerse yourself in
                    the joy of creating beats effortlessly. #DrumKitMagic🎶
                  </p>
                  <div className="stack flex justify-center w-full h-[50px] gap-4 mt-3">
                    <p className="bg-white shadow-md text-black/75 font-bold p-4">
                      JavaScript
                    </p>
                    <p className="bg-white shadow-md text-black/75 font-bold p-4">
                      CSS
                    </p>
                  </div>
                  <div className="links flex items-center justify-evenly mt-7 w-full h-[24px]">
                    <a
                      className="flex items-center text-gray-700 text-lg font-medium gap-1 hover:text-blue-500 transition-all duration-300"
                      target="_blank"
                      href="https://github.com/BytePrashant/Drum-kit"
                      rel="noreferrer"
                    >
                      Code{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="tabler-icon tabler-icon-brand-github"
                      >
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                      </svg>
                    </a>
                    <a
                      className="flex items-center text-gray-700 text-lg font-medium gap-1 hover:text-blue-500 transition-all duration-300"
                      target="_blank"
                      href="https://drum-kit-rouge-gamma.vercel.app/"
                      rel="noreferrer"
                    >
                      Live Demo
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="tabler-icon tabler-icon-external-link"
                      >
                        <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                        <path d="M11 13l9 -9"></path>
                        <path d="M15 4h5v5"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
