export function About() {
  return (
    <div>
      <section id="about" className="relative flex flex-col py-28 font-custom1">
        <div id="container" className="w-[1070px] h-[450px] mx-[249px] px-10">
          <div id="content" className="w-[990px] h-[450px] flex items-center">
            <div id="img-side" className="relative w-[495px] h-auto">
              <img
                src="/computer.webp"
                alt="me"
                className="main-img object-cover rounded-2xl w-[410px] h-[350px] relative z-0"
              />
              <span className="absolute bottom-0 right-0 w-auto h-auto bg-white rounded-full origin-top-left rotate-12">
                <img
                  src="https://www.stefantopalovic.com/static/media/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg"
                  alt="text"
                  className="h-[190px] w-[190px] animate-rotate-slow"
                />
              </span>
              <img
                src="/working_emoji.png"
                alt="emoji"
                className="work-emoji absolute bottom-14 right-[90px] w-14  overflow-hidden"
              />
            </div>
            <div className="text-side  flex flex-col w-[495px] h-auto">
              <h3 className="font-[sans-serif] font-bold uppercase text-blue-500 text-base mb-1">
                About me
              </h3>
              <h4 className="h-auto text-2xl mb-2 font-semibold">
                A not so dedicated Full Stack Web Developer
              </h4>
              <p className="w-[480px] h-auto text-[16px] text-gray-800/60 text-justify">
                A Full Stack Web Developer who learned the art of coding in the
                same time it takes most people to decide what to watch on
                Netflix. With the magical powers of a quick learner, I've
                mastered the art of building beautiful, user-friendly websites.
                They say laughter is the best medicine, but I believe a
                well-written code snippet is even better. As a team player, I
                assure you that my newfound skills will make me an irreplaceable
                asset to any web development team. Because, you know, who needs
                years of experience when you've got six months of absolute
                brilliance under your belt? So, if you're looking for a
                developer with a sense of humor as sharp as their coding skills,
                look no further. I promise my websites are not only
                user-friendly but also certified chuckle-embedded.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
