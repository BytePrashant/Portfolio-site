export function Contact() {
    return (
      <div>
        <section id="contact" className="relative flex flex-col py-28">
          <div className="container w-[1070px] h-[187px] mx-56 px-10">
            <div className="contact__content w-[990px] h-[197px] absolute flex flex-col">
              <div className="contact__title  h-20">
                <p className="font-[sans-serif] font-bold uppercase text-blue-500 h-6 mb-3">
                  contact
                </p>
                <h3 className="h-10 font-bold text-gray-800 text-3xl">
                  Don't be shy! Hit me up! 👇
                </h3>
              </div>
              <div className="contact__icons w-full relative flex gap-10 mt-16">
                <div className="contact__icon-box w-[202px] h-[56px] flex items-center gap-6">
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
                    <h3 className="font-bold text-gray-800 text-lg">
                      Location
                    </h3>
                    <p className="text-[18px] text-gray-700">Jhansi, India</p>
                  </div>
                </div>
                <div className="contact__icon-box w-[275px] h-[56px] flex items-center gap-6">
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
                      className="hover:text-blue-500 transition-all duration-300 text-[18px] text-gray-700"
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
      </div>
    );
}