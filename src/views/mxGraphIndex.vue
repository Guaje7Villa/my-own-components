<template>
  <div>
    <Row>
      <Col span="24">
        <div id='main-container'>1212</div>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    draw() {
      var container = document.getElementById("main-container");
      var graph = new mxGraph(container);

      console.log("graphgraphgraphgraph");
      console.log(graph);

    
    }
  },
  created() {
    alert(1111)
    if (!mxClient.isBrowserSupported()) {
      //如果浏览器不支持，则显示错误信息
      alert("该浏览器不支持");
    } else {
      alert(222)
      this.draw();
    }
  }
};
</script>

