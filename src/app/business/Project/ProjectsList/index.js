import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/* Label dictionnary */
// import labelsFr from 'labels_fr.json';
/* Business react components */
import ProjectsListItem from 'app/business/Project/ProjectsListItem';
/* Designs react components */
/* HOC Redux actions imports */
/* Models imports */
import ProjectEntity from 'store/models/ProjectEntity';
/**
 * @function ProjectsList Projects list business react component
 * @param {*} props
 */
const ProjectsList = ({ fontSize, projects }) => {
  return (
    <>
      {projects.map((project) => (
        <ProjectsListItem key={project.id} project={project} />
      ))}
    </>
  );
};

/* HOC Redux container implementation */
/* PropTypes definition */
ProjectsList.propTypes = {
  /* State part*/
  projects: PropTypes.arrayOf(PropTypes.instanceOf(ProjectEntity)).isRequired,
  /* Dispatch part */
};

/**
 * @function mapStateToProps
 * @param {*} state Current redux state
 * @param {*} _ OwnProps (notuse)
 */
const mapStateToProps = (state, _) => ({
  fontSize: state.app.display.fontSize,
  projects: state.project.business.projectList.data.projects,
});
/**
 * @function mapDispatchToProps
 * @param {*} dispatch
 * @param {*} _ OwnProps (notuse)
 */
const mapDispatchToProps = (dispatch, _) => ({});

/* Export business component */
export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList);
