import React from 'react'
import './index.scss'
import ctrl from './ctrl.js'

let flag = 0

class Pinyin extends React.Component {

    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <div className='keyboard'>
                <div className='canvas' id='keyboard-canvas'></div>
                <div className="ctrl">
                    <span>时间<i id='single-time'>00:00:00</i></span>
                    <span>速度<i id='single-speed'>0字/分</i></span>
                    <span>进度<i id='single-process'>0%</i></span>
                    <span>正确率<i id='single-rate'>100%</i></span>
                </div>
            </div>
        )
    }

    componentDidMount() {

        if (flag == 0) ctrl()
        flag += 1

    }
}

export default Pinyin
