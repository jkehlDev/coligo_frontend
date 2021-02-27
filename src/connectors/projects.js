import axios from 'axios';

const getProjects = ({ location, perimeter, archived }, limit, offset) => {};
const getProject = (id) => {};
const putProject = ({ title, description, author, dateExpire, location }) => {};
const patchProject = ({
  title,
  description,
  dateExpire,
  location,
  state,
}) => {};
const deleteProject = (id) => {};
const connectors = { getProjects, getProject, putProject, patchProject };
export default connectors;
