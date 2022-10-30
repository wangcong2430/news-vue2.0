<template>
    <div class="index">
        <div class="head">
            <a class="back_btn" @click="goback">返回</a>
        </div>
        <div class="content">
            <ul>
                <li v-for="(item,index) in collectList" :key="index" @click="goinfo(item.aid._id)">
                    <div class="info">
                        <div class="title">{{item.aid.title}}</div>
                        <div class="something">
                            <span class="m_r10">{{item.aid.source}}-{{item.aid.type}}</span>
                            <span>{{formTime(item.aid.time-0)}}</span>
                        </div>
                    </div>
                    <div class="img">
                        <img alt=''  :src="item.aid.img"/>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import request from '@/utils/request'
import formTime from '@/utils/formTime'
export default {
    data() {
        return {
            uid: '',
            collectList:[]
        }
    },
    methods: {
        formTime:formTime.formTime,
        goback() {
            console.log(11)
            this.$router.go(-1)
        },
        goinfo(idx){
            this.$router.push('/info/'+idx)
        }
    },
    mounted() {
        this.uid = JSON.parse(localStorage.getItem('userinfo')).userinfo._id
        console.log(this.uid)
        let that = this
        request.post('/clist', {
            uid: that.uid
        }).then(res=>{
            console.log(res)
           that.collectList=res.data
        }).catch(err=>{
            console.log(err)
        })
    }
}
</script >

<style scoped>
.index {
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
}

.head {
    height: 40px;
    width: 100%;
    background-color: #dd3635;
    display: flex;
    box-sizing: border-box;
    padding-left: 10px;
    padding-right: 10px;
    align-items: center;
}

.content {
    flex: 1;
    overflow-y: auto;
    box-sizing: border-box;
    padding-left: 10px;
    padding-right: 10px;
}


.content>ul>li {
    display: flex;
    height: 100px;
    border-bottom: 1px solid #f3f3f3;
    box-sizing: border-box;
    padding-top: 14px;
    padding-bottom: 14px;
}

.content>ul>li:last-child {
    border-bottom: 0;
}

.info {
    flex: 1;
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 10px;
}


.title {
    font-size: 18px;
    color: #222222;
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
}

.something {
    color: #a5a5a5;
    font-size: 12px;
}


.img {
    width: 115px;
    height: 72px;
    overflow: hidden;
}

.img>img {
    width: 100%;
}

.back_btn {
    color: #ffffff;
    font-size: 16px;
}

.back_btn::before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    border-left: 3px solid #ffffff;
    border-top: 3px solid #ffffff;
    transform: rotate(-45deg);
}
</style>
