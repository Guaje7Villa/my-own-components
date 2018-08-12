<template>
    <Row style="margin-top:10px;">
        <Col :span="spanVal" v-if="isMulti==false">
            <Select v-model="model1" filterable placeholder="单选">
                <Option v-for="item in dataList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </Col>
        <Col :span="spanVal" v-else>
            <Select v-model="model2" filterable multiple placeholder="多选">
                <Option v-for="item in dataList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </Col>
    </Row>
</template>
<script>
    export default {
        data () {
            return {
                dataList: [],
                model1: '',
                model2: []
            }
        },
        props: ["isMulti","queryCond","spanVal"],
        methods: {
          queryData() {
            //调用后台接口返回数据
            console.log("查询参数如下：");
            console.log("queryCond:"+this.queryCond);
            let queryCond = this.queryCond;
            // util.ajaxMethodWidthParams(url, "post", p).then(response => {
            //   console.log("返回数据如下：");
            //   console.log(response.data);
            // });


          

            this.dataList = [
                  {
                      value: 'New York',
                      label: 'New York'
                  },
                  {
                      value: 'London',
                      label: 'London'
                  },
                  {
                      value: 'Sydney',
                      label: 'Sydney'
                  },
                  {
                      value: 'Ottawa',
                      label: 'Ottawa'
                  },
                  {
                      value: 'Paris',
                      label: 'Paris'
                  },
                  {
                      value: 'Canberra',
                      label: 'Canberra'
                  }
            ]
          
          }
        },
        created() {
          this.queryData();
        }
    }
</script>
