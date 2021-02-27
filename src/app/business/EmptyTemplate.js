/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/* Label dictionnary */
import labelsFr from 'labels_fr.json';

/* Externals react components */
/* Business react components */
/* Designs react components */
import { Button } from '../../designs';

/* HOC Redux actions imports */
import actions from 'store/app/actions';

/**
 * @function EmptyTemplate Empty Template business react component
 * @param {*} props
 */
const EmptyTemplate = (props) => {
  return (<></>  );
};

/* HOC Redux container implementation */
/* PropTypes definition */
EmptyTemplate.propTypes = {
  /* State part*/
  /* Dispatch part */
};

/**
 * @function mapStateToProps
 * @param {*} state Current redux state
 * @param {*} _ OwnProps (notuse)
 */
const mapStateToProps = (state, _) => ({});
/**
 * @function mapDispatchToProps
 * @param {*} dispatch
 * @param {*} _ OwnProps (notuse)
 */
const mapDispatchToProps = (dispatch, _) => ({});

/* Export business component */
export default connect(mapStateToProps, mapDispatchToProps)(EmptyTemplate);
