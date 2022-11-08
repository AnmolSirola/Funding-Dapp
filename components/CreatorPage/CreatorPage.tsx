import React from 'react';
import {
    AmountName,
    AmountSection,
    Container1, Container2, CreatorDetails,
    CreatorInfo, CreatorLinks, GreenColor,
    CreatorPageContainer,
    Message, RecentSponsors,
    SponsorAmount,
    SponsorButton,
    SponsorContainer, SponsoredAmount,
    SponsorHeading, SponsorsImage,
    SponsorsList, SponsorsName, User,
    YourName, LatestSponsorHeading, SponsorMessage,
    UsernameHeading,
    SponsorFundsHeading,
    MessagesHeading, SponsorsListHeadings,
} from "./CreatorPageElements";
import {SponsorsData} from "../SponsorsData/SponsorsData";

const CreatorPage = () => {
    return (<CreatorPageContainer>
        <Container1>
            <CreatorInfo>
                <CreatorDetails>
                    It would mean the world to me if I had 10 sponsors. 💖. <br/> <br/>
                    We are doing this community work for free. <br/> <br/>
                    Our websites and bots are running on the server, and sponsors will help in recovering the costs of
                    the servers. <br/> <br/>
                    Community website: link <br/> <br/>
                    Thank you <br/> <br/>
                </CreatorDetails>

                <CreatorLinks>
                    Links: Youtube Twitter
                </CreatorLinks>

            </CreatorInfo>
            <SponsorContainer>
                <SponsorHeading> Sponsor <GreenColor> Thecyberworld </GreenColor> </SponsorHeading>
                <AmountSection>
                    <AmountName> Eth Amount </AmountName>
                    <SponsorAmount placeholder={"0.05"}/>
                </AmountSection>
                <YourName placeholder={"Name or Username"}/>
                <Message placeholder={"Message (optional)"}/>
                <SponsorButton> Sponsor </SponsorButton>
            </SponsorContainer>

        </Container1>
        <Container2>
            <RecentSponsors>
                <LatestSponsorHeading> Latest Sponsors </LatestSponsorHeading>
                <SponsorsListHeadings>
                    <UsernameHeading> Users </UsernameHeading>
                    <SponsorFundsHeading> Sponsors </SponsorFundsHeading>
                    <MessagesHeading> Messages </MessagesHeading>
                </SponsorsListHeadings>

                {SponsorsData.slice(0, 5).map((sponsor, id) => (
                    <SponsorsList key={id}>
                        <User>
                            <SponsorsImage src={sponsor.profilePic}/>
                            <SponsorsName> {sponsor.name} </SponsorsName>
                        </User>
                        <SponsoredAmount> {sponsor.sponsor} </SponsoredAmount>
                        <SponsorMessage>{sponsor.message ? sponsor.message.slice(0, 50) : " "}</SponsorMessage>
                    </SponsorsList>
                ))}
            </RecentSponsors>
        </Container2>
    </CreatorPageContainer>);
};

export default CreatorPage;
