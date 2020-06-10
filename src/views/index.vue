<template>
    <div class="index">
        <Row type="flex" justify="center" align="middle">
            <Col span="8" class="leftCol">
                <h1>
                    <img src="../assets/images/logo.png">
                </h1>
                <h2>
                    <p>Welcome to my own Components!</p>
                    <p>自定义组件封装</p>
                </h2>
                <ul>
                  <li @click="gotoDetailPage">
                    Test
                  </li>
                  <li>
                    <router-link tag="a" target="_blank" :to="{path:'/blankPage'}">CEM</router-link>
                  </li>
                  <li>
                    <router-link to="/demoIndex">自定义选择框（右侧显示）</router-link>
                  </li>
                  <li>
                    <router-link to="/initCustProps">选择模态框v1（右侧显示）</router-link>
                  </li>
                  <li>
                    <!-- <router-link to="/mxGraphIndex">mxGraph（右侧显示）</router-link> -->
                  </li>
                </ul>
            </Col>
            <Col span="16">
               <router-view></router-view>
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
  methods: {
    gotoDetailPage() {
      console.log("go to select demo");

      this.$Modal.info({
        title: "Waiting...",
        content: "建设中..."
      });

      // this.$router.push({ path: "./views/selectDemoIndex.vue" });
    }
  }
};
</script>

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
}

.index .ivu-row-flex {
  height: 100%;
}

ul {
  margin-top: 30px;
}

ul > li {
  font-size: 18px;
  cursor: pointer;
}

.leftCol {
  border-right: 1px solid #bbbbbb;
}
</style>