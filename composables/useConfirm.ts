export interface ConfirmState {
  text?: string;
  onAccept?: () => void;
  title?: string;
  color?: string;
  autoOpen?: boolean;
}

export const useConfirm = (params: ConfirmState) => {
  const { open: openRaw, close } = usePopup("confirm");

  const open = () => openRaw(params);

  open();

  return {
    open,
    close,
  };
};
