<template>
  <div>
    <h1>点击显示选择弹框</h1>
    </br>
    <Button type="ghost" class="button is-primary" @click="showModal">显示</Button>
    <Button type="ghost" class="button is-primary" @click="goback">返回</Button>
   <!--
    <CtsiModal
      :showModal="showModal"
    ></CtsiModal>
    -->
     <Modal
        v-model="isShowModal"
        title="请选择相关内容..."
        @on-ok="ok"
        @on-cancel="cancel">
        <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
          <Checkbox
              :indeterminate="indeterminate"
              :value="checkAll"
              @click.prevent.native="handleCheckAll1">全选 —— 业务能力</Checkbox>
        </div>
        <CheckboxGroup v-model="checkAllGroup1" @on-change="checkAllGroupChange1">
            <Checkbox label="传统带宽型业务"></Checkbox>
            <Checkbox label="云（云接入、云迁移、混合组网）"></Checkbox>
            <Checkbox label="物联网"></Checkbox>
            <Checkbox label="IDC"></Checkbox>
            <Checkbox label="维护服务产品（客户云网整体安全托管服务产品、客户网络代维、重要通信保障、机房无忧、电路无忧、卫星应急服务、应急供电、云堤）"></Checkbox>
            <Checkbox label="其他"></Checkbox>
        </CheckboxGroup>
        <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;margin-top:30px;">
          <Checkbox
              :indeterminate="indeterminate"
              :value="checkAll"
              @click.prevent.native="handleCheckAll2">全选 —— 擅长领域</Checkbox>
        </div>
        <CheckboxGroup v-model="checkAllGroup2" @on-change="checkAllGroupChange2">
            <Checkbox label="传统带宽型"></Checkbox>
            <Checkbox label="云"></Checkbox>
            <Checkbox label="物联网"></Checkbox>
            <Checkbox label="IDC"></Checkbox>
            <Checkbox label="业务排障"></Checkbox>
            <Checkbox label="业务验证"></Checkbox>
            <Checkbox label="解决方案"></Checkbox>
            <Checkbox label="培训"></Checkbox>
            <Checkbox label="其他"></Checkbox>
        </CheckboxGroup>
    </Modal>
  </div>
</template>

<script>
// import CtsiModal from "../components/ctsi-modal";

export default {
  data() {
    return {
      isShowModal: false,
      indeterminate: true,
      checkAll: false,
      checkAllGroup: ["香蕉", "西瓜"]
    };
  },
  methods: {
    showModal() {
      this.isShowModal = true;
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
    handleCheckAll1() {
      if (this.indeterminate) {
        this.checkAll = false;
      } else {
        this.checkAll = !this.checkAll;
      }
      this.indeterminate = false;

      if (this.checkAll) {
        this.checkAllGroup = ["香蕉", "苹果", "西瓜"];
      } else {
        this.checkAllGroup = [];
      }
    },
    checkAllGroupChange1(data) {
      if (data.length === 3) {
        this.indeterminate = false;
        this.checkAll = true;
      } else if (data.length > 0) {
        this.indeterminate = true;
        this.checkAll = false;
      } else {
        this.indeterminate = false;
        this.checkAll = false;
      }
    },
    handleCheckAll2() {
      if (this.indeterminate) {
        this.checkAll = false;
      } else {
        this.checkAll = !this.checkAll;
      }
      this.indeterminate = false;

      if (this.checkAll) {
        this.checkAllGroup = ["香蕉", "苹果", "西瓜"];
      } else {
        this.checkAllGroup = [];
      }
    },
    checkAllGroupChange2(data) {
      if (data.length === 3) {
        this.indeterminate = false;
        this.checkAll = true;
      } else if (data.length > 0) {
        this.indeterminate = true;
        this.checkAll = false;
      } else {
        this.indeterminate = false;
        this.checkAll = false;
      }
    }
  }
  // components: {
  //   CtsiModal
  // }
};
</script>

<style scoped>
.cusItem {
  width: 90px;
  height: 50px;
  border: 1px solid #bbbbbb;
}
</style>


