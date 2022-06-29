<template>
  <div class="chk-list">
    <h4>{{ title }}</h4>
    <div v-for="opt in options" :key="opt" class="div-opt">
      <input
        :id="opt.name"
        type="checkbox"
        :value="opt.name"
        :checked="optionValues[opt.name]"
        @change="optionValues[opt.name]=!optionValues[opt.name];$emit('filterChanged', { name: shortCode, value: opt.name, checked: optionValues[opt.name] })"
      />
      <label :for="opt.name">{{ opt.name }}</label>
    </div>
  </div>
</template>

<script>
const langs = require("../utils/lang.json");
export default {
  props: ["title", "shortCode", "options"],
  data() {
    return {
      optionValues:{}
    };
  },
  mounted(){
    for(let opt in this.options) {
      this.optionValues[opt] = false
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
.chk-list {
  text-align: left;
  padding: 10px;
  font-size: 15px;
}
.chk-list label {
  padding-left: 10px;
}
.div-opt {
  padding: 2px;
}
</style>
