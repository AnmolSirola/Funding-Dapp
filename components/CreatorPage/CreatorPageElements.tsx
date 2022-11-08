import styled from "styled-components";

export const CreatorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;

export const Container1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: auto;
  max-width: 80%;
`;


export const CreatorInfo = styled.div`
  background: #111111;
  display: flex;
  flex-direction: column;

  height: 350px;
  width: 500px;
  margin: 10px;
  padding: 25px;

  border-radius: 5px;
  border: 1px solid #3a3a3a;
  color: #fff;
`;

export const CreatorDetails = styled.div`
  padding: 10px;
`;

export const CreatorLinks = styled.div`
  padding: 10px;

`;

export const SponsorContainer = styled.div`
  color: white;
  background: #fff;
  justify-content: flex-start;
  transition: all .2s ease-in-out;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);


  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 350px;
  margin: 10px;
  padding: 25px;
  width: 300px;

  border-radius: 5px;
  border: 1px solid #3a3a3a;
  color: #fff;
`;

export const SponsorHeading = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px;
  margin-bottom: 30px;
  text-align: center;
  justify-content: center;
`;

export const GreenColor = styled.div`
  text-align: center;
  margin: auto 5px;
  color: #F68712;
`;

export const AmountSection = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  width: 100%;
`;

export const AmountName = styled.p`
  text-align: start;
  justify-content: start;
  align-items: start;

  width: 40%;
  margin: 8px 5px 5px;
`;

export const SponsorAmount = styled.input`
  color: white;
  background: #fff;
  justify-content: flex-start;
  transition: all .2s ease-in-out;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);

  width: 60%;
  padding: 5px;
  margin: 5px 0;
`;

export const YourName = styled.input`
  color: white;
  background: #fff;
  justify-content: flex-start;
  transition: all .2s ease-in-out;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);

  margin: 5px;
  height: 2.5em;
  width: 100%;
  padding: 10px;
`;

export const Message = styled.input`
  color: white;
  background: #fff;
  justify-content: flex-start;
  transition: all .2s ease-in-out;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);


  padding: 10px;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  text-align: start;
  margin: 5px;
  width: 100%;
`;

export const SponsorButton = styled.button`
  border-radius: 5px;
  background: #F68712;
  border: 1px solid #111111;
  color: #222222;
  width: 100%;
  margin: 10px 5px 5px 5px;
  font-size: 16px;
  padding: 10px;
  cursor: pointer;

  // on hover  scale 1.1
  :hover {
    scale: 1.02;
    cursor: pointer;
    transition: 0.2s ease-in;
    background: whitesmoke;
    color: #222222;
  }
`;

export const Container2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: start;
  width: auto;
  //max-width: 80%;
  height: auto;
  min-width: 840px;

`;
export const RecentSponsors = styled.div`
  color: white;
  background: #fff;
  justify-content: flex-start;
  transition: all .2s ease-in-out;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);


  display: flex;
  flex-direction: column;

  min-height: 350px;
  margin: 10px;
  padding: 25px;
  width: 100%;
  //.scroll {
  //  margin: 4px 4px;
  //  padding: 4px;
  //  background-color: green;
  //  width: 500px;
  //  max-height: 350px;
  //  overflow-x: hidden;
  //  overflow-y: auto;
  //  text-align: justify;
  //}
`;


export const SponsorsImage = styled.img`
  margin: 10px;
  color: gray;
  border-radius: 20px;
  border: 1px solid #3a3a3a;
  width: 40px;
  height: 40px;
`;

export const User = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  min-width: 200px;

`;

export const LatestSponsorHeading = styled.h4`
  margin-top: 0;
  display: flex;
  text-align: center;
  justify-content: center;
  min-width: 200px;

`;
export const SponsorsName = styled.div`
  margin: 10px;
  min-width: 100px;

`;
export const SponsorMessage = styled.div`
  margin: 20px 10px auto;
  min-width: 200px;

`;

export const SponsoredAmount = styled.div`
  margin: 20px 10px auto;
  min-width: 100px;
`;

export const SponsorsList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;

`;
export const SponsorsListHeadings = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const UsernameHeading = styled.div`
  text-align: center;
  min-width: 150px;
  margin: 0 0 0 0;
`;

export const SponsorFundsHeading = styled.div`
  margin: 0 0 0 45px;
  min-width: 150px;

`;

export const MessagesHeading = styled.div`
  margin: 0 0 0 50px;
  text-align: center;
  min-width: 200px;
`;
