import React from 'react';
import {
    Header, Footer, Homepage,CreatorPage
} from "../components";

const Home = () => {
    return (
        <div style={{height: "100vh"}}>
            <Header/>
            {/*<CreatorPage />*/}
            <Homepage/>
            <Footer/>
        </div>
    )
}

export default Home