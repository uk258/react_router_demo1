import React,{useState} from 'react'
import { Link,Outlet} from 'react-router-dom'
export default function Message() {
    const [messages]=useState([
        {id:'001',title:'消息1',content:'内容1'},
        {id:'002',title:'消息2',content:'内容2'},
        {id:'003',title:'消息3',content:'内容3'},
        {id:'004',title:'消息4',content:'内容4'},
    ])
    return (
        <div>
            <ul>
                {
                    messages.map((m)=>{
                        return (
                            <li key={m.id}>
                                <Link to={`detail/${m.id}/${m.title}/${m.content}`}>{m.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
            <hr />
            <Outlet/>
        </div>
    )
}
