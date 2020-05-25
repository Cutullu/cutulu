/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import slugify from "@rocketseat/gatsby-theme-docs/src/util/slug";

import { Container } from "./styles";
import useHash from "../../../../../utils/useHash";

const handleGoTo = slug => {
  if (!slug) return;
  if (typeof window === "undefined") return;
  const elementToGo = document.querySelector(slug);
  const { y } = elementToGo.getBoundingClientRect();
  const nav = document.querySelector(`div.nav`);
  const navSize = nav.getBoundingClientRect().height;
  window.scrollBy(0, y - navSize - 20);
  // scroll.scrollMore(y - navSize - 20);
};
export default function TableOfContents({ headings }) {
  const [hash] = useHash();
  React.useEffect(() => {
    setTimeout(() => {
      handleGoTo(decodeURI(hash));
    }, 80);
  }, [hash]);
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
                  <a href={`#${slugify(heading.value)}`}>{heading.value}</a>
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
  headings: PropTypes.array
};

TableOfContents.defaultProps = {
  headings: null
};
