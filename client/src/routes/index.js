import Start from '@/components/Start'
import PostPage from '@/components/pages/PostPage'
import EditPost from '@/components/pages/EditPostPage'
/* eslint-disable */
const routes = [
    {
        path: '/',
        name: 'start',
        component:Start
    },
    {
        path:'/posts',
        name: 'posts',
        component:PostPage
    },{
        path: '/posts/:id',
        name: 'EditPost',
        component: EditPost
    }
]

export default routes;