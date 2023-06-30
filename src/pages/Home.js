import React from "react";

import { Button, Card, Col, Container, Navbar } from "react-bootstrap";
import {AiOutlinePlayCircle} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <Navbar style={{ backgroundColor: "grey" }} expand="lg">
        <Container>
          <h1 style={{fontSize: '5rem'}}>The Generics</h1>
          <Button style={{fontSize: '2rem'}}>Get Our Latest Album</Button>
          <AiOutlinePlayCircle style={{fontSize: '4rem'}} />
        </Container>
      </Navbar>
      <Card className="text-center">
        <Card.Title style={{ fontSize: "2rem", marginBottom: "3rem" }}>
          TOURS
        </Card.Title>
        <Col>
          <div className="d-flex justify-content-between">
            <hr />
            <Card.Text>July 16</Card.Text>
            <Card.Text>DETROIT, MI</Card.Text>
            <Card.Text>DTE ENERGY MUSIC THEATRE</Card.Text>
            <Button
              style={{
                backgroundColor: "rgb(26, 196, 238)",
                marginRight: "1.1rem",
              }}
            >
              BUY TICKETS
            </Button>
            <hr />
          </div>
          <hr />

          <div className="d-flex justify-content-between">
            <hr />
            <Card.Text>July 19</Card.Text>
            <Card.Text>TORONTO,ON</Card.Text>
            <Card.Text>BUDWEISER STAGE</Card.Text>
            <Button style={{ backgroundColor: "rgb(26, 196, 238)" }}>
              BUY TICKETS
            </Button>
            <hr />
          </div>
          <hr />

          <div className="d-flex justify-content-between">
            <hr />
            <Card.Text>July 22</Card.Text>
            <Card.Text>BRISTOW, VA</Card.Text>
            <Card.Text>JIGGY LUBE LIVE</Card.Text>
            <Button style={{ backgroundColor: "rgb(26, 196, 238)" }}>
              BUY TICKETS
            </Button>
            <hr />
          </div>
          <hr />

          <div className="d-flex justify-content-between">
            <hr />
            <Card.Text>July 29</Card.Text>
            <Card.Text>PHOENIX, AZ</Card.Text>
            <Card.Text>AK-CHIN PAVILION</Card.Text>
            <Button style={{ backgroundColor: "rgb(26, 196, 238)" }}>
              BUY TICKETS
            </Button>
            <hr />
          </div>
          <hr />

          <div className="d-flex justify-content-between">
            <hr />
            <Card.Text>Aug 2</Card.Text>
            <Card.Text>LAS VEGAS, NV</Card.Text>
            <Card.Text>T-MOBILE ARENA</Card.Text>
            <Button style={{ backgroundColor: "rgb(26, 196, 238)" }}>
              BUY TICKETS
            </Button>
            <hr />
          </div>
          <hr />

          <div className="d-flex justify-content-between">
            <hr />
            <Card.Text>Aug 7</Card.Text>
            <Card.Text>CONCORD, CA</Card.Text>
            <Card.Text>CONCORD PAVILION</Card.Text>
            <Button style={{ backgroundColor: "rgb(26, 196, 238)" }}>
              BUY TICKETS
            </Button>
            <hr />
          </div>
        </Col>
      </Card>
    </>
  );
};
export default Home;
