import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Container, Row, Col } from 'react-bootstrap';
import MakeBidForm from '../components/forms/make-a-bid';

class TotaCreatorsCollective extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        document.title = "Tota Creators Collective | PlanetTota";
    }
    render() {
        return (
            <>
                <Header />
                <main className='tota_creators_page top_padd'>
                    <section className='tota_creators_sec'>
                        <Container>
                            <Row>
                                <Col lg={12}>
                                    <h2 className="col_hd text-center">
                                        Tota Creator's Collective
                                    </h2>
                                    <p className="col_para">
                                        About Creator's Collective, the reason, purpose and how it works. The unique element will be that we'll offer them the option to pick their royalty within a certain range
                                        <br /><br />
                                        Our royalty range will be highger than average industry standard
                                    </p>
                                    <MakeBidForm />
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </main>
                <Footer />
            </>
        );
    }
}

export default TotaCreatorsCollective;