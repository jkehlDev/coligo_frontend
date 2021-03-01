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
 * @function ProjectEdit Project edition business react component
 * @param {*} props
 */
const ProjectEdit = ({
  fontSize,
}) => {
  return <></>;
};

/* HOC Redux container implementation */
/* PropTypes definition */
ProjectEdit.propTypes = {
  /* State part*/
  project: PropTypes.instanceOf(ProjectEntity),
  fontSize: PropTypes.string.isRequired,
  /* Dispatch part */
};

/* PropTypes default value */
ProjectEdit.defaultProps = {
  project: new ProjectEntity(),
};

/**
 * @function mapStateToProps
 * @param {*} state Current redux state
 * @param {*} _ OwnProps (notuse)
 */
const mapStateToProps = (state, _) => ({
  project: state.project.business.projectEdit.data.project,
  fontSize: state.app.display.fontSize,
});
/**
 * @function mapDispatchToProps
 * @param {*} dispatch
 * @param {*} _ OwnProps (notuse)
 */
const mapDispatchToProps = (dispatch, _) => ({});

/* Export business component */
export default connect(mapStateToProps, mapDispatchToProps)(ProjectEdit);
