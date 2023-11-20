<script lang="ts" setup>
const props = defineProps<{
  submitText?: string;
  cancelText?: string;
  disabled?: boolean;
  loading?: boolean;
}>();

const emit = defineEmits<{
  (e: "submit"): void;
  (e: "cancel"): void;
}>();

const { t } = useI18n();
</script>

<template>
  <div class="popup-footer">
    <div class="actions">
      <RButton
        fill
        @click="emit('submit')"
        :disabled="disabled"
        :loading="loading"
      >
        {{ submitText || t("submit") }}
      </RButton>
      <RButton variant="bordered" @click="emit('cancel')">{{
        cancelText || t("cancel")
      }}</RButton>
    </div>
    <slot name="end" />
  </div>
</template>

<style scoped lang="scss">
.popup-footer {
  padding: space(2);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.actions {
  display: flex;
  gap: space(1);
}
</style>
