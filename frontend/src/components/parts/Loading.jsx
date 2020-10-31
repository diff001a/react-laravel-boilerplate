import React from "react";

import Loading from "components/libs/Loading/Index";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100vw;
  height: 100vh;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 999999999;
`;

const Home = (props) => {
  const { isLoading } = props;
  return (
    <div>
      {isLoading ? (
        <Wrapper className="loading-wrapper">
          <Loading />
        </Wrapper>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
