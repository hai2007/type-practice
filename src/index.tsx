import React from 'react'
import { createRoot } from 'react-dom/client'
import '@hai2007/style/normalize.css'
import '@/index.scss'
import ReactLazilyComponent from 'react-lazily-component'
import getUrlParam from './tool/getUrlParam'

const Home = ReactLazilyComponent(() => import('./pages/home/index'))
const Single = ReactLazilyComponent(() => import('./pages/single/index'))
const English = ReactLazilyComponent(() => import('./pages/english/index'))
const Pinyin = ReactLazilyComponent(() => import('./pages/pinyin/index'))

const el = document.getElementById('root')

let Page
let urlParam = getUrlParam()

switch (urlParam.pagename) {
    case "single": {
        Page = Single
        break
    }
    case "english": {
        Page = English
        break
    }
    case "pinyin": {
        Page = Pinyin
        break
    }
    default: {
        Page = Home
    }
}

if (el) {
    createRoot(el).render(
        <React.StrictMode>
            <div className='index-view'>
                <header>
                    <h2>
                        <a href="https://github.com/hai2007/type-practice" target="_blank" title='点击我查看源码'> 一个在线的免费打字练习工具</a>
                    </h2>
                </header>
                <Page></Page>
            </div>
        </React.StrictMode>
    )
} else {
    alert('未找到挂载点，启动失败！')
}
