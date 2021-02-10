import React from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';

export const NavCard = ({ children, md, lg, showBranding }) => {
  const classes = classNames(`bx--col-md-${md} bx--col-lg-${lg}`, {
    'navigation-card--branded': showBranding,
  });
  return <div className={classes}>{children}</div>;
};

NavCard.propTypes = {
  children: PropTypes.node.isRequired,
  md: PropTypes.number,
  lg: PropTypes.number,
  showBranding: PropTypes.bool,
};

NavCard.defaultProps = {
  md: 4,
  lg: 4,
  showBranding: false,
};

export const NavCards = ({ children }) => {
  return (
    <div className="bx--grid bx--grid--condensed navigation-card-group">
      <div className="bx--row">{children}</div>
    </div>
  );
};

NavCards.propTypes = {
  children: PropTypes.node.isRequired,
};
