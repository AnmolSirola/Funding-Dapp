import React from 'react';
import {
    DashboardContainer
} from "./DashboardElements";
import {SponsorsData} from "../SponsorsData/SponsorsData";
import {
    RecentSponsors, SponsoredAmount, SponsorsImage,
    SponsorsList, SponsorsName, User
} from "../CreatorPage/CreatorPageElements";


const Dashboard = () => {
    return (
        <DashboardContainer>
            <h1>Dashboard</h1>
            <RecentSponsors>
                {SponsorsData.map((sponsor, id) => (
                    <SponsorsList key={id}>
                        <User>
                            <SponsorsImage src={sponsor.profilePic}/>
                            <SponsorsName> {sponsor.name} </SponsorsName>
                        </User>
                        <SponsoredAmount> {sponsor.sponsor} </SponsoredAmount>
                    </SponsorsList>
                ))}
            </RecentSponsors>
        </DashboardContainer>
    );
};

export default Dashboard;