import router from '@system.router';

export default {
    props: ['barItem'],
    data: {
        image: ['common/Icon/shouye1-copy_active.png',
            'common/Icon/pindao.png',
            'common/Icon/dongtai.png',
            'common/Icon/wodedangxuan.png']
    },
    handleClick(e) {
        this.barItem = e.target.attr.data

        switch (this.barItem) {
            case '1':
                this.image = [
                        'common/Icon/shouye1-copy_active.png',
                        'common/Icon/pindao.png',
                        'common/Icon/dongtai.png',
                        'common/Icon/wodedangxuan.png'
                ];
                break;
            case '2':
                this.image = [
                        'common/Icon/shouye1-copy.png',
                        'common/Icon/pindao_active.png',
                        'common/Icon/dongtai.png',
                        'common/Icon/wodedangxuan.png'];
                break;
            case '3':
                this.image = [
                        'common/Icon/shouye1-copy.png',
                        'common/Icon/pindao.png',
                        'common/Icon/dongtai_active.png',
                        'common/Icon/wodedangxuan.png'];

                break;
            case '4':
                this.image = [
                        'common/Icon/shouye1-copy.png',
                        'common/Icon/pindao.png',
                        'common/Icon/dongtai.png',
                        'common/Icon/wodedangxuan_active.png'];

                break;
            default:
                break;
        }
        this.$emit('getItem', {
            idx: this.barItem,
            title: e.target.attr.value
        })

    },
}