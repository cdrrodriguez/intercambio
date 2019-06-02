import React, { Component } from 'react';
import { Container, Header, Button, Icon, Grid, Segment, Image } from 'semantic-ui-react';
import { VerticleButton as ScrollUpButton } from 'react-scroll-up-button';
import { MenuBar, Footer } from '../../components';
import './Home.css';
import img1 from '../../images/ico-icon.png';
import img2 from '../../images/walletr-icon.png';
import img3 from '../../images/crypto-icon.png';
import img4 from '../../images/more-icon.png';

class Home extends Component {
  render() {
    return (
      <div className="Backg">

        <Container textAlign="center">

          {/*Menú de página*/}
          <MenuBar />

          <div style={{ marginTop: '50px' }}>
            <Container textAlign="justified" fluid >
              <Header color="teal" size="huge">The future with Blockchain</Header>
              <p className="pepe">
                We use blockchain technology to make more effience the critical bussines s process of organizacions.</p>
            
              <Button color="teal" size="huge">Read more  <Icon name='arrow alternate circle right' /></Button>
            </Container>
          </div>

          <div style={{ marginTop: '80px' }}>
            <Container textAlign="justified" fluid >
              <Grid stackable>
                <Grid.Row columns={4}>
                  <Grid.Column>
                    <Segment size="big"><Image verticalAlign="middle" src={img1} />
                      <Header as='h4'>Blockchain Consulting</Header>
                            <p>Consulting , Architecture and detail  Analisys of bussines cased. It is very important to undestand the pros and cons of blockchain and all its implementaions, public and private </p>
            
                      <p><b>READ MORE ></b></p>
                    </Segment>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment size="big"><Image verticalAlign="middle" src={img2} />
                      <Header as='h4'>Smart Contract Development</Header>
                      <p> We create smart contracts with our development team</p>
                      <p><b>READ MORE ></b></p>
                    </Segment>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment size="big"><Image verticalAlign="middle" src={img3} />
                      <Header as='h4'>dApps Development</Header>
                      <p> The new way of thinking aplications</p>
                      <p><b>READ MORE ></b></p>
                    </Segment>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment size="big" inverted color="blue"><Image verticalAlign="middle" src={img4} />
                      <Header as='h4'>We've Much More to Offer</Header>
                      <p> Apart from these, we offer much more when it comes to blockchain services</p>
                      <p><b>READ MORE ></b></p>
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </div>
          {/*Botón de scroll up*/}
          <ScrollUpButton EasingType="linear" ShowAtPosition={20} />

        </Container>

        {/*Pié de página*/}
        <Footer />

      </div>
    );
  }
}

export default Home;
