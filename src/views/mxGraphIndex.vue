<template>
  <div id='main-container'></div>
</template>

<script>
// import mxGraph from 'mxGraph';
export default {
  data() {
    return {}
  },
  methods: {
    draw() {
      console.log("beginning...");

      var container = document.getElementById("main-container");
      var graph = new mxGraph(container);
      console.log(graph);
     

   

    
    }
  },
  mounted() {
    // alert(1111)
    // if (!mxClient.isBrowserSupported()) {
    //   //如果浏览器不支持，则显示错误信息
    //   alert("该浏览器不支持");
    // } else {
    //   alert(222)
    //   this.draw();
    // }
    this.draw();
  }
};
</script>

