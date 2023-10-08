import { create } from 'zustand';

interface UtilStore {
  data: {
    textFieldInput: string;
    createTicket: boolean;
  };
  actions: {
    setTextFieldInput: (newInput: string) => void;
    setCreateTicket: (createTicket: boolean) => void;
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

function setCreateTicket(set: StoreSetter, createTicket: boolean): void {
  set(({ data }) => ({
    data: {
      ...data,
      createTicket: createTicket
    }
  }))
}

const useUtilStore = create<UtilStore>()((set) => ({
  data: {
    textFieldInput: '',
    createTicket: false,
  },
  actions: {
    setTextFieldInput: (newInput) => setTextFieldInput(set, newInput),
    setCreateTicket: (createTicket) => setCreateTicket(set, createTicket)
  },
}));

export const useTextFieldInput = () =>
  useUtilStore((state) => state.data.textFieldInput);
  export const useCreateTicket = () =>
  useUtilStore((state) => state.data.createTicket);
export const useUtilActions = () => useUtilStore((state) => state.actions);
