import keyboardImage from './keyboard.clunch'
import Clunch from 'clunch'
import getKeyString from "@hai2007/browser/getKeyString"

export default function () {
    new Clunch({
        el: document.getElementById('keyboard-canvas'),
        render: keyboardImage,
        data() {
            return {
                keys: [
                    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
                    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
                    ["Z", "X", "C", "V", "B", "N", "M"]
                ],
                currentKey: "X",
                errorKey: "",
                rightKey: ""
            }
        },
        mounted() {

            // 当前状态、开始时间、已敲个数、正确个数、总个数
            let flag = 'noBegin', beginTime, count, rightCount, allCount = 1000

            // 定时器
            window.intervalSingle = null

            let timeEl = document.getElementById('single-time')
            let speedEl = document.getElementById('single-speed')
            let processEl = document.getElementById('single-process')
            let rateEl = document.getElementById('single-rate')

            document.body.addEventListener('keydown', event => {

                // 如果还没有开始
                if (flag == 'noBegin') {

                    // 标记开始
                    flag = 'Runing'

                    // 初始化参数
                    beginTime = new Date().valueOf()
                    count = 0
                    rightCount = 0

                    // 启动定时任务
                    if (window.intervalSingle) clearInterval(window.intervalSingle)
                    window.intervalSingle = setInterval(() => {

                        let useTime = new Date().valueOf() - beginTime

                        let dateInstance = new Date(useTime)
                        let hour = dateInstance.getHours() - 8
                        let minutes = dateInstance.getMinutes()
                        let seconds = dateInstance.getSeconds()

                        timeEl.innerText = (hour > 9 ? "" : "0") + hour + ":" + (minutes > 9 ? "" : "0") + minutes + ":" + (seconds > 9 ? "" : "0") + seconds
                        speedEl.innerText = (rightCount / (useTime * 0.001) * 60).toFixed(0) + "字/分"

                    }, 1000)

                }

                if (flag == 'Runing') {

                    count += 1

                    let key = "" + (getKeyString(event).toUpperCase())

                    //  正确
                    if (this.currentKey == key) {
                        this.currentKey = ""
                        this.rightKey = key

                        rightCount += 1

                        processEl.innerText = (rightCount / allCount * 100).toFixed(0) + "%"

                        if (rightCount >= allCount) {
                            clearInterval(window.intervalSingle)
                            flag = 'end'
                            alert("打字练习完毕，底部有进度和结果，如果想重新练习，请刷新浏览器～")
                        }

                        setTimeout(() => {
                            this.currentKey = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"][(Math.random() * 25).toFixed(0)]
                            this.rightKey = ""
                        }, 100)

                    }

                    // 错误
                    else {

                        this.errorKey = key

                        setTimeout(() => {
                            this.errorKey = ""
                        }, 50)

                    }

                    rateEl.innerText = (rightCount / count * 100).toFixed(0) + "%"
                }

            })

        }
    })
}