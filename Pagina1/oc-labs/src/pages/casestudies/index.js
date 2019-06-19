import React, { Component } from 'react';
import { Container, Header, Grid, Segment, Image } from 'semantic-ui-react';
import { VerticleButton as ScrollUpButton } from 'react-scroll-up-button';
import { MenuBar, Footer } from '../../components';
import '../../pages/home/Home.css';
import img1 from '../../images/ico-icon.png';
import img2 from '../../images/walletr-icon.png';
import img3 from '../../images/crypto-icon.png';
import img4 from '../../images/more-icon.png';
import img5 from '../../images/brainstorming.png';
import img6 from '../../images/technologies-img1.png';
import img7 from '../../images/languages-images1.png';
import img8 from '../../images/framework-and-protocols-image.png';
import img9 from '../../images/finanzas-menos-es-mas-ideas-890x500_c.jpg';

import img11 from '../../images/Trazabilidad-1024x452.jpg';
import img12 from '../../images/identidad digital.jpg';
import img13 from '../../images/healthcare.jpg';
import img14 from '../../images/Supply-chain-demand-chain.jpg';

 

class Home extends Component {
  render() {
    return (
      <div className="Backg">

        <Container>

          {/*Menú de página*/}
          <MenuBar />

 
 
          <Container>
          <p className="ppppp">
                Case Studies</p>

          </Container>
 

          <div style={  { marginTop: '220px'  }}>
          <Container>
          <Grid stackable>
 
                <Grid.Row columns={2}>
                    <Grid.Column>
                         <Image  src={img9} />      
                  </Grid.Column>
                  <Grid.Column>
                    <Segment>
                      <Header textAlign="center">Focus on Creativity</Header>      
                       <p> Helping to materialize our customer's 
                           ideas using blockchain technologies 
                           we help them to get their bussiness 
                           more efficients and cost less. 
                           Througt an agile process which focuses on their ideas, 
                           we apply new blockchain technologies to solve problems.                          
                       </p>

                    </Segment> 
                  </Grid.Column>
                </Grid.Row>
             
  

                <Grid.Row columns={2}>
                    <Grid.Column>
                         <Image  src={img11} />      
                  </Grid.Column>
                  <Grid.Column>
                    <Segment>
                      <Header textAlign="center">Focus on Creativity</Header>      
                       <p> Helping to materialize our customer's 
                           ideas using blockchain technologies 
                           we help them to get their bussiness 
                           more efficients and cost less. 
                           Througt an agile process which focuses on their ideas, 
                           we apply new blockchain technologies to solve problems.                          
                       </p>

                    </Segment> 
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={2}>
                    <Grid.Column>
                         <Image  src={img12} />      
                  </Grid.Column>
                  <Grid.Column>
                    <Segment>
                      <Header textAlign="center">Focus on Creativity</Header>      
                       <p> Helping to materialize our customer's 
                           ideas using blockchain technologies 
                           we help them to get their bussiness 
                           more efficients and cost less. 
                           Througt an agile process which focuses on their ideas, 
                           we apply new blockchain technologies to solve problems.                          
                       </p>

                    </Segment> 
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={2}>
                    <Grid.Column>
                         <Image  src={img13} />      
                  </Grid.Column>
                  <Grid.Column>
                    <Segment>
                      <Header textAlign="center">Focus on Creativity</Header>      
                       <p> Helping to materialize our customer's 
                           ideas using blockchain technologies 
                           we help them to get their bussiness 
                           more efficients and cost less. 
                           Througt an agile process which focuses on their ideas, 
                           we apply new blockchain technologies to solve problems.                          
                       </p>

                    </Segment> 
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={2}>
                    <Grid.Column>
                         <Image  src={img14} />      
                  </Grid.Column>
                  <Grid.Column>
                    <Segment>
                      <Header textAlign="center">Focus on Creativity</Header>      
                       <p> Helping to materialize our customer's 
                           ideas using blockchain technologies 
                           we help them to get their bussiness 
                           more efficients and cost less. 
                           Througt an agile process which focuses on their ideas, 
                           we apply new blockchain technologies to solve problems.                          
                       </p>

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
