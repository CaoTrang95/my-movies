import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";
import Footer from "./Footer";
const PageWrapper = styled.div`
  flex: 1 1 auto;
  position: relative;
  top: 0;
  left: 0;
  height: auto;
  min-height: 100%;
  &::after {
    opacity: 0.3;
    width: 100vw;
    height: 100vh;
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    background-image: url("https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1_white-ff84c271cc8c93e00aa0264a425434c329089bdfc6a392987332b5f32903f75c.svg");
    background-position: 50% calc(50% - 20rem);
    background-repeat: no-repeat;
    background-size: 20%;
    z-index: -1;
  }
`;

export default function AppLayout() {
  return (
    <PageWrapper className="PageWrapper">
      <Header />
      <Outlet />
      <Footer />
    </PageWrapper>
  );
}
