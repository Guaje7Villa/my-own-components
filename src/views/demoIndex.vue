<template>
    <div class="main"> 
      <h1>自定义组件示例
        <Button @click="close" size="small">
            <Icon type="close"></Icon>
            关闭
        </Button>
      </h1>
    
        <CtsiSelect 
          :isMulti="isMulti"
          :queryCond="queryCond"
          :spanVal="spanVal"
        ></CtsiSelect>
    </div>
</template>

<script>
import CtsiSelect from "../components/ctsi-select";

export default {
  data() {
    return {
      isMulti: true,
      queryCond: "1",
      spanVal: 24
    };
  },
  components: {
    CtsiSelect
  },
  methods: {
    close() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.main {
  width: 80%;
  height: 500px;
  border: 1px solid #bbbbbb;
  margin-left: 10%;
  margin-top: 10%;
}

h1 {
  text-align: center;
}
</style>


