import prompt from '@system.prompt';
import geolocation from '@system.geolocation'

export default {
    data: {
        todoList: [
                {
                    name: '姓名',
                    value: 'doreen'
                },
                {
                    name: '性别',
                    value: '女'
                },
        ]
    },
    handleLogin() {
        //        prompt.showDialog({
        //            title: 'Title Info',
        //            message: 'Message Info',
        //            buttons: [
        //                    {
        //                        text: 'button',
        //                        color: 'blue',
        //                    },
        //                    {
        //                        text: 'button',
        //                        color: 'blue',
        //                    },
        //            ],
        //            success: function (data) {
        //                console.log('dialog success callback，click button : ' + data.index);
        //            },
        //            cancel: function () {
        //                console.log('dialog cancel callback');
        //            },
        //        })
        geolocation.getLocation({
            success: function (data) {
                console.log('success get location data. latitude:' + data.latitude);
            },
            fail: function (data, code) {
                console.log('fail to get location. code:' + code + ', data:' + data);
            },
        })
//        console.log(JSON.stringify(geolocation.getLocation()))
    }
}
