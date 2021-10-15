import React from "react";

import "./footer.css";
import logo from "../images/logo.png";

import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  HeadingNewsLetter,
  Column2,
  Button,
} from "./FooterStyles";
import { ButtonGroup } from "@mui/material";

export default function Footer() {
  return (
    <Box>
      {/* <img width="350px" height="auto" class="small-logo-img" src="./images/smallLogo.png" alt="small-logo"> */}
      <div>
        {" "}
        <img
          width="200px"
          height="auto"
          class="small-logo"
          className="small-logo-img"
          src={logo}
          alt="small-logo"
        />
      </div>
      <h1
        style={{ color: "green", textAlign: "center", marginTop: "-50px" }}
      ></h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Writing</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
            <FooterLink href="#">Teaching</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Uttar Pradesh</FooterLink>
            <FooterLink href="#">Ahemdabad</FooterLink>
            <FooterLink href="#">Indore</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f footer">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram footer">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter footer">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube footer">
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">
              <i class="far fa-envelope">
                <span style={{ marginLeft: "10px" }}>
                  Contact@gokhshtein.com
                </span>
              </i>
            </FooterLink>
          </Column>
          <Column>
            <Heading>Address</Heading>
            <FooterLink href="#">
              <i class="fas fa-map-marker-alt">
                <span style={{ marginLeft: "10px" }}>
                  99 Wall St. New York, NY 10005, USA
                </span>
              </i>
            </FooterLink>
          </Column>
          <Column>
            <Heading>SUBSCRIBE</Heading>
            <FooterLink href="#">Click Here To Subscribe</FooterLink>
          </Column>
        </Row>
      </Container>
      <div className="signUpContainer">
        <Column>
          <Heading></Heading>
        </Column>
      </div>
    </Box>
  );
}
