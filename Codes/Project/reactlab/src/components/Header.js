import React, { useEffect, useRef,useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    console.log(anchor)
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const headerRef = useRef(null);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition > prevScrollPosition) {
        setIsScrollingUp(false);
      } else {
        setIsScrollingUp(true);
      }

      setPrevScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPosition]);

  const translateY = isScrollingUp ? "0" : "-200px";
  return (
    <Box
    ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      zIndex={1}
      transform={`translateY(${translateY})`}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
         
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack  gap= {6}>
              <a href={socials[0].url}>
                <FontAwesomeIcon icon={socials[0].icon} size="2x" />
              </a>
                <a href={socials[1].url}>
                <FontAwesomeIcon icon={socials[1].icon} size="2x" />
              </a>
                <a href={socials[2].url}>
                <FontAwesomeIcon icon={socials[2].icon} size="2x" />
              </a>
                 <a href={socials[3].url}>
                <FontAwesomeIcon icon={socials[3].icon} size="2x" />
              </a>
                 <a href={socials[4].url}>
                <FontAwesomeIcon icon={socials[4].icon} size="2x" />
              </a>
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a  onClick={handleClick("projects")} href="/#projects">
                Projects
              </a>
              <a  onClick={handleClick("contactme")} href="/#contact-me" >
                Contact Me
              </a>

            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
