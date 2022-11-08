import styled from "styled-components";

export const FooterContainer = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  
  @media screen and (max-width: 768px) {
    padding: 2rem 0;
    height: 100%;
  }
`;