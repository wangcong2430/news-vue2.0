<template>
    <div class="index">
        <div class="head">
            <a class="back_btn" @click="goback">返回</a>
        </div>
        <div class="content_info">
            <div class="titlebox">
                <h1>{{ info.title }}</h1>
                <div class="infoitem">
                    <span class="source">
                        来源：{{ info.source }}
                    </span>
                    <span class="pubtime"></span>
                </div>
            </div>

            <div class="infobox" v-html="info.context" v-if="info.context">
            </div>
            <div class="infobox" v-html="info.content" v-if="info.content">
            </div>

        </div>


        <div class="foot">
            <div class="cbox">
                <a v-if="flag" class="cancel_btn" @click="collect">收藏</a>
                <a v-else class="cancel_btn" @click="cancelCollect">取消收藏</a>
            </div>
        </div>
    </div>

</template>

<script>
import request from '../utils/request'
export default {
    data() {
        return {
            newsid: '',
            info: {},
            flag: true
        }
    },
    methods: {
        goback() {
            console.log(this.$router)
            this.$router.go(-1)
        },
        collect() {
            let userinfo = JSON.parse(localStorage.getItem('userinfo'))
            let uid = userinfo.userinfo._id
            //console.log(uid)
            //console.log(this.newsid)
            let that = this
            request.post('/collect', {
                aid: that.newsid,
                uid: uid
            }).then(res => {
                console.log(res)
                that.flag = false
            }).catch(err => {
                console.log(err)
            })
        },
        cancelCollect() {
            let userinfo = JSON.parse(localStorage.getItem('userinfo'))
            let uid = userinfo.userinfo._id
            //console.log(uid)
            //console.log(this.newsid)
            let that = this
            request.post('/cancelCollect', {
                aid: that.newsid,
                uid: uid
            }).then(res => {
                console.log(res)
                that.flag = true
            }).catch(err => {
                console.log(err)
            })
        }
    },
    mounted() {
        this.newsid = this.$route.params.id
        request.post("/newsinfo", {
            //发起获取新闻列表的请求
            newsid: this.newsid
        }).then((res) => {
            console.log(res);
            this.info = res.data;
        })
            .catch((error) => {
                console.log(error);
            });
        let userinfo = JSON.parse(localStorage.getItem('userinfo'))
        let uid = userinfo.userinfo._id
        //console.log(uid)
        //console.log(this.newsid)
        let that = this
        request.post('/checkcollect', {
            newsid: that.newsid,
            uid: uid
        }).then(res => {
           console.log(res)
           if(res.data===true){
               that.flag=false
           }else{
               that.flag=true
           }
        }).catch(err => {
            console.log(err)
        })
    }
}
</script>

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

.content_info {
    flex: 1;
    overflow-y: auto;
    box-sizing: border-box;
    padding-left: 10px;
    padding-right: 10px;
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


.foot {
    height: 40px;
    width: 100%;
    border-top: 1px solid #c4c4c4;
    display: flex;
}

.cbox {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    box-sizing: border-box;
    padding-left: 10px;
    padding-right: 10px;
}

.coll_btn {
    display: inline-flex;
    font-size: 12px;
    color: #dd3635;
    align-items: center;
}

.coll_btn::before {
    content: '';
    display: inline-block;
    width: 15px;
    height: 15px;
    background: url(../images/coll2.png) no-repeat;
    background-size: contain;
    margin-right: 5px;
}

.cancel_btn {
    display: inline-flex;
    font-size: 12px;
    color: #dd3635;
    align-items: center;
}

.cancel_btn::before {
    content: '';
    display: inline-block;
    width: 15px;
    height: 15px;
    background: url(../images/coll1.png) no-repeat;
    background-size: contain;
    margin-right: 5px;
}

.titlebox {
    box-sizing: border-box;
    padding: 12px 0;
}

.titlebox>h1 {
    font-size: 24px;
    color: #222222;
}

.infoitem {
    box-sizing: border-box;
    padding: 5px 0;
    display: flex;
    align-items: flex-end;
}

.source {
    color: #222222;
    font-size: 16px;
    margin-right: 8px;
    line-height: 20px;
}

.pubtime {
    font-size: 14px;
    color: #a5a5a5;
    line-height: 15px;
}

.infobox>p.one-p {
    font-size: 16px;
    color: #222222;
    margin-bottom: 10px;
}

.infobox img {
    max-width: 100% !important;
}

</style>