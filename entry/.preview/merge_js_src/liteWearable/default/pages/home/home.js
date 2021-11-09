export default {
    data: {
        compText: '1',
        compTitle: '首页',
        refreshFlag: false
    },
    getTabbarItem(item) {
        this.compTitle = item.detail.title
        this.compText = item.detail.idx
    },
    handleRefresh(e) {
        this.refreshFlag = e.refreshing
        new Promise(resolve => {
            setTimeout(() => {
                this.refreshFlag = false
            }, 1000)
        })
    }
}