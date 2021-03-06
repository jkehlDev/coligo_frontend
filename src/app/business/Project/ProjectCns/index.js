import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/* Label dictionnary */
// import labelsFr from 'labels_fr.json';

/* Designs react components */

/* HOC Redux actions imports */
import actions from 'store/project/actions';

/* Models imports */
import ProjectEntity from 'store/models/ProjectEntity';

/**
 * @function ProjectCns Project Consultation business react component
 * @param {*} props
 */
const ProjectCns = ({ project, fontSize, refreshStateByProjectId }) => {
  useEffect(() => refreshStateByProjectId(project.id), [
    refreshStateByProjectId,
    project,
  ]);
  return <></>;
};

/* HOC Redux container implementation */
/* PropTypes definition */
ProjectCns.propTypes = {
  /* State part*/
  project: PropTypes.instanceOf(ProjectEntity),
  fontSize: PropTypes.string.isRequired,
  /* Dispatch part */
  refreshStateByProjectId: PropTypes.func.isRequired,
};

/* PropTypes default value */
ProjectCns.defaultProps = {
  project: new ProjectEntity(),
};

/**
 * @function mapStateToProps
 * @param {*} state Current redux state
 * @param {*} _ OwnProps (notuse)
 */
const mapStateToProps = (state, ownProps) => ({
  projectId: ownProps.projectId,
  project: state.project.business.projectCns.data.project,
  fontSize: state.app.display.fontSize,
});
/**
 * @function mapDispatchToProps
 * @param {*} dispatch
 * @param {*} _ OwnProps (notuse)
 */
const mapDispatchToProps = (dispatch, _) => ({
  refreshStateByProjectId: (projectId) =>
    dispatch(actions.execute.business.projectCns.getProjectById({ projectId })),
});

/* Export business component */
export default connect(mapStateToProps, mapDispatchToProps)(ProjectCns);
