export function About() {
  return (
    <div>
      <section id="about" className="relative flex flex-col py-36">
        <div id="container" className="w-[1070px] h-[355px] mx-[249px] px-10">
          <div id="content" className="w-[990px] h-[355px] flex items-center">
            <div
              id="img-side"
              className="relative flex flex-col w-[495px] h-[354px]"
            >
              <img
                src="/static/media/working-emoji.c5325f52b5be329995a5.png"
                alt="emoji"
                className="work-emoji"
              />
              <img src="" alt="mee" className="img-side__main-img" />
              <span>
                <img
                  src="/static/media/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg"
                  alt="text"
                />
              </span>
            </div>
            <div className="text-side  flex flex-col w-[495px] h-[354px]">
              <h3 className="font-[sans-serif] font-bold uppercase text-blue-500 text-base pb-1">
                About me
              </h3>
              <h4 className="h-[70px] text-2xl my-2 font-bold">
                A dedicated Front-end Developer <br /> based in India 📍
              </h4>
              <p className="w-[480px] h-[238px] font-normal font-['Segoe UI Emoji'] text-gray-900 leading-6 text-lg/[17px]">
                As a Junior Front-End Developer, I possess an impressive arsenal
                of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I
                excel in designing and maintaining responsive websites that
                offer a smooth user experience. My expertise lies in crafting
                dynamic, engaging interfaces through writing clean and optimized
                code and utilizing cutting-edge development tools and
                techniques. I am also a team player who thrives in collaborating
                with cross-functional teams to produce outstanding web
                applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
