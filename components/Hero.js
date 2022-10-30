import { useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import bgRadial from "../public/images/radial.svg";
import waveSvg from "../public/images/wave.svg";
import profilePic from "../public/images/pp.png";
const Hero = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      if (loader) loader.style.display = "none";
    }
  }, []);

  const { theme, setTheme } = useTheme();

  console.log(theme);
  return (
    <div className="relative lg:h-screen h-full bg-cover">
      {/* <div id={"globalLoader"}>
        <div className="loader">
          <div />
          <div />
        </div>
      </div> */}

      <main
        className="lg:h-screen lg:py-0 py-20"
        style={{
          background: `${theme === "dark" ? `url(${bgRadial.src})` : ""}`,
        }}
      >
        <Image className="z-0" layout="fill" objectFit="cover" src={waveSvg} />{" "}
        <div className="relative container h-full z-10">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-20 items-center h-full">
            <div className="lg:text-left text-center">
              <h1 className="text-6xl leading-none mb-6">
                Not Your typical web developer and designer.
              </h1>
              <p className="text-xl w-4/5 lg:mx-0 mx-auto">
                My name is Ian Josef and I love to design and develop websites.
                JAMStack is my weapon of choice and you can check some of my
                work below. :)
              </p>
            </div>
            <div className="relative flex lg:justify-end justify-center">
              <Image layout="" objectFit="contain" src={profilePic} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
