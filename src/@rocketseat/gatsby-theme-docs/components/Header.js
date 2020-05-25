import React from 'react';
import PropTypes from 'prop-types';
import Headroom from 'react-headroom';
import styled from "styled-components";
import { GiHamburgerMenu } from 'react-icons/gi';
import { useStaticQuery, graphql } from 'gatsby';
import Nav from "../../../components/Nav";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  height: 60px;
  padding: 0 24px;
  background: ${props => props.theme.secondary};

  transition: transform 0.5s;

  transform: translate3d(
    ${({ isMenuOpen }) => (isMenuOpen ? '240px' : '0')},
    0,
    0
  );

  h2 {
    margin: 0;
    border: none;
    padding: 0;
    font-size: 18px;
    color: white;
  }

  button {
    border: none;
    background: transparent;
    cursor: pointer;
    margin-right: 16px;
  }

  @media (min-width: 780px) {
    display: none;
  }
`;

export default function Header({ handleMenuOpen, isMenuOpen }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteTitleShort
          }
        }
      }
    `,
  );

  const { siteTitleShort } = site.siteMetadata;

  return (
    <Headroom>
      {/* <Nav/> */}
      <Container className="nav" isMenuOpen={isMenuOpen}>
        <button
          aria-label="Open sidebar"
          type="button"
          onClick={handleMenuOpen}
        >
          <GiHamburgerMenu fill="white" size={23} />
        </button>
        <h2>Seções</h2>
      </Container>
    </Headroom>
  );
}

Header.propTypes = {
  handleMenuOpen: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};
