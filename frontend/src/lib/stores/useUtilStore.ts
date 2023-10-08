import { create } from 'zustand';

interface UtilStore {
  data: {
    textFieldInput: string;
  };
  actions: {
    setTextFieldInput: (newInput: string) => void;
  };
}

type StoreSetter = (helper: (state: UtilStore) => Partial<UtilStore>) => void;

function setTextFieldInput(set: StoreSetter, newInput: string): void {
  set(({ data }) => ({
    data: {
      ...data,
      textFieldInput: newInput,
    },
  }));
}

const useUtilStore = create<UtilStore>()((set) => ({
  data: {
    textFieldInput: '',
  },
  actions: {
    setTextFieldInput: (newInput) => setTextFieldInput(set, newInput),
  },
}));

export const useTextFieldInput = () =>
  useUtilStore((state) => state.data.textFieldInput);
export const useUtilActions = () => useUtilStore((state) => state.actions);
