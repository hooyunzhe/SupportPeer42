import { create } from 'zustand';

interface UtilStore {
  data: {
    textFieldInput: string;
    selectedTech: boolean;
    selectedBuilding: boolean;
    selectedOpen: boolean;
    selectedClosed: boolean;
    selectedFlag: boolean;
    createTicket: boolean;
  };
  actions: {
    setTextFieldInput: (newInput: string) => void;
    setCreateTicket: (createTicket: boolean) => void;
    setSelectedTech: (selected: boolean) => void;
    setSelectedBuilding: (selected: boolean) => void;
    setSelectedOpen: (selected: boolean) => void;
    setSelectedClosed: (selected: boolean) => void;
    setSelectedFlag: (selected: boolean) => void;
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
      createTicket: createTicket,
    },
  }));
}

function setSelectedTech(set: StoreSetter, selected: boolean): void {
  set(({ data }) => ({
    data: {
      ...data,
      selectedTech: selected,
    },
  }));
}

function setSelectedBuilding(set: StoreSetter, selected: boolean): void {
  set(({ data }) => ({
    data: {
      ...data,
      selectedBuilding: selected,
    },
  }));
}

function setSelectedOpen(set: StoreSetter, selected: boolean): void {
  set(({ data }) => ({
    data: {
      ...data,
      selectedOpen: selected,
    },
  }));
}

function setSelectedClosed(set: StoreSetter, selected: boolean): void {
  set(({ data }) => ({
    data: {
      ...data,
      selectedClosed: selected,
    },
  }));
}

function setSelectedFlag(set: StoreSetter, selected: boolean): void {
  set(({ data }) => ({
    data: {
      ...data,
      selectedFlag: selected,
    },
  }));
}

const useUtilStore = create<UtilStore>()((set) => ({
  data: {
    textFieldInput: '',
    selectedTech: true,
    selectedBuilding: true,
    selectedOpen: true,
    selectedClosed: true,
    selectedFlag: false,
    createTicket: false,
  },
  actions: {
    setTextFieldInput: (newInput) => setTextFieldInput(set, newInput),
    setCreateTicket: (createTicket) => setCreateTicket(set, createTicket),
    setSelectedTech: (selected) => setSelectedTech(set, selected),
    setSelectedBuilding: (selected) => setSelectedBuilding(set, selected),
    setSelectedOpen: (selected) => setSelectedOpen(set, selected),
    setSelectedClosed: (selected) => setSelectedClosed(set, selected),
    setSelectedFlag: (selected) => setSelectedFlag(set, selected),
  },
}));

export const useTextFieldInput = () =>
  useUtilStore((state) => state.data.textFieldInput);
export const useCreateTicket = () =>
  useUtilStore((state) => state.data.createTicket);
export const useSelectedTech = () =>
  useUtilStore((state) => state.data.selectedTech);
export const useSelectedBuilding = () =>
  useUtilStore((state) => state.data.selectedBuilding);
export const useSelectedOpen = () =>
  useUtilStore((state) => state.data.selectedOpen);
export const useSelectedClosed = () =>
  useUtilStore((state) => state.data.selectedClosed);
export const useSelectedFlag = () =>
  useUtilStore((state) => state.data.selectedFlag);
export const useUtilActions = () => useUtilStore((state) => state.actions);
