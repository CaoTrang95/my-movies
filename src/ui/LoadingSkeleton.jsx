import styled from "styled-components";

const StyledLoadingSkeleton = styled.div`
  @keyframes placeholderLoading {
    0%,
    100% {
      opacity: 0.7;
    }
    50% {
      opacity: 0.35;
    }
  }
  opacity: 0.7;
  animation-duration: 2s;
  animation-name: placeholderLoading;
  animation-iteration-count: infinite;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #dbdbdb;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 50%;
  background-image: url("https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg");
`;
export default function LoadingSkeleton({ width, height, className }) {
  const skeletonStyle = { width: width || "100%", height: height || "100%" };
  return (
    <StyledLoadingSkeleton
      className={`${className}`}
      style={skeletonStyle}
    ></StyledLoadingSkeleton>
  );
}
