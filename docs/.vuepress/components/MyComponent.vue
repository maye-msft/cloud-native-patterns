<template>
<div style="text-align:left">
  <div><input type="checkbox"><label>CCC</label></div>
    <input type="checkbox"><label>CCC</label>
    <button @click="hello(1)">aaa</button>
    </div>
</template>
<script>
export default {
    methods:{
        hello(val) {
            window.alert(val)
        }
    }
}
</script>
