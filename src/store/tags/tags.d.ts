export interface ITagsState {
  isLoading: boolean;
  error?: string;
  tags?: string[];
}

export interface IAction<T> extends Action<string> {
  type: string;
  payload?: T;
  error?: boolean;
  meta?: any;
}
