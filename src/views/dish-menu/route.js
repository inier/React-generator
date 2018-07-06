import Loadable from 'react-loadable';


import loading from '@/components/loadableLoading';
import { action, initType } from './initDidMountList';

const DishMenu = Loadable({
    loader: () => import('./'),
    loading,
});

export default {
    path: '/DishMenu',
    component: DishMenu,
    initList: action,
    initType,
}