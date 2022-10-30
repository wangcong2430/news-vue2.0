<template>
  <div>
    <router-view />
    <div class="foot ">
      <a :class="flag ? 'sel' : ''">
        <span class="indexicon"></span>
        <span @click="onChange(1)" data-idx="1"> 首页</span>
      </a>
      <a :class="flag ? '' : 'sel'">
        <span class="myicon"></span>
        <span @click="onChange(2)" data-idx="2">我的</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: ''
    }
  },
  methods: {
    onChange(idx) {
      if (idx == 1) {
        this.flag = true
        this.$router.replace('/index0')
      }
      else if (idx == 2) {
        this.flag = false
        this.$router.replace('/my')
      }
    }
  },
  mounted() {
    //console.log(this.$route)
    if (this.$route.name === 'index0') {
      this.flag = true
    } else if (this.$route.name === 'my') {
      this.flag = false
    }
  }
};
</script>
<style  scoped>
.foot {
  height: 40px;
  width: 100%;
  border-top: 1px solid #c4c4c4;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #c4c4c4;
}

.foot>a {
  flex: 1;
  height: 40px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.foot>a.sel>span:nth-child(2) {
  color: #de3232;
}

.foot>a.sel>.indexicon {
  background: url(../images/index2.png);
  background-size: contain;
}

.foot>a.sel>.myicon {
  background: url(../images/my2.png);
  background-size: contain;
}

.indexicon {
  display: inline-block;
  width: 15px;
  height: 15px;
  background: url(../images/index1.png);
  background-size: contain;
}

.myicon {
  display: inline-block;
  width: 15px;
  height: 15px;
  background: url(../images/my1.png);
  background-size: contain;
}

.foot>a>span:nth-child(2) {
  color: #787878;
  font-size: 12px;
  margin-top: -10px;
}
</style>