import Home from '@/app/pages/Home.vue';
import Headlines from '@/app/pages/Headlines.vue';
import LatestNews from '@/app/pages/LatestNews.vue';
import Sources from '@/app/pages/Sources.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/headlines',
        name: 'Headlines',
        component: Headlines
    },
    {
        path: '/latest-news',
        name: 'LatestNews',
        component: LatestNews
    },
    {
        path: '/sources',
        name: 'Sources',
        component: Sources
    }
]

export default routes;