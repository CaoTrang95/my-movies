import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  height: 64px;
  background-color: rgba(3, 37, 65, 1);
`;
const NavLeft = styled.div`
  display: flex;
  a {
    display: block;
    width: 154px;
    height: 20px;
    margin-right: 16px;
  }
  ul {
    display: flex;
    color: white;
    gap: 16px;

    list-style-type: none;
  }
`;
const NavRight = styled.div``;

export default function Header() {
  return (
    <>
      <StyledHeader>
        <NavLeft>
          <a href="/">
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt="logo"
            ></img>
          </a>
          <ul>
            <li>Movies</li>
            <li>TV Shows</li>
            <li>People</li>
            <li>More</li>
          </ul>
        </NavLeft>
        <NavRight></NavRight>
      </StyledHeader>
    </>
  );
}
