import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/* Label dictionnary */
// import labelsFr from 'labels_fr.json';
/* Designs react components */
/* HOC Redux actions imports */
import actions from 'store/app/actions';

/**
 * @function SearchProjectsPagination Search projects pagination business react component
 * @param {*} props
 */
const SearchProjectsPagination = ({
  fontSize,
  currentPage,
  maxPage,
  nbItemsPerPage,
  loadPage,
}) => {
  return <></>;
};

/* HOC Redux container implementation */
/* PropTypes definition */
SearchProjectsPagination.propTypes = {
  /* State part*/
  fontSize: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
  maxPage: PropTypes.number.isRequired,
  nbItemsPerPage: PropTypes.number.isRequired,
  /* Dispatch part */
  loadPage: PropTypes.func.isRequired,
};

/**
 * @function mapStateToProps
 * @param {*} state Current redux state
 * @param {*} _ OwnProps (notuse)
 */
const mapStateToProps = (state, _) => ({
  fontSize: state.app.business.searchProjectsPagination.default.fontSize,
  currentPage: state.app.business.searchProjectsPagination.fields.currentPage,
  maxPage: state.app.business.searchProjectsPagination.fields.maxPage,
  nbItemsPerPage:
    state.app.business.searchProjectsPagination.fields.nbItemsPerPage,
});
/**
 * @function mapDispatchToProps
 * @param {*} dispatch
 * @param {*} _ OwnProps (notuse)
 */
const mapDispatchToProps = (dispatch, _) => ({
  loadPage: (targetPage) => {
    dispatch(
      actions.execute.business.searchProjectsPagination.loadPage({ targetPage })
    );
  },
});

/* Export business component */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchProjectsPagination);
