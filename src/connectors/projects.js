//import axios from 'axios';

const connectors = {
  getProjects: ({ location, perimeter, archived }, limit, offset) => {},
  getProject: (id) => {},
  putProject: ({ title, description, author, dateExpire, location }) => {},
  patchProject: ({ title, description, dateExpire, location, state }) => {},
  deleteProject: (id) => {},
};
export default connectors;
