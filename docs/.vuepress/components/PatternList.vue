<template>
  <div>
      {{JSON.stringify(filter)}}
  </div>
</template>
<script>
const {filter} = require("../utils/filter.js");
export default {
    data() {
        return {
            filter:filter
        }
    }
}
</script>