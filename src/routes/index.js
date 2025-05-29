import Home from '../pages/Home';
import About from '../pages/About';
import Message from '../pages/Message';
import News from '../pages/News';
import Detail from '../pages/Detail';
import { Navigate} from 'react-router-dom'
// eslint-disable-next-line import/no-anonymous-default-export
export default [
    { 
        path: "/about",
        element: <About />
    },
    {
        path: "/home",
        element: <Home />,
        children: [
            {
                path: 'news',
                element: <News />
            },
            {
                path: 'message',
                element: <Message />,
                children:[
                    {
                        path: 'detail/:id/:title/:content',
                        element: <Detail />
                    },
                ]
            }
        ]
    },
    {
        path: "/",
        element: <Navigate to="/about" />
    },
]