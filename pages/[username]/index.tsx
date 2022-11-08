import React from 'react';
import {useRouter} from 'next/router'
import {CreatorsData, SponsorsData} from "../../components/SponsorsData/SponsorsData";
import {
    AmountName, AmountSection, Container1, Container2, CreatorDetails, CreatorInfo,
    CreatorLinks, CreatorPageContainer, GreenColor, LatestSponsorHeading, Message,
    MessagesHeading, RecentSponsors, SponsorAmount, SponsorButton, SponsorContainer,
    SponsoredAmount, SponsorFundsHeading, SponsorHeading, SponsorMessage, SponsorsImage,
    SponsorsList, SponsorsListHeadings, SponsorsName, User, UsernameHeading, YourName
} from "../../components/CreatorPage/CreatorPageElements";
import {Dashboard, Header} from "../../components";
import Link from "next/link";

const Index = () => {
    const router = useRouter()
    const address = router.query

    const creator = CreatorsData.find(
        (cd) => (cd.address == address.username)
    )

    return (<>
            <Header creatorName={creator?.name} />
            {/*<Link href={"/Dashboard"}> Dashboard </Link>*/}
            <CreatorPageContainer>
                <Container1>
                    <CreatorInfo>
                        <CreatorDetails>
                            {creator?.description}
                        </CreatorDetails>

                        <CreatorLinks>
                            Links: Youtube Twitter
                        </CreatorLinks>

                    </CreatorInfo>
                    <SponsorContainer>
                        <SponsorHeading> Sponsor <GreenColor> {creator?.name}  </GreenColor> </SponsorHeading>
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
                            creator?.name === sponsor.sponsorTo ? (
                            <SponsorsList key={id}>
                            <User>
                            <SponsorsImage src={sponsor.profilePic}/>
                            <SponsorsName> {sponsor.name} </SponsorsName>
                            </User>
                            <SponsoredAmount> {sponsor.sponsor} </SponsoredAmount>
                            <SponsorMessage>{sponsor.message ? sponsor.message.slice(0, 50) : " "}</SponsorMessage>
                            </SponsorsList>) : (" ")))
                        }
                    </RecentSponsors>
                </Container2>
            </CreatorPageContainer>
    </>
    )
};

export default Index;