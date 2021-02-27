import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/* Label dictionnary */
// import labelsFr from 'labels_fr.json';

/* Designs react components */

/* HOC Redux actions imports */
import actions from 'store/project/actions';

/**
 * @function ProjectCns Project Consultation business react component
 * @param {*} props
 */
const ProjectCns = ({
  projectId,
  title,
  description,
  author,
  dateCreate,
  dateExpire,
  location,
  needs,
  fontSize,
  refreshStateByProjectId,
}) => {
  useEffect(() => refreshStateByProjectId(projectId), [
    refreshStateByProjectId,
    projectId,
  ]);
  return <></>;
};

/* HOC Redux container implementation */
/* PropTypes definition */
ProjectItem.propTypes = {
  /* State part*/
  projectId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  dateCreate: PropTypes.string.isRequired,
  dateExpire: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  needs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  fontSize: PropTypes.string.isRequired,
  /* Dispatch part */
  refreshStateByProjectId: PropTypes.func.isRequired,
};

/**
 * @function mapStateToProps
 * @param {*} state Current redux state
 * @param {*} _ OwnProps (notuse)
 */
const mapStateToProps = (state, ownProps) => ({
  projectId: ownProps.projectId,
  title: state.project.business.projectCns.fields.title,
  description: state.project.business.projectCns.fields.description,
  author: state.project.business.projectCns.fields.author,
  dateCreate: state.project.business.projectCns.fields.dateCreate,
  dateExpire: state.project.business.projectCns.fields.dateExpire,
  location: state.project.business.projectCns.fields.location,
  needs: state.project.business.projectCns.fields.needs,
  fontSize: state.project.business.projectCns.default.fontSize,
});
/**
 * @function mapDispatchToProps
 * @param {*} dispatch
 * @param {*} _ OwnProps (notuse)
 */
const mapDispatchToProps = (dispatch, _) => ({
  refreshStateByProjectId: (projectId) =>
    dispatch(
      actions.execute.business.projectCns.getProjectById({ projectId })
    ),
});

/* Export business component */
export default connect(mapStateToProps, mapDispatchToProps)(ProjectCns);
