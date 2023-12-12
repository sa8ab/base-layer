export const getErrorMessage = (error?: any) => {
  if (!error) return undefined;
  if (error.response?.data?.errors?.length)
    return error.response?.data?.errors[0];
  if (error.message) return error.message;
  return undefined;
};
