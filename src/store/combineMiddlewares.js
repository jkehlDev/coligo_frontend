/* Applications middlewares */
import appMdl from 'store/app/middleware';
import profilMdl from 'store/profil/middleware';
import projectMdl from 'store/project/middleware';

const applicationMdl = [appMdl, profilMdl, projectMdl];

export default applicationMdl;
