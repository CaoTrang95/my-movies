import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";
const PageWrapper = styled.div`
  flex: 1 1 auto;
  position: relative;
  top: 0;
  left: 0;
  height: auto;
  min-height: 100%;
`;

export default function AppLayout() {
  return (
    <PageWrapper className="PageWrapper">
      <Header />
      <Outlet />
    </PageWrapper>
  );
}
