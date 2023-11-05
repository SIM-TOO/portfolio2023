import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Skill from "../components/Skill";
import Port from "../components/Port";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Skip from "../components/Skip";
import Main from "../components/Main";

// 기능
import CursorFollower from '../components/animations/CursorFollower';
import WaveEffect from '../components/animations/WaveEffect';

const HomePage = () => {
    return (
        <>
            {/* 마우스 효과 */}
            <CursorFollower />
            <WaveEffect />

            <Skip />
            <Header />
            <Main>
                <Intro />
                <Port />
                <Skill />
                <Contact />
            </Main>
            <Footer />
        </>
    );
};

export default HomePage;