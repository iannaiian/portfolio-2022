import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Button from "./Button";
import Image from "next/image";
import LogoLight from "../public/images/logo-white.png";
import LogoDark from "../public/images/logo-dark.png";
import Link from "next/link";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <Button
          className="bg-gray-200 dark:bg-blue"
          onClick={() => setTheme("light")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      );
    } else {
      return (
        <Button className="bg-gray-200" onClick={() => setTheme("dark")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </Button>
      );
    }
  };
  return (
    <>
      <div className="fixed w-full z-50">
        <div className="container py-6 flex justify-between">
          <div>
            <Link href="/">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="188"
                  height="41"
                  fill="none"
                  viewBox="0 0 269 41"
                  className="fill-current dark:text-white text-dark-blue"
                >
                  <path d="M63.025 12.5h4.2c1.367 0 2.392.367 3.075 1.1.683.733 1.025 1.808 1.025 3.225v8.85c0 1.417-.342 2.492-1.025 3.225-.683.733-1.708 1.1-3.075 1.1h-4.2V12.5zm4.15 15c.45 0 .792-.133 1.025-.4.25-.267.375-.7.375-1.3v-9.1c0-.6-.125-1.033-.375-1.3-.233-.267-.575-.4-1.025-.4h-1.4v12.5h1.4zm8.506-15h7.5V15h-4.75v4.625h3.775v2.5h-3.775V27.5h4.75V30h-7.5V12.5zm15.206 17.75c-1.333 0-2.342-.375-3.025-1.125-.683-.767-1.025-1.858-1.025-3.275v-1h2.6v1.2c0 1.133.475 1.7 1.425 1.7.467 0 .817-.133 1.05-.4.25-.283.375-.733.375-1.35 0-.733-.167-1.375-.5-1.925-.333-.567-.95-1.242-1.85-2.025-1.133-1-1.925-1.9-2.375-2.7-.45-.817-.675-1.733-.675-2.75 0-1.383.35-2.45 1.05-3.2.7-.767 1.717-1.15 3.05-1.15 1.317 0 2.308.383 2.975 1.15.683.75 1.025 1.833 1.025 3.25v.725h-2.6v-.9c0-.6-.117-1.033-.35-1.3-.233-.283-.575-.425-1.025-.425-.917 0-1.375.558-1.375 1.675 0 .633.167 1.225.5 1.775.35.55.975 1.217 1.875 2 1.15 1 1.942 1.908 2.375 2.725.433.817.65 1.775.65 2.875 0 1.433-.358 2.533-1.075 3.3-.7.767-1.725 1.15-3.075 1.15zm8.227-17.75h2.75V30h-2.75V12.5zm11.209 17.75c-1.333 0-2.35-.375-3.05-1.125-.7-.767-1.05-1.858-1.05-3.275v-9.2c0-1.417.35-2.5 1.05-3.25.7-.767 1.717-1.15 3.05-1.15 1.334 0 2.35.383 3.05 1.15.7.75 1.05 1.833 1.05 3.25v1.5h-2.6v-1.675c0-1.15-.475-1.725-1.425-1.725-.95 0-1.425.575-1.425 1.725v9.575c0 1.133.475 1.7 1.425 1.7.95 0 1.425-.567 1.425-1.7v-3.425h-1.375v-2.5h3.975v5.725c0 1.417-.35 2.508-1.05 3.275-.7.75-1.716 1.125-3.05 1.125zm8.366-17.75h3.45l2.675 10.475h.05V12.5h2.45V30h-2.825l-3.3-12.775h-.05V30h-2.45V12.5zm13.169 0h7.5V15h-4.75v4.625h3.775v2.5h-3.775V27.5h4.75V30h-7.5V12.5zm11.582 0h4.075c1.417 0 2.45.333 3.1 1 .65.65.975 1.658.975 3.025V17.6c0 1.817-.6 2.967-1.8 3.45v.05c.667.2 1.133.608 1.4 1.225.283.617.425 1.442.425 2.475v3.075c0 .5.017.908.05 1.225.033.3.117.6.25.9h-2.8c-.1-.283-.167-.55-.2-.8s-.05-.7-.05-1.35v-3.2c0-.8-.133-1.358-.4-1.675-.25-.317-.692-.475-1.325-.475h-.95V30h-2.75V12.5zm3.75 7.5c.55 0 .958-.142 1.225-.425.283-.283.425-.758.425-1.425V16.8c0-.633-.117-1.092-.35-1.375-.217-.283-.567-.425-1.05-.425h-1.25v5h1zm14.687-7.5h2.65l1.225 13.45h.05l1.3-13.45h3l1.3 13.45h.05l1.225-13.45h2.375L173.277 30h-3.425l-1.25-11.8h-.05l-1.25 11.8h-3.65l-1.775-17.5zm17.066 0h2.75v7.125h2.95V12.5h2.75V30h-2.75v-7.875h-2.95V30h-2.75V12.5zm16.973 17.75c-1.35 0-2.383-.383-3.1-1.15-.717-.767-1.075-1.85-1.075-3.25v-9.2c0-1.4.358-2.483 1.075-3.25.717-.767 1.75-1.15 3.1-1.15s2.383.383 3.1 1.15c.717.767 1.075 1.85 1.075 3.25v9.2c0 1.4-.358 2.483-1.075 3.25-.717.767-1.75 1.15-3.1 1.15zm0-2.5c.95 0 1.425-.575 1.425-1.725v-9.55c0-1.15-.475-1.725-1.425-1.725-.95 0-1.425.575-1.425 1.725v9.55c0 1.15.475 1.725 1.425 1.725zm18.914 2.5c-1.317 0-2.325-.375-3.025-1.125-.684-.75-1.025-1.808-1.025-3.175v-9.4c0-1.367.341-2.425 1.025-3.175.7-.75 1.708-1.125 3.025-1.125 1.316 0 2.316.375 3 1.125.7.75 1.05 1.808 1.05 3.175v1.85h-2.6v-2.025c0-1.083-.459-1.625-1.375-1.625-.917 0-1.375.542-1.375 1.625v9.775c0 1.067.458 1.6 1.375 1.6.916 0 1.375-.533 1.375-1.6v-2.675h2.6v2.475c0 1.367-.35 2.425-1.05 3.175-.684.75-1.684 1.125-3 1.125zm12.219 0c-1.35 0-2.384-.383-3.1-1.15-.717-.767-1.075-1.85-1.075-3.25v-9.2c0-1.4.358-2.483 1.075-3.25.716-.767 1.75-1.15 3.1-1.15s2.383.383 3.1 1.15c.716.767 1.075 1.85 1.075 3.25v9.2c0 1.4-.359 2.483-1.075 3.25-.717.767-1.75 1.15-3.1 1.15zm0-2.5c.95 0 1.425-.575 1.425-1.725v-9.55c0-1.15-.475-1.725-1.425-1.725-.95 0-1.425.575-1.425 1.725v9.55c0 1.15.475 1.725 1.425 1.725zm8.535-15.25h4.2c1.366 0 2.391.367 3.075 1.1.683.733 1.025 1.808 1.025 3.225v8.85c0 1.417-.342 2.492-1.025 3.225-.684.733-1.709 1.1-3.075 1.1h-4.2V12.5zm4.15 15c.45 0 .791-.133 1.025-.4.25-.267.375-.7.375-1.3v-9.1c0-.6-.125-1.033-.375-1.3-.234-.267-.575-.4-1.025-.4h-1.4v12.5h1.4zm8.506-15h7.5V15h-4.75v4.625h3.775v2.5h-3.775V27.5h4.75V30h-7.5V12.5zm15.206 17.75c-1.334 0-2.342-.375-3.025-1.125-.684-.767-1.025-1.858-1.025-3.275v-1h2.6v1.2c0 1.133.475 1.7 1.425 1.7.466 0 .816-.133 1.05-.4.25-.283.375-.733.375-1.35 0-.733-.167-1.375-.5-1.925-.334-.567-.95-1.242-1.85-2.025-1.134-1-1.925-1.9-2.375-2.7-.45-.817-.675-1.733-.675-2.75 0-1.383.35-2.45 1.05-3.2.7-.767 1.716-1.15 3.05-1.15 1.316 0 2.308.383 2.975 1.15.683.75 1.025 1.833 1.025 3.25v.725h-2.6v-.9c0-.6-.117-1.033-.35-1.3-.234-.283-.575-.425-1.025-.425-.917 0-1.375.558-1.375 1.675 0 .633.166 1.225.5 1.775.35.55.975 1.217 1.875 2 1.15 1 1.941 1.908 2.375 2.725.433.817.65 1.775.65 2.875 0 1.433-.359 2.533-1.075 3.3-.7.767-1.725 1.15-3.075 1.15zM0 21.777c0 8.211 6.48 14.868 14.474 14.868H19.2v-4.656h-4.726c-2.659 0-9.452-2.102-9.452-10.212 0-6.488 5.76-9.462 9.452-9.462h7.237V41l4.283-4.355V4.355L21.71 0v6.908h-7.237C6.48 6.908 0 13.565 0 21.777z"></path>
                  <path d="M33.526 36.645C41.52 36.645 48 29.988 48 21.777c0-8.212-6.48-14.869-14.474-14.869h-5.17v5.407h5.17c3.25 0 9.452 2.013 9.452 9.462 0 3.304-1.89 10.062-9.452 10.062l-3.84-3.905-3.692 3.755v4.956l3.692-3.755 3.693 3.755h.147z"></path>
                </svg>
              </a>
            </Link>
          </div>
          <div> {renderThemeChanger()}</div>
        </div>
      </div>
    </>
  );
};

export default Header;
