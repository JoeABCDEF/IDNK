export default{
    path : '/',
    component : ()=>import('@/views/Login'),
    children:[
        {
            name:'lo_login',
            path : 'lo_login',
            // alive
            // components:{
            //     alive:()=>import('@/components/Login/Login')
            // },
            component:()=>import('@/components/Login/Login'),
            // component:()=>import('@/components/Order/Detail_per'),
            // meta:{
            //     keepAlive:true
            // },
            // children:[
            //     {
            //         name:'task',
            //         path:'task',
            //         component : ()=>import('@/components/Order/Detail_per/Task'),
            //         props:true
            //     }
            // ],
            props:true
        },
        {
            name:'lo_register',
            path : 'lo_register',
            component:()=>import('@/components/Login/Register')
        },
        {
            name:'lo_forget',
            path : 'lo_forget',
            component:()=>import('@/components/Login/Forget')
        },
        // {
        //     path : 'published',
        //     component:()=>import('@/components/Order/Published'),
        //     children:[
        //         {
        //             name:'detail_task',
        //             path:'detail_task',
        //             component:()=>import('@/components/Order/Detail_task'),
        //             props:true
        //         }
        //     ]
        // },
        // {
        //     path : 'taskmes',
        //     components:{
        //         alive:()=>import('@/components/Order/Task_Mes')
        //     }
        // },
        // {
        //     path: 'place',
        //     component: ()=>import('@/components/Order/Place')
        // }
    ]
}