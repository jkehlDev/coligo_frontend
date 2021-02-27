import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/* Label dictionnary */
// import labelsFr from 'labels_fr.json';

/* Designs react components */

/* HOC Redux actions imports */
import actions from 'store/project/actions';

/**
 * @function ProjectItem Project item business react component
 * @param {*} props
 */
const ProjectItem = ({
  projectId,
  title,
  description,
  author,
  dateCreate,
  dateExpire,
  location,
  needs,
  state,
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
  // TODO - Make external project states enum
  state: PropTypes.oneOf(['created', 'published', 'archived']).isRequired,
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
  title: state.project.business.projectItem.fields.title,
  description: state.project.business.projectItem.fields.description,
  author: state.project.business.projectItem.fields.author,
  dateCreate: state.project.business.projectItem.fields.dateCreate,
  dateExpire: state.project.business.projectItem.fields.dateExpire,
  location: state.project.business.projectItem.fields.location,
  needs: state.project.business.projectItem.fields.needs,
  state: state.project.business.projectItem.fields.state,
  fontSize: state.project.business.projectItem.default.fontSize,
});
/**
 * @function mapDispatchToProps
 * @param {*} dispatch
 * @param {*} _ OwnProps (notuse)
 */
const mapDispatchToProps = (dispatch, _) => ({
  refreshStateByProjectId: (projectId) =>
    dispatch(
      actions.execute.business.projectItem.getProjectById({ projectId })
    ),
});

/* Export business component */
export default connect(mapStateToProps, mapDispatchToProps)(ProjectItem);
