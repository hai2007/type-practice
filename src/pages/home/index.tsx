import React from 'react'
import './index.scss'

class Home extends React.Component {

    doit() {
        alert('此功能未完成开发，敬请期待~')
    }

    render() {
        return (<div className='home-view'>
            <a className='single btn' target='_blank' href='#/?pagename=single'>
                键盘练习
            </a>
            <span className='english btn' onClick={this.doit}>
                英文打字
            </span>
            <span className='pinyin btn' onClick={this.doit}>
                拼音打字
            </span>
        </div>)
    }
}

export default Home
