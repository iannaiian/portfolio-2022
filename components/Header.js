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
          className="bg-gray-200 dark:bg-gray-600"
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="188"
                height="41"
                fill="none"
                viewBox="0 0 188 41"
                className="fill-current dark:text-white text-dark-blue"
              >
                <path d="M64.615 14.5h2.52c.82 0 1.435.22 1.845.66.41.44.615 1.085.615 1.935v5.31c0 .85-.205 1.495-.615 1.935-.41.44-1.025.66-1.845.66h-2.52V14.5zm2.49 9c.27 0 .475-.08.615-.24.15-.16.225-.42.225-.78v-5.46c0-.36-.075-.62-.225-.78-.14-.16-.345-.24-.615-.24h-.84v7.5h.84zm5.104-9h4.5V16h-2.85v2.775h2.265v1.5h-2.265V23.5h2.85V25h-4.5V14.5zm9.123 10.65c-.8 0-1.405-.225-1.815-.675-.41-.46-.615-1.115-.615-1.965v-.6h1.56v.72c0 .68.285 1.02.855 1.02.28 0 .49-.08.63-.24.15-.17.225-.44.225-.81 0-.44-.1-.825-.3-1.155-.2-.34-.57-.745-1.11-1.215-.68-.6-1.155-1.14-1.425-1.62a3.361 3.361 0 01-.405-1.65c0-.83.21-1.47.63-1.92.42-.46 1.03-.69 1.83-.69.79 0 1.385.23 1.785.69.41.45.615 1.1.615 1.95v.435h-1.56v-.54c0-.36-.07-.62-.21-.78-.14-.17-.345-.255-.615-.255-.55 0-.825.335-.825 1.005 0 .38.1.735.3 1.065.21.33.585.73 1.125 1.2.69.6 1.165 1.145 1.425 1.635s.39 1.065.39 1.725c0 .86-.215 1.52-.645 1.98-.42.46-1.035.69-1.845.69zm4.936-10.65h1.65V25h-1.65V14.5zm6.726 10.65c-.8 0-1.41-.225-1.83-.675-.42-.46-.63-1.115-.63-1.965v-5.52c0-.85.21-1.5.63-1.95.42-.46 1.03-.69 1.83-.69s1.41.23 1.83.69c.42.45.63 1.1.63 1.95v.9h-1.56v-1.005c0-.69-.285-1.035-.855-1.035-.57 0-.855.345-.855 1.035v5.745c0 .68.285 1.02.855 1.02.57 0 .855-.34.855-1.02v-2.055h-.825v-1.5h2.385v3.435c0 .85-.21 1.505-.63 1.965-.42.45-1.03.675-1.83.675zm5.02-10.65h2.069l1.605 6.285h.03V14.5h1.47V25h-1.695l-1.98-7.665h-.03V25h-1.47V14.5zm7.901 0h4.5V16h-2.85v2.775h2.265v1.5h-2.265V23.5h2.85V25h-4.5V14.5zm6.949 0h2.445c.85 0 1.47.2 1.86.6.39.39.585.995.585 1.815v.645c0 1.09-.36 1.78-1.08 2.07v.03c.4.12.68.365.84.735.17.37.255.865.255 1.485v1.845c0 .3.01.545.03.735.02.18.07.36.15.54h-1.68c-.06-.17-.1-.33-.12-.48a7.22 7.22 0 01-.03-.81v-1.92c0-.48-.08-.815-.24-1.005-.15-.19-.415-.285-.795-.285h-.57V25h-1.65V14.5zm2.25 4.5c.33 0 .575-.085.735-.255.17-.17.255-.455.255-.855v-.81c0-.38-.07-.655-.21-.825-.13-.17-.34-.255-.63-.255h-.75v3h.6zm8.812-4.5h1.59l.735 8.07h.03l.78-8.07h1.8l.78 8.07h.03l.735-8.07h1.425L130.766 25h-2.055l-.75-7.08h-.03l-.75 7.08h-2.19l-1.065-10.5zm10.24 0h1.65v4.275h1.77V14.5h1.65V25h-1.65v-4.725h-1.77V25h-1.65V14.5zm10.184 10.65c-.81 0-1.43-.23-1.86-.69-.43-.46-.645-1.11-.645-1.95v-5.52c0-.84.215-1.49.645-1.95.43-.46 1.05-.69 1.86-.69s1.43.23 1.86.69c.43.46.645 1.11.645 1.95v5.52c0 .84-.215 1.49-.645 1.95-.43.46-1.05.69-1.86.69zm0-1.5c.57 0 .855-.345.855-1.035v-5.73c0-.69-.285-1.035-.855-1.035-.57 0-.855.345-.855 1.035v5.73c0 .69.285 1.035.855 1.035zm11.348 1.5c-.79 0-1.395-.225-1.815-.675-.41-.45-.615-1.085-.615-1.905v-5.64c0-.82.205-1.455.615-1.905.42-.45 1.025-.675 1.815-.675s1.39.225 1.8.675c.42.45.63 1.085.63 1.905v1.11h-1.56v-1.215c0-.65-.275-.975-.825-.975-.55 0-.825.325-.825.975v5.865c0 .64.275.96.825.96.55 0 .825-.32.825-.96v-1.605h1.56v1.485c0 .82-.21 1.455-.63 1.905-.41.45-1.01.675-1.8.675zm7.331 0c-.81 0-1.43-.23-1.86-.69-.43-.46-.645-1.11-.645-1.95v-5.52c0-.84.215-1.49.645-1.95.43-.46 1.05-.69 1.86-.69s1.43.23 1.86.69c.43.46.645 1.11.645 1.95v5.52c0 .84-.215 1.49-.645 1.95-.43.46-1.05.69-1.86.69zm0-1.5c.57 0 .855-.345.855-1.035v-5.73c0-.69-.285-1.035-.855-1.035-.57 0-.855.345-.855 1.035v5.73c0 .69.285 1.035.855 1.035zm5.121-9.15h2.52c.82 0 1.435.22 1.845.66.41.44.615 1.085.615 1.935v5.31c0 .85-.205 1.495-.615 1.935-.41.44-1.025.66-1.845.66h-2.52V14.5zm2.49 9c.27 0 .475-.08.615-.24.15-.16.225-.42.225-.78v-5.46c0-.36-.075-.62-.225-.78-.14-.16-.345-.24-.615-.24h-.84v7.5h.84zm5.104-9h4.5V16h-2.85v2.775h2.265v1.5h-2.265V23.5h2.85V25h-4.5V14.5zm9.123 10.65c-.8 0-1.405-.225-1.815-.675-.41-.46-.615-1.115-.615-1.965v-.6h1.56v.72c0 .68.285 1.02.855 1.02.28 0 .49-.08.63-.24.15-.17.225-.44.225-.81 0-.44-.1-.825-.3-1.155-.2-.34-.57-.745-1.11-1.215-.68-.6-1.155-1.14-1.425-1.62a3.361 3.361 0 01-.405-1.65c0-.83.21-1.47.63-1.92.42-.46 1.03-.69 1.83-.69.79 0 1.385.23 1.785.69.41.45.615 1.1.615 1.95v.435h-1.56v-.54c0-.36-.07-.62-.21-.78-.14-.17-.345-.255-.615-.255-.55 0-.825.335-.825 1.005 0 .38.1.735.3 1.065.21.33.585.73 1.125 1.2.69.6 1.165 1.145 1.425 1.635s.39 1.065.39 1.725c0 .86-.215 1.52-.645 1.98-.42.46-1.035.69-1.845.69zM0 21.777c0 8.211 6.48 14.868 14.474 14.868H19.2v-4.656h-4.726c-2.659 0-9.452-2.102-9.452-10.212 0-6.488 5.76-9.462 9.452-9.462h7.237V41l4.283-4.355V4.355L21.71 0v6.908h-7.237C6.48 6.908 0 13.565 0 21.777z"></path>
                <path d="M33.526 36.645C41.52 36.645 48 29.988 48 21.777c0-8.212-6.48-14.869-14.474-14.869h-5.17v5.407h5.17c3.25 0 9.452 2.013 9.452 9.462 0 3.304-1.89 10.062-9.452 10.062l-3.84-3.905-3.692 3.755v4.956l3.692-3.755 3.693 3.755h.147z"></path>
              </svg>
            </Link>
          </div>
          <div> {renderThemeChanger()}</div>
        </div>
      </div>
    </>
  );
};

export default Header;
