import styled from "styled-components";
import Head from "next/head";

const Wrapper = styled.div`
  background: rgb(249, 198, 172);
  height: 100%;
`;

function Home() {
  return (
    <Wrapper>
      Welcome to Next.js!
    </Wrapper>
  );
}

export default Home;
