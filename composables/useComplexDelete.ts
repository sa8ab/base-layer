interface Params<T> {
  onError: (arg0: T, arg1: any) => void;
  onSuccess: () => any;
  validator?: (arg0: T) => boolean;
}
interface IniitialRequest<T> {
  title?: string;
  text: string;
  deleteFunction: () => Promise<T>;
  context?: any;
}

export default <T = { hasError: boolean; [other: string]: any }>({
  onError,
  onSuccess,
  validator,
}: Params<T>) => {
  const contextRef = ref();

  const tryDelete = async (deleteFunction: () => Promise<T>) => {
    const data = await deleteFunction();
    if (validator ? validator(data) : (<any>data).hasError)
      onError(data, contextRef.value);
    else {
      onSuccess();
      contextRef.value = undefined;
    }
  };

  const initialDelete = ({
    title,
    text,
    deleteFunction,
    context,
  }: IniitialRequest<T>) => {
    contextRef.value = context;
    useConfirm({
      title,
      text,
      onAccept: () => tryDelete(deleteFunction),
    });
  };

  return {
    // return initial delete function
    initialDelete,
    tryDelete,
  };
};
