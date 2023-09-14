import styled from "styled-components";

const MovieCard = () => {
  return (
    <>
      <MovieCardDiv>
        <MovieImg
          src="https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
          alt="영화 포스터"
        />
        <MovieInfoDiv>
          <MovieTitleDiv>
            <p>스파이더맨</p>
          </MovieTitleDiv>
          <MovieDateDiv>
            <p>2023.09.18</p>
            <p>D-4</p>
          </MovieDateDiv>
        </MovieInfoDiv>
      </MovieCardDiv>
    </>
  );
};
export default MovieCard;

const MovieCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 170px;
  border: 1px solid black;
  border-radius: 3px;
  margin-top: 6%;
`;

const MovieImg = styled.img`
  display: flex;
  width: 100%;
  height: 110px;
  aspect-ratio: 3/4;
  object-fit: cover;
  object-position: center;
`;

const MovieInfoDiv = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  flex-direction: column;
  justify-contents: center;
`;

const MovieTitleDiv = styled.div`
  display: flex;
  width : 100%:
  height : 40%;
  align-items: center;
`;

const MovieDateDiv = styled.div`
  display: flex;
  width: 100%;
  height: 60%;
  font-size: 11px;
  align-items: center;
`;
