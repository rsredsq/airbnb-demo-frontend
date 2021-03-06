import React from 'react';
import styled from 'styled-components';
import { Row } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import NextPage from './NextPage';

import arrowRight from './assets/arrow-right.svg';

const Wrapper = styled.section`
  margin-bottom: 3rem;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 1.5rem;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  flex: 1 1 auto;
`;

const SeeAllLink = styled(Link)`
  text-decoration: none;
  color: #383838;
  white-space: nowrap;

  ::before {
    content: 'See All ';
  }

  ::after {
    display: inline-block;
    content: '';
    background-image: url(${arrowRight});
    background-size: 6px 10px;
    width: 6px;
    height: 10px;
  }
`;

const Slider = styled(Row)`
  flex-wrap: nowrap;
  justify-content: flex-end;
`;

export default ({ title, children }) => (
  <Wrapper>
    <Header>
      <Title>{title}</Title>
    </Header>
    <Slider>
      <Cards>{children}</Cards>
    </Slider>
  </Wrapper>
);

export const SectionMore = ({ title, children, to }) => (
  <Wrapper>
    <Header>
      <Title>{title}</Title>
      <SeeAllLink to={to} />
    </Header>
    <Slider>
      <Cards>{children}</Cards>
      <NextPage />
    </Slider>
  </Wrapper>
);
