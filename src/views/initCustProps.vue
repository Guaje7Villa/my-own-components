<template>
  <div>
    <h1>点击显示选择弹框</h1>
    <br>
    <Button type="ghost" class="button is-primary" @click="showModal">显示</Button>
    <Button type="ghost" class="button is-primary" @click="goback">返回</Button>
     <Modal
        v-model="isShowModal"
        title="请选择相关内容..."
        @on-ok="ok"
        @on-cancel="cancel">
        <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
          <Checkbox
              :indeterminate="indeterminate1"
              :value="checkAll1"
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
              :indeterminate="indeterminate2"
              :value="checkAll2"
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
export default {
  data() {
    return {
      isShowModal: false,
      indeterminate1: false,
      indeterminate2: false,
      checkAll1: false,
      checkAll2: false,
      checkAllGroup1: [],
      checkAllGroup2: []
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
      if (this.indeterminate1) {
        this.checkAll1 = false;
      } else {
        this.checkAll1 = !this.checkAll1;
      }
      this.indeterminate1 = false;

      if (this.checkAll1) {
        this.checkAllGroup1 = [
          "传统带宽型业务",
          "云（云接入、云迁移、混合组网）",
          "物联网",
          "IDC",
          "维护服务产品（客户云网整体安全托管服务产品、客户网络代维、重要通信保障、机房无忧、电路无忧、卫星应急服务、应急供电、云堤）",
          "其他"
        ];
      } else {
        this.checkAllGroup1 = [];
      }
    },
    checkAllGroupChange1(data) {
      if (data.length === 6) {
        this.indeterminate1 = false;
        this.checkAll1 = true;
      } else if (data.length > 0) {
        this.indeterminate1 = true;
        this.checkAll1 = false;
      } else {
        this.indeterminate1 = false;
        this.checkAll1 = false;
      }
    },
    handleCheckAll2() {
      if (this.indeterminate2) {
        this.checkAll2 = false;
      } else {
        this.checkAll2 = !this.checkAll2;
      }
      this.indeterminate2 = false;

      if (this.checkAll2) {
        console.log("handleCheckAll2 true");
        this.checkAllGroup2 = [
          "传统带宽型",
          "云",
          "物联网",
          "IDC",
          "业务排障",
          "业务验证",
          "解决方案",
          "培训",
          "其他"
        ];
      } else {
        console.log("handleCheckAll2 false");
        this.checkAllGroup2 = [];
      }
    },
    checkAllGroupChange2(data) {
      console.log("checkAllGroupChange2");
      if (data.length === 6) {
        this.indeterminate2 = false;
        this.checkAll2 = true;
      } else if (data.length > 0) {
        this.indeterminate2 = true;
        this.checkAll2 = false;
      } else {
        this.indeterminate2 = false;
        this.checkAll2 = false;
      }
    }
  }
};
</script>

<style>
.ivu-modal {
  width: 800px !important;
}
</style>


