import type { AxiosInstance, AxiosProgressEvent } from "axios";

interface Params<T> {
  onUpload: (arg0: T) => void;
  axiosInstance: AxiosInstance;
  onError?: (e: any) => void;
  multiple?: boolean;
  uploadUrl?: string;
}

export const useUploadBase = <T = any>({
  multiple = true,
  onUpload,
  onError,
  axiosInstance,
  uploadUrl = "/upload",
}: Params<T>) => {
  const isUploading = ref<boolean>(false);
  const progress = ref<number>(0);
  const controller = ref<AbortController | undefined>();

  const upload = async (e: Event) => {
    const files = (e.target as HTMLInputElement).files;
    if (!files || !files.length) {
      return;
    }

    const formData = new FormData();
    if (multiple) {
      console.log("files", files);

      Array.from(files).forEach((file: File) => {
        formData.append(`files[]`, file);
      });
    } else {
      const file = files[0];
      formData.append("file", file);
    }
    isUploading.value = true;
    try {
      controller.value = new AbortController();
      const { data } = await axiosInstance.post(uploadUrl, formData, {
        signal: controller.value?.signal,
        onUploadProgress: (e: AxiosProgressEvent) => {
          const percentCompleted = Math.floor(
            (e.loaded * 100) / (e.total || 0)
          );
          progress.value = percentCompleted;
        },
      });
      console.log(data);

      onUpload(data);
    } catch (e) {
      console.log(e);
      onError?.(e);
    } finally {
      isUploading.value = false;
      progress.value = 0;
    }
  };

  return {
    upload,
    isUploading,
    progress,
  };
};
