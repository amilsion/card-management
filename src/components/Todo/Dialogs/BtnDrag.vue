<template>
    <v-btn
    id="btnDrag"
    elevation="8"
    color="primary"
    @click="$store.commit('sortTask')"
    >
      Ok
    </v-btn>
</template>

<script>
export default {
    name: "BtnDrag"
}
</script>

<style>
#btnDrag{
    position: fixed;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
  
}
</style>