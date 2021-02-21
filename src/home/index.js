import React from 'react'
import "./test.less"
import "./test.css"
import buyImg from "@/assets/img/icon_buy_task.png"

import testImg from "@/assets/img/icon_buy_task.png"

export default class Home extends React.Component {
    render() {
        return ( <div className="test test2">
            <p>hello world</p><img src = { buyImg } alt = "" style = {{width: 160,height: 160}}/>
            <img src = {testImg} alt="" style = {{width: 160,height: 160}}/>
            </div>
        )
    }

}