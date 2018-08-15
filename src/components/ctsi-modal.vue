<template>
    <Modal
        v-model="showModal"
        title="请选择..."
        @on-ok="ok"
        @on-cancel="cancel">
        <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
          <Checkbox
              :indeterminate="indeterminate"
              :value="checkAll"
              @click.prevent.native="handleCheckAll1">全选 —— 业务能力</Checkbox>
        </div>
        <CheckboxGroup v-model="checkAllGroup1" @on-change="checkAllGroup1Change">
            <Checkbox label="传统带宽型业务"></Checkbox>
            <Checkbox label="云（云接入、云迁移、混合组网）"></Checkbox>
            <Checkbox label="物联网"></Checkbox>
            <Checkbox label="IDC"></Checkbox>
            <Checkbox label="维护服务产品（客户云网整体安全托管服务产品、客户网络代维、重要通信保障、机房无忧、电路无忧、卫星应急服务、应急供电、云堤）"></Checkbox>
            <Checkbox label="其他"></Checkbox>
        </CheckboxGroup>
        </Modal>
</template>
<script>
export default {
  data() {
    return {
      indeterminate: true,
      checkAll: false,
      checkAllGroup1: [],
      myShowModal: this.showModal //1.创建props属性showModal的副本myShowModal
    };
  },
  props: ["showModal"],
  watch: {
    showModal(val) {
      this.myShowModal = val; //2.监听外部对props属性showModal的变更，并同步到组件内的data属性myShowModal中
    },
    myShowModal(val) {
      this.$emit("on-showModal-change", val); //3.组件内对myShowModal变更后向外部发送事件通知
    }
  },
  methods: {
    ok() {
      this.$Message.info("Clicked ok");
    },
    cancel() {
      this.$Message.info("Clicked cancel");
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
    checkAllGroup1Change(data) {
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
};
</script>
