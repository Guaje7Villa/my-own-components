<template>
  <div>
    <h1>点击显示选择弹框</h1>
    <br>
    <Button type="ghost" class="button is-primary" @click="show">显示</Button>
    <Button type="ghost" class="button is-primary" @click="goback">返回</Button>
    <CtsiModal
      :showModal="showModal"
      @on-showModal-change="onShowModalChange"
    ></CtsiModal>
  </div>
</template>

<script>
import CtsiModal from "../components/ctsi-modal";

export default {
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    show() {
      this.showModal = true;
    },
    goback() {
      this.$router.go(-1);
    },
    ok() {
      this.$Message.info("已选择");
    },
    cancel() {
      this.$Message.info("关闭");
    },
    onShowModalChange(val) {
      this.showModal = val; //4.外层调用组件方注册变更方法，将组件内的数据变更，同步到组件外的数据状态中
    }
  },
  components: {
    CtsiModal
  }
};
</script>

<style scoped>
.cusItem {
  width: 90px;
  height: 50px;
  border: 1px solid #bbbbbb;
}
</style>


