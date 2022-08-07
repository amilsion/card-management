<template>
  <v-dialog
      :value="true"
      persistent
      max-width="290"
    >
    <v-card>
        <v-card-title class="text-h5">
          Excluir esse cartão?
        </v-card-title>
        <v-card-text>Tem certeza de excluir este cartão e não reutilizado.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="$emit('close')"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="red darken-3"
            text
            @click="$store.dispatch('deleteTask', task.id)"
          >
            Sim
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'DialogDelete',
    props:['task']
}
</script>

<style>

</style>