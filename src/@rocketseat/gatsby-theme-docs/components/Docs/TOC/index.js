import React from 'react';
import PropTypes from 'prop-types';
import { animateScroll as scroll } from "react-scroll";
import slug from '@rocketseat/gatsby-theme-docs/src/util/slug';

import { Container } from './styles';
import { useHash } from 'react-use';
import decode_utf8 from '../../../../../utils/decode_utf8'

export default function TableOfContents({ headings }) {
  const [hash, setHash] = useHash();
  React.useEffect(()=>{
    setTimeout(()=>{
      handleGoTo(decodeURI(hash));

    }, 80)
    
  }, [hash])
  const handleGoTo = (slug) => {
    if(!slug) return;
    if(typeof window === 'undefined') return;
    const elementToGo = document.querySelector(slug);
    const y = elementToGo.getBoundingClientRect().y;
    const nav = document.querySelector(`div.nav`);
    const navSize = nav.getBoundingClientRect().height;
    window.scrollBy(0, y - navSize - 20)
    // scroll.scrollMore(y - navSize - 20);
  }
  if (headings && headings.length !== 0) {
    return (
      <Container>
        <h2>Table of Contents</h2>
        <nav>
          <ul>
            {headings
              .filter(heading => heading.depth === 2)
              .map(heading => (
                <li key={heading.value}>
                  <p onClick={()=>{
                    setHash(slug(heading.value))
                    }} >{heading.value}</p>
                </li>
              ))}
          </ul>
        </nav>
      </Container>
    );
  }

  return null;
}

TableOfContents.propTypes = {
  headings: PropTypes.array,
};

TableOfContents.defaultProps = {
  headings: null,
};
