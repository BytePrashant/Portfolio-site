export function About() {
  return (
    <div>
      <section id="about" className="relative flex flex-col py-36 font-custom1">
        <div id="container" className="w-[1070px] h-[355px] mx-[249px] px-10">
          <div id="content" className="w-[990px] h-[355px] flex items-center">
            <div id="img-side" className="relative w-[495px] h-[354px] ">
              <img
                src="/working_emoji.png"
                alt="emoji"
                className="work-emoji absolute bottom-35 right-98 w-24 z-10"
              />
              <img
                src="/computer.webp"
                alt="mee"
                className="main-img object-cover rounded-lg w-[410px] h-[350px]"
              />
              <span>
                <img src="/text.svg" alt="text" />
              </span>
            </div>
            <div className="text-side  flex flex-col w-[495px] h-[354px]">
              <h3 className="font-[sans-serif] font-bold uppercase text-blue-500 text-base mb-3">
                About me
              </h3>
              <h4 className="h-[70px] text-2xl mb-4 font-bold">
                A dedicated Front-end Developer <br /> based in India 📍
              </h4>
              <p className="w-[480px] h-[238px] text-[18px] text-gray-800/60">
                As a Full-Stack Web Developer, I possess an impressive arsenal
                of skills in HTML, CSS, JavaScript, React, Node.js, Tailwind,
                and MUI. I excel in designing and maintaining responsive
                websites that offer a smooth user experience. My expertise lies
                in crafting dynamic, engaging interfaces through writing clean
                and optimized code and utilizing cutting-edge development tools
                and techniques. I am also a team player who thrives in
                collaborating with cross-functional teams to produce outstanding
                web applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
