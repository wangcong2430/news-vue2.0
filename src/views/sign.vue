<template>
    <form>
        <div class="box">
            <div class="m_t25">
                <input type="text" class="input1" placeholder="用户名" v-model="username" />
            </div>
            <div class="m_t25">
                <input type="new-password" class="input1" placeholder="密码" v-model="password" />
            </div>
            <div class="m_t25">
                <input type="new-password" class="input1" placeholder="重复密码" />
            </div>
            <div class="m_t25">
                <div class="itemname">头像,请点击下方添加</div>
                <div>
                    <a class="avater_btn">
                        <input type='file' accept='image/*' class='avatar' @change="handle" />
                    </a>
                    <img :src='src' alt='' class='previewimg' />
                </div>
            </div>
            <div class="m_t25">
                <input type="button" class="login_btn" value="注册" @click="sign" />

            </div>
            <div class="m_t15">

                <div class="tar">
                    <a @click="goLogin">登录</a>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
import request from '@/utils/request'
import axios from 'axios'
export default {
    data() {
        return {
            username: '',
            password: '',
            avatar: '',
            src:''
        }
    },
    methods: {
        handle(e) {
            console.log(e)
            console.log(e.target.files[0])
            this.avatar = e.target.files[0]
            console.log(this.avatar)
            let that = this
            let file = e.target.files[0]//获取到选择的第一个文件信息
            let reader = new FileReader()//new一个构造函数得到一个对象
            //console.log(e.target.files)           
            reader.readAsDataURL(file)//调用该对象的方法转成64位图片格式
            reader.onload = function () {//监听事件                
                that.src = this.result
            }
        },
        sign() {
            console.log(this.username)
            console.log(this.password)
             console.log(this.avatar)
            let dd = new FormData()//通过此方法将请求参数转成接口需要的数据格式
            dd.append('username', this.username)
            dd.append('password', this.password)
            dd.append('avatar', this.avatar)
            console.log(dd)
            axios.post('https://www.young1024.com:3002/sign', dd).then(res => {
                console.log(res)
                this.$router.replace('/login')
            }).catch(err => {
                console.log(err)
            })

        },
        goLogin(){
            this.$router.replace('/login')
        }
    }
}
</script>

<style  scoped>
.box {
    box-sizing: border-box;
    padding-left: 10px;
    padding-right: 10px;
}

.input1 {
    appearance: none;
    -webkit-appearance: none;
    box-sizing: border-box;
    border: 1px solid #de3232;
    border-radius: 5px;
    width: 100%;
    min-width: 1px;
    height: 38px;
    padding-left: 10px;
    outline: none;
    font-size: 18px;
}

.input1::placeholder {
    color: #a5a5a5;
    font-size: 18px;
}

.login_btn {
    appearance: none;
    -webkit-appearance: none;
    width: 100%;
    min-width: 1px;
    height: 38px;
    border-radius: 5px;
    background-color: #de3232;
    color: #ffffff;
    font-size: 18px;
    outline: none;
    text-align: center;
    border: 0;
}

.link_btn {
    color: #4d35a6;
    font-size: 14px;
    text-decoration: underline;
}

.avater_btn {
    display: inline-block;
    width: 45px;
    height: 45px;
    border: 1px solid #888888;
    border-radius: 4px;
    position: relative;
}

.avatar {
    display: inline-block;
    width: 45px;
    height: 45px;
    opacity: 0;
}

.previewimg {
    display: block;
    width: 45px;
    height: 45px;
    margin-top: 10px;
}

.avater_btn::before {
    content: '';
    display: inline-block;
    width: 30px;
    height: 2px;
    background-color: #888888;
    position: absolute;
    top: 50%;
    margin-top: -1px;
    left: 50%;
    margin-left: -15px;
}

.avater_btn::after {
    content: '';
    display: inline-block;
    width: 2px;
    height: 30px;
    background-color: #888888;
    position: absolute;
    top: 50%;
    margin-top: -15px;
    left: 50%;
    margin-left: -1px;
}


.itemname {
    color: #a5a5a5;
    font-size: 18px;
    line-height: 22px;
}
</style>