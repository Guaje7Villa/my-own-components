<template>
    <div class="main"> 
      <h1>自定义组件封装</h1>
        <CtsiSelect 
          :isMulti="isMulti"
          :queryCond="queryCond"
          :spanVal="spanVal"
        ></CtsiSelect>
    </div>
</template>

<script>
import CtsiSelect from '../components/ctsi-select'

export default {
  data () {
    return {
      isMulti: true,
      queryCond:'1',
      spanVal:24
    }
  },
  components: {
    CtsiSelect
  }
}
</script>

<style scoped>
  .main{
    width: 80%;
    height: 500px;
    border: 1px solid #BBBBBB;
    margin-left: 10%;
    margin-top: 10%;
  }

  h1 {
    text-align: center;
  }
</style>


