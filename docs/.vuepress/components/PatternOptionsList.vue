<template>
  <div>
      <h4>100 Patterns</h4>
      <option-list title="Technical Domain" shortCode="domain" :options="tech" @filterChanged="filterChanged"></option-list>
      <option-list title="DevOps" shortCode="devops" :options="devops" @filterChanged="filterChanged"></option-list>
      <option-list title="Language" shortCode="lang" :options="langs" @filterChanged="filterChanged"></option-list>
      <option-list title="Infrastructure as Code" shortCode="iac" :options="iac" @filterChanged="filterChanged"></option-list>
      <azure-service-list :productCate="azureSrvs.default"  @filterChanged="filterChanged"></azure-service-list>
  </div>
</template>

<script>
const langs = require("../utils/lang.json");
const devops = require("../utils/devops.json");
const iac = require("../utils/iac.json");
// const tech = require("../utils/tech.json");
const azureSrvs = require("../utils/azure.js");
const {filter} = require("../utils/filter.js");

const tech = {};
for (const idx in azureSrvs.default) {
  const domain = azureSrvs.default[idx];
  tech[domain.name] = {
    name: domain.name,
  };
}

import OptionList from './OptionList.vue'
import AzureServiceList from './AzureServiceList.vue'
export default {
  components: { OptionList, AzureServiceList },
    data(){
        return {
            langs:langs,
            devops:devops,
            iac:iac,
            tech:tech,
            azureSrvs:azureSrvs,
            filter:filter
        }
    }, methods:{
        filterChanged(param) {
          const idx = this.filter[param.name].indexOf(param.value)
          if(param.checked && idx==-1) {
            this.filter[param.name].push(param.value)
          } else if(!param.checked && idx!=-1) { 
            this.filter[param.name].splice(idx)
          }
          
        }
    }
}
</script>

<style scoped>
button {
  background-color: #4CAF50;
}
</style>