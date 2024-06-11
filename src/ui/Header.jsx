import styled from "styled-components";
import { Link } from "react-router-dom";
import MyToolTip from "./Tooltip";
import { FaPlus } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6.4rem;
  width: 100%;
  background-color: rgba(3, 37, 65, 1);
  font-weight: 600;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  transition: top 0.2s linear;
  .main-nav {
    width: 90%;
    height: 100vh;
    padding: 2rem;
    z-index: 9999;
    background: rgba(3, 37, 65, 0.9);
    backdrop-filter: blur(2rem);
    position: absolute;
    top: 6.4rem;
    left: 0;
    transition: ease 0.3s;
    transform: translateX(-100%);
    color: #fff;
    ul {
      list-style-type: none;
      font-size: 1.8rem;
      display: flex;
      flex-direction: column;
      row-gap: 1.5rem;
      .sub-menu {
        margin-top: 1.6rem;
        font-size: 1.6rem;
        font-weight: 300;
        margin-bottom: 2rem;
      }
      .sub-menu-li {
        font-size: 1.6rem;
        font-weight: 300;
        margin-bottom: 1rem;
        color: rgba(255, 255, 255, 0.6);
      }
    }
  }
  .nav-open {
    transform: translateX(0);
  }
`;
export const NavWrapper = styled.div`
  width: 100%;
  height: 5rem;
  padding: 0 4rem;
  display: flex;
  justify-content: space-between;
  max-width: var(--maxPrimaryPageWidth);
  height: var(--height-nav-bar);
  padding: 0 var(--padding-left-right);
  gap: 2rem;
  .header-nav-bar-small {
    color: #fff;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    width: 33%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .icons {
    display: flex;
    gap: 1rem;
  }
`;
const NavItem = styled.div`
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  a {
    display: flex;
    align-items: center;
    width: 15.4rem;
    margin-right: 3rem;
    height: 2rem;
  }
  ul {
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    color: white;
    list-style-type: none;
  }
  li {
    cursor: pointer;
    margin-right: 2.4rem;
  }
  li a {
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    width: 100%;
    margin-right: 0;
  }
`;
const BoxVisible = styled.li`
  font-weight: 600;
  width: 2.8rem;
  height: 2.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.1rem solid #ffffff;
  border-radius: 0.3rem;
  padding: 0.3rem 0.5rem;
  font-size: 0.9rem;
  &:hover {
    background-color: white;
    color: black;
  }
`;
const tooltipMovies = [
  { link: "movie", content: "Popular" },
  { link: "/", content: "Now Playing" },
  { link: "/", content: "Upcoming" },
  { link: "/", content: "Top Rated" },
];
const tooltipTvShows = [
  { link: "/", content: "Popular" },
  { link: "/", content: "Airing Today" },
  { link: "/", content: "On TV" },
  { link: "/", content: "Top Rated" },
];
const tooltipPeople = [{ link: "/", content: "Popular People" }];
const tooltipMore = [
  { link: "/", content: "Discussions" },
  { link: "/", content: "Leaderboard" },
  { link: "/", content: "Support" },
  { link: "/", content: "API" },
];
export default function Header() {
  const [isShowNavBarPhone, setIsShowNavBarPhone] = useState(false);
  const [isShowMovies, setIsShowMovies] = useState(false);
  const [isShowTV, setIsShowTV] = useState(false);
  const [isShowPeople, setIsShowPeople] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", () => handleScroll());
    return () => {
      document.removeEventListener("scroll", () => handleScroll());
    };
  }, []);
  const [isNavbarDown, setIsNavbarDown] = useState(true);
  let lastScrollTop = 0;
  var delta = 10;
  var navbarHeight = 64;
  const handleScroll = () => {
    var scrollTop = window.scrollY;
    // Make sure scroll more than delta
    if (Math.abs(lastScrollTop - scrollTop) <= delta) {
      return;
    } else {
      if (scrollTop > lastScrollTop && scrollTop > navbarHeight) {
        // Scroll Down: hidden navbar
        setIsNavbarDown(false);
      } else {
        // Scroll Up: show navbar
        if (scrollTop + window.innerHeight < document.body.scrollHeight) {
          setIsNavbarDown(true);
        }
      }
    }
    lastScrollTop = scrollTop;
  };
  return (
    <>
      <StyledHeader className={`StyledHeader ${isNavbarDown ? "" : "nav-up"}`}>
        <NavWrapper className="NavWrapper">
          <div className="header-nav-bar-small">
            <IoMenu
              size={"2rem"}
              color="#fff"
              onClick={() => {
                setIsShowNavBarPhone((prev) => !prev);
              }}
            />
            <div className="logo">
              <Link to="/">
                <img
                  alt="logo"
                  src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                ></img>
              </Link>
            </div>
            <div className="icons">
              <FaRegUser size={"2rem"} />
              <IoSearchSharp color="#0aacf1" size={"2rem"} />
            </div>
          </div>
          <NavItem className="NavItem">
            <Link to="/">
              <img
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                alt="logo"
              ></img>
            </Link>
            <ul>
              <MyToolTip name="Movies" list={tooltipMovies} />
              <MyToolTip name="TV Shows" list={tooltipTvShows} />
              <MyToolTip name="People" list={tooltipPeople} />
              <MyToolTip name="More" list={tooltipMore} />
            </ul>
          </NavItem>
          <NavItem className="NavItem">
            <ul>
              <li>
                <FaPlus />
              </li>
              <BoxVisible className="BoxVisible">EN</BoxVisible>
              <li>
                <Link>Login</Link>
              </li>
              <li>
                <Link>Join TMDB</Link>
              </li>
              <li>
                <IoSearchSharp color="#0aacf1" size={24} />
              </li>
            </ul>
          </NavItem>
        </NavWrapper>
        <div className={`main-nav ${isShowNavBarPhone ? "nav-open" : ""}`}>
          <ul>
            <li onClick={() => setIsShowMovies((prev) => !prev)}>
              Movies
              {isShowMovies && (
                <ul className="sub-menu">
                  {tooltipMovies.map((item) => (
                    <li key={item.content}>{item.content}</li>
                  ))}
                </ul>
              )}
            </li>
            <li onClick={() => setIsShowTV((prev) => !prev)}>
              TV Shows
              {isShowTV && (
                <ul className="sub-menu">
                  {tooltipTvShows.map((item) => (
                    <li key={item.content}>{item.content}</li>
                  ))}
                </ul>
              )}
            </li>
            <li onClick={() => setIsShowPeople((prev) => !prev)}>
              People
              {isShowPeople && (
                <ul className="sub-menu">
                  {tooltipPeople.map((item) => (
                    <li key={item.content}>{item.content}</li>
                  ))}
                </ul>
              )}
            </li>
            <ul className="sub-menu-li">
              {tooltipMore.map((item) => (
                <li key={item.content}>{item.content}</li>
              ))}
            </ul>
          </ul>
        </div>
      </StyledHeader>
    </>
  );
}
