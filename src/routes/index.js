import React,{ Fragment } from 'react';
import { Route, Routes} from 'react-router-dom';
import {
    Home,
    ExploreSynergies,
    TotaCreatorsCollective,
    AboutUs,
    BecomeCitizen,
    LilTotaVerse,
    MeetFirsts,
    SeriesToFollow,
    SepMovie,
    PlanetTotaMetaVerse,
    PieceOfPlanetTota,
    NftComingSoonPage} from '../views';
    

function MyRoutes() {
    return ( 
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Fragment>
                <Route exact path='/become-a-citizen' element={<BecomeCitizen/>} />
                <Route exact path='/lil-totaverse' element={<LilTotaVerse/>} />
                <Route exact path='/meet-the-firsts' element={<MeetFirsts/>} />
                <Fragment>                    
                    <Route exact path='/meet-the-firsts/nft-minting-mint-coming-soon' element={<NftComingSoonPage/>} />
                </Fragment>
                <Route exact path='/movies-series-to-follow' element={<SeriesToFollow/>} />
                <Route exact path='/sep-movie-in-production' element={<SepMovie/>} />
                <Route exact path='/planet-tota-metaverse' element={<PlanetTotaMetaVerse/>} />
                <Route exact path='/piece-of-planet-tota' element={<PieceOfPlanetTota />} />
            </Fragment>
            <Route exact path='/explore-synergies' element={<ExploreSynergies />} />
            <Route exact path='/tota-creators-collective' element={<TotaCreatorsCollective />} />
            <Route exact path='/about-us' element={<AboutUs />} />
        </Routes>
     );
}

export default MyRoutes;