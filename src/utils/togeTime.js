export default {
    togetTime(time) {
        let dd = new Date(time * 1);
        //return '周五 4月26日'
        let w = "";
        switch (dd.getDay()) {
            case 0:
                w = "日";
                break;
            case 1:
                w = "一";
                break;
            case 2:
                w = "二";
                break;
            case 3:
                w = "三";
                break;
            case 4:
                w = "四";
                break;
            case 5:
                w = "五";
                break;
            case 6:
                w = "六";
                break;
            default:
                break;
        }
        return `周${w}  ${dd.getMonth()+1}月${dd.getDate()}日`;
    },
    togetYMD(time){
        let dd=new Date(time*1000)
        return `${dd.getFullYear()}年${dd.getMonth()+1}月${dd.getDate()}日`;
    },
    toMD(time){
        let dd=new Date(time*1000)
        return `${dd.getMonth()+1}月${dd.getDate()}日`;
    },
    toHF(time){
        let dd=new Date(time*1000)
        return `${dd.getHours()}:${dd.getMinutes()}`;
    }


}