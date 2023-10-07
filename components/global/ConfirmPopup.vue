<template>
  <RPopup :active="popup.active" @close="close" :title="context?.title">
    <span class="text">{{ context?.text }}</span>
    <template #footer>
      <div class="r-popup-footer actions">
        <RButton @click="onSubmit" :color="context?.color" fill>Submit</RButton>
        <RButton @click="close" :flat="true" cancel> Cancel </RButton>
      </div>
    </template>
  </RPopup>
</template>

<script setup lang="ts">
const { popup, context, close } = usePopup("confirm");

const onSubmit = () => {
  context.value?.onAccept?.();
  close();
};
</script>

<style scoped lang="scss">
.actions {
  display: flex;
  gap: 4px;
}
</style>
