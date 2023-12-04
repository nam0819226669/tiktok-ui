import routesConfig from '../../src/config/routes';

import { HeaderOnly } from '../components/Layout';

import Home from '../page/Home';
import Following from '../page/following';
import Profile from '../page/Profile';
import Upload from '../page/Upload';
import Search from '../page/Search';

const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
