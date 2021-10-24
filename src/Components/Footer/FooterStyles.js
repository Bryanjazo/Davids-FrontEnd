import styled from "styled-components";

export const Box = styled.div`
  padding: 80px 90px;
  background: #2596be;
  bottom: 0;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 90px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 18px;
  font-size: 12px;
  text-decoration: none;

  &:hover {
    color: #4200ff;
    transition: 200ms ease-in;
  }
  @media (max-width: 1000px) {
    font-size: 20px;
  }
`;

export const Heading = styled.p`
  font-size: 16px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;

  @media (max-width: 1000px) {
    padding-top: 10px;
    font-size: 28px;
  }
`;

export const HeadingNewsLetter = styled.p`
  font-size: 12px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;

export const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  margin-right: 60px;
  margin-bottom: 40px;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-content: right;
  margin-right: 60px;
  margin-bottom: 40px;
`;
