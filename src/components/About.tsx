export function About() {
  return (
    <section
      id="about"
      className="relative py-10 md:py-36 font-custom1 bg-gray-50"
    >
      <div className="container px-6 md:w-2/3 mx-auto">
        <div className="content flex flex-col gap-10 md:flex md:flex-row md:gap-0">
          <div id="img-side" className="md:w-1/2">
            <img
              src="/computer.webp"
              alt="me"
              className="main-img object-cover rounded-2xl relative"
            />
            <span className="hidden md:block absolute bottom-[90px] left-[630px] w-auto h-auto bg-white rounded-full origin-top-left rotate-12">
              <img
                src="https://www.stefantopalovic.com/static/media/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg"
                alt="text"
                className="h-[150px] w-[150px] animate-trans-rotate"
              />
            </span>
            <img
              src="/working_emoji.png"
              alt="emoji"
              className="work-emoji hidden md:block absolute bottom-[130px] left-[660px] w-14"
            />
          </div>
          <div className="text-side text-center md:text-start md:ml-10 md:w-1/2">
            <h3 className="font-bold uppercase text-blue-500 text-base mb-5">
              About me
            </h3>
            <h4 className="text-2xl font-bold mb-4">
              A Full Stack Web Developer
            </h4>
            <p className="text-gray-800/60">
              A Full Stack Web Developer who learned the art of coding in the
              same time it takes most people to decide what to watch on Netflix.
              With the magical powers of a quick learner, I've mastered the art
              of building beautiful, user-friendly websites. As a team player, I
              assure you that my skills will make me an irreplaceable asset to
              any web development team. So, if you're looking for a developer
              with a sense of humor as sharp as their coding skills, look no
              further.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
