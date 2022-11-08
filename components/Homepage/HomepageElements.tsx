import styled from "styled-components";

export const HomepageContainer = styled.div`
    // border : 2px solid white;
    padding : 1rem;
`;
export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const ImageBg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: #010606;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #010606;
`;
export const CreatorContainer = styled.div`
    height : 400px;
    max-width : 70rem;
    margin : 0 auto;
`; 

export const Creator = styled.div`
    max-height : 150px;
    margin : 1rem 0;
    padding : 1rem;
    background-color : rgb(38, 38, 38);
    border-radius: 0.3rem;

`;

export const CreatorBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CreatorNameDP = styled.div`
    display: inline-flex;
`;

export const CreatorName = styled.h1`
    font-size: 1.34rem;
    display : inline-block;
    margin : 0.3rem 0;
`;

export const CreatorDP = styled.img`
    margin: 0 0.5rem;
    width : 40px;
    border-radius: 50%;
`;

export const CreatorAddress = styled.span`
    margin : 0 1rem;
`;

export const CreatorDescription = styled.p`
    margin : 0.3rem 0;
    font-size: 0.9rem;
`;

