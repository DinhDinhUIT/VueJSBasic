import Home from './components/Home.vue';
import User from './components/user/User.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
import UserStart from './components/user/Index.vue';
import Header from './components/share/Header.vue';
import Error from './components/404.vue';

export const routes= [
    {path: '/', name: 'homepage', components: {
        default: Home,
        'page-header': Header 
    }},
    {path: '/user', name: 'user', component: User, children: [
        {path: '', name: 'index', component: UserStart},
        {path: ':id', name: 'userdetail', component: UserDetail},
        {path: ':id/edit', name: 'useredit', component: UserEdit},
    ]},
    {path: '/author-redirect', redirect: {name: 'homepage'}},
    {path: '*', redirect: '/404'},
    {path: '/404', name: 'errorpage', component: Error}
];