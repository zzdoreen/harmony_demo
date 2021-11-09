import app from '@system.app';
import router from '@system.router';
import fetch from '@system.fetch';


export default {
    launch() {
        router.push({
            uri: 'pages/index/index'
        })
    },
    getTabbarItem(item){
        console.log('---- get item'+item.detail)
        this.compText = item.detail
    },
    data: {
        compText:'',
        refreshFlag: null,
        url: 'https://api.tianapi.com/txapi/one/index?key=7764228bedff0b2310879d47173c4603&rand=1',
        datas: {
            code: 200,
            msg: "success",
            newslist: [
                    {
                        oneid: 2899,
                        word: "人类不快乐的唯一原因是他不知道如何安静地呆在他的房间里。",
                        wordfrom: "",
                        imgurl: "http://image.wufazhuce.com/Fpakj8oCGttlfYWopQdp7vFY1aKQ",
                        imgauthor: "",
                        date: "2020-08-03"
                    }
            ]
        },
        responseData: null
    },
    touchstart(touchEvent) {
        console.log('-----' + touchEvent)
    },
    fetch: () => {

    },
    handlePullDown(e) {
        var info = app.getInfo();
        //        console.log(JSON.stringify(info));
        if (e.state === 'start') {
            console.log('in' + this.url)
            fetch.fetch({
                url: this.url,
                success: (res) => {
                    console.log('success:----' + JSON.stringify(res.data))
                }
            })
        }
        //        console.log('--------------------pull:  ' + e.state)
    },
    getData() {
        console.log('click')
        fetch.fetch({
            url: this.url,
            success: (res) => {
                this.responseData = res.data.newslist[0]
                this.refreshFlag = false
                console.log('------------------------' + JSON.stringify(res))
            },
            fail: (error) => {
                this.refreshFlag = false
                console.log(error)
            }
        })
    },
    requestData() {
        this.getData()
//        new Promise(resolve => {
//            setTimeout(() => {
//                this.responseData = this.datas.newslist[0]
//                this.refreshFlag = false
//                console.log(JSON.stringify(this.responseData))
//
//            }, 1000)
//        })
    },
    handleRefresh(e) {
        this.refreshFlag = e.refreshing
        this.requestData()
    },
}
