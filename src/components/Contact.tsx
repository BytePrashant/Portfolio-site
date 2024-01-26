export function Contact() {
  return (
    <section
      id="contact"
      className="py-10 md:py-20 font-custom1 bg-gray-50"
    >
      <div className="container px-6 mx-auto md:w-3/4">
        <div className="content flex flex-col text-center md:text-start">
          <div className="contact__title mb-10">
            <p className="font-bold uppercase text-blue-500 mb-2">contact</p>
            <h3 className="h-10 font-bold text-gray-800 text-2xl">
              Liked my Portfolio? Hit me up! 👇
            </h3>
          </div>
          <div className="contact__icons flex flex-col gap-8 mt-10 md:flex-row md:gap-16">
            <div className="contact__icon-box flex flex-col items-center gap-3 md:flex-row">
              <span className="flex items-center justify-center bg-white rounded-full shadow-md text-blue-500 h-[56px] w-[56px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="tabler-icon tabler-icon-map-search items-center"
                >
                  <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
                  <path d="M9 4v13"></path>
                  <path d="M15 7v5"></path>
                  <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                  <path d="M20.2 20.2l1.8 1.8"></path>
                </svg>
              </span>
              <div className="contact__info flex flex-col gap-1">
                <h3 className="font-bold text-gray-800 text-lg">Location</h3>
                <p className="text-[18px] text-gray-700">Jhansi, India</p>
              </div>
            </div>
            <div className="contact__icon-box flex flex-col items-center gap-3 md:flex-row">
              <span className="flex items-center justify-center bg-white rounded-full shadow-md text-blue-500 w-[56px] h-[56px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="tabler-icon tabler-icon-mail"
                >
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                  <path d="M3 7l9 6l9 -6"></path>
                </svg>
              </span>
              <div className="contact__info flex flex-col gap-1">
                <h3 className="font-bold text-gray-800 text-lg">Mail</h3>
                <a
                  className="hover:text-blue-500 transition-all duration-300 text-[18px] text-gray-700 hover:scale-105"
                  href="mailto:pt092000@gmail.com"
                >
                  pt092000@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
