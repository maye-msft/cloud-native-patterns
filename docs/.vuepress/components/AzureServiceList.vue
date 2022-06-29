<template>
  <div class="chk-list">
    <h4>Azure Services</h4>
    <template v-for="cate in productCate" :key="cate">
      <h6>{{ cate.name }}</h6>
      <div v-for="product in cate.products" :key="product.name" class="div-chk">
        <input
          :id="cate.name + '-' + product.name"
          type="checkbox"
          class="checkbox"
          :value="product.name"
          :checked="optionValues[cate.name + '-' + product.name]"
          @change="optionValues[cate.name + '-' + product.name]=!optionValues[cate.name + '-' + product.name];$emit('filterChanged', {name:'srv', value:product.name, checked:optionValues[cate.name + '-' + product.name]})"
        />
        <label
          :for="cate.name + '-' + product.name"
          :title="product.description"
          >{{ product.name }}</label
        >
      </div>
    </template>
  </div>
</template>

<script>
const azureSrvs = require("../utils/azure.js");
console.log(JSON.stringify(azureSrvs, null, 4));
export default {
  props:["productCate"],
  data() {
    return {
      optionValues:{}
    };
  },
    mounted(){
    for(let cate in this.productCate) {
      for(let product in cate.products) {
        const key = cate.name + '-' + product.name
        this.optionValues[key] = false
      }
    }
    
  },
  methods: {
    hello(val) {
      window.alert(val);
    },
  },
};
</script>
<style scoped>
h4 {
  padding: 0px;
  margin: 0px;
  margin-bottom: 10px;
}
h6 {
  padding: 0px;
  margin: 0px;
  margin-bottom: 10px;
  margin-top: 10px;
}
.chk-list {
  text-align: left;
  padding: 10px;
  font-size: 15px;
}
.chk-list label {
  padding-left: 10px;
}
.div-chk {
  display: flex;
  align-items: flex-start;
  padding: 2px
}

</style>
