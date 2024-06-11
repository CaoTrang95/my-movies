import styled from "styled-components";
const SpinnerContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @keyframes rotate {
    to {
      transform: rotate(1turn);
    }
  }
  .spinner {
    border-radius: 50%;
    background: conic-gradient(#0000 10%, #d6dee0);
    -webkit-mask: radial-gradient(
      farthest-side,
      #0000 calc(100% - 0.5rem),
      #000 0
    );
    animation: rotate 1.5s infinite linear;
  }
`;
export default function Spinner({ size }) {
  const spinnerStyle = { width: size || "4.8rem", height: size || "4.8rem" };
  return (
    <SpinnerContainer>
      <div className="spinner" style={spinnerStyle}></div>
    </SpinnerContainer>
  );
}
