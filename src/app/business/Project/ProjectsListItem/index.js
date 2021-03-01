import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/* Label dictionnary */
// import labelsFr from 'labels_fr.json';

/* Designs react components */

/* HOC Redux actions imports */

/* Models imports */
import ProjectEntity from 'store/models/ProjectEntity';

/**
 * @function ProjectsListItem Project item business react component
 * @param {*} props
 */
const ProjectsListItem = ({ project, fontSize }) => {
  return <></>;
};

/* HOC Redux container implementation */
/* PropTypes definition */
ProjectsListItem.propTypes = {
  /* State part*/
  project: PropTypes.instanceOf(ProjectEntity).isRequired,
  fontSize: PropTypes.string.isRequired,
  /* Dispatch part */
  refreshStateByProjectId: PropTypes.func.isRequired,
};

/**
 * @function mapStateToProps
 * @param {*} state Current redux state
 * @param {*} _ OwnProps (notuse)
 */
const mapStateToProps = (state, _) => ({
  fontSize: state.app.display.fontSize,
});
/**
 * @function mapDispatchToProps
 * @param {*} dispatch
 * @param {*} _ OwnProps (notuse)
 */
const mapDispatchToProps = (dispatch, _) => ({});

/* Export business component */
export default connect(mapStateToProps, mapDispatchToProps)(ProjectsListItem);
