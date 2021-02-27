import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/* Label dictionnary */
//import labelsFr from 'labels_fr.json';

/* Business react components */
import ProjectItem from './ProjectItem';

/* Designs react components */

/* HOC Redux actions imports */

/**
 * @function ProjectsList Projects list business react component
 * @param {*} props
 */
const ProjectsList = ({ projects }) => {
  return (
    <>
      {projects.map((id) => (
        <ProjectItem key={id} projectId={id} />
      ))}
    </>
  );
};

/* HOC Redux container implementation */
/* PropTypes definition */
ProjectsList.propTypes = {
  /* State part*/
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  /* Dispatch part */
};

/**
 * @function mapStateToProps
 * @param {*} state Current redux state
 * @param {*} _ OwnProps (notuse)
 */
const mapStateToProps = (state, _) => ({
  projects: state.project.business.projectList.fields.projects,
});
/**
 * @function mapDispatchToProps
 * @param {*} dispatch
 * @param {*} _ OwnProps (notuse)
 */
const mapDispatchToProps = (dispatch, _) => ({});

/* Export business component */
export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList);
