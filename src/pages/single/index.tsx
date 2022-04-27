import React from 'react'
import keyboardImage from './keyboard.clunch'
import Clunch from 'clunch'
import getKeyString from "@hai2007/browser/getKeyString"
import './index.scss'

class Pinyin extends React.Component {

    constructor(props: any) {
        super(props)
    }

    render() {
        return (<div className='keyboard-canvas' id='keyboard-canvas'></div>)
    }

    componentDidMount() {

        new Clunch({
            el: document.getElementById('keyboard-canvas'),
            render: keyboardImage,
            mounted() {

                document.body.addEventListener('keydown', event => {

                    let key = getKeyString(event)
                    console.log(key)

                })

            }
        })

    }
}

export default Pinyin
