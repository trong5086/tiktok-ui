//Layouts
import { HeaderOnly } from '~/components/Layout';

//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';

// public Routes
const publicRoutes = [
    { path: '/', element: Home },
    { path: '/following', element: Following },
    { path: '/profile', element: Profile },
    { path: '/search', element: Search, layout: null },
    { path: '/upload', element: Upload, layout: HeaderOnly },
];
// private Routes
const privateRoutes = [];
export { publicRoutes, privateRoutes };
