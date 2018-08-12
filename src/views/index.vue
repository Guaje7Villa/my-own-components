<style scoped>
.index {
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  text-align: center;
}

.index h1 {
  height: 150px;
}

.index h1 img {
  height: 100%;
}

.index h2 {
  color: #666;
  margin-bottom: 50px;
}

.index h2 p {
  margin: 0 0 50px;
}

.index .ivu-row-flex {
  height: 100%;
}

ul > li {
  font-size: 18px;
  cursor: pointer;
}
</style>
<template>
    <div class="index">
        <Row type="flex" justify="center" align="middle">
            <Col span="24">
                <h1>
                    <img src="https://raw.githubusercontent.com/iview/iview/master/assets/logo.png">
                </h1>
                <h2>
                    <p>Welcome to my own Components!</p>
                    <p>自定义组件封装</p>
                    
                    <!-- <Button type="ghost" @click="handleStart">Start iView</Button> -->
                </h2>
                <ul>
                  <li @click="gotoDetailPage">
                    select component page
                  </li>
                  <li>
                    <router-link tag="a" target="_blank" :to="{path:'./selectDemoIndex'}">自定义选择框</router-link>
                  </li>
                </ul>
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
  methods: {
    // handleStart() {
    //   this.$Modal.info({
    //     title: "Bravo",
    //     content: "Now, enjoy the convenience of iView."
    //   });
    // },
    gotoDetailPage() {
      console.log("go to select demo");
      this.$router.push({ path: "./views/selectDemoIndex.vue" });
    }
  }
};
</script>