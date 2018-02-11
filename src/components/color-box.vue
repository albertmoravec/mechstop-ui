<template>
  <div id="border">
      <div id="box" :style="colorStyle"></div>
  </div>
</template>

<script>
export default {
    name: 'color-box',
    props: {
        color: {
            type: String,
            required: true,
            validator: function(value) {
                return value.length >= 3 && value.length <= 6 
            }
        }
    },
    computed: {
        colorStyle() {
            return  {
                backgroundColor: this.color
            }
        }
    }
}
</script>

<style scoped>
#border {
    height: 25px;
    width: 25px;
    display: inline-block;
    border: 1px solid #e6e6e6;
    border-radius: 4px; 
    padding: 2px;
}

#box {
    height: 100%;
    width: 100%;
    border-radius: 2px; 
}
</style>
