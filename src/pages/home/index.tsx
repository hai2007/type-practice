import React from 'react'
import './index.scss'

class Home extends React.Component {

    render() {
        return (<div className='home-view'>
            <a className='english' target='_blank' href='#/?pagename=english'>
                英文打字
            </a>
            <a className='pinyin' target='_blank' href='#/?pagename=pinyin'>
                拼音打字
            </a>
        </div>)
    }
}

export default Home