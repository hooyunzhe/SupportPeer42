import { create } from 'zustand';
import { SupportTicketType } from '@/types/SupportTicketType';

interface SupportTicketStore {
  data: {
    supportTickets: SupportTicketType[];
    selectedSupportTicket: SupportTicketType | undefined;
  };
  actions: {
    createSupportTicket: (
      id: number,
      title: string,
      description: string,
      category: string,
      flag: boolean,
      importance: string,
      location: string,
      user: string,
    ) => void;
    setSelectedSupportTicket: (id: number | undefined) => void;
  };
}

type StoreSetter = (
  helper: (state: SupportTicketStore) => Partial<SupportTicketStore>,
) => void;

function createSupportTicket(
  set: StoreSetter,
  id: number,
  title: string,
  description: string,
  category: string,
  flag: boolean,
  importance: string,
  location: string,
  user: string,
): void {
  set(({ data }) => ({
    data: {
      ...data,
      supportTickets: [
        ...data.supportTickets,
        {
          id: id,
          title: title,
          description: description,
          isOpen: true,
          category: category,
          flag: flag,
          importance: importance,
          location: location,
          user: user,
          chuppers: [],
        },
      ],
    },
  }));
}

function setSelectedSupportTicket(
  set: StoreSetter,
  id: number | undefined,
): void {
  set(({ data }) => ({
    data: {
      ...data,
      selectedSupportTicket: data.supportTickets.find(
        (supportTicket) => supportTicket.id === id,
      ),
    },
  }));
}

const useSupportTicketStore = create<SupportTicketStore>()((set) => ({
  data: {
    supportTickets: [
      {
        id: 1,
        title: 'Red dot of death',
        category: 'Tech',
        description: 'This is a grave issue',
        isOpen: false,
        flag: false,
        importance: 'II',
        location: 'U91-Z05-S01',
        user: 'leu-lee',
        chuppers: ['Thila'],
      },
      // {
      //   id: 2,
      //   title: 'Rainbow spinning wheel',
      //   category: 'Tech',
      //   description: 'Help me!',
      //   isOpen: false,
      //   flag: true,
      //   importance: 'III',
      //   user: 'amaligno',
      //   chuppers: ['Thila', 'Bunyod'],
      // },
    ],
    selectedSupportTicket: undefined,
  },
  actions: {
    createSupportTicket: (
      id,
      title,
      description,
      category,
      flag,
      importance,
      location,
      user,
    ) =>
      createSupportTicket(
        set,
        id,
        title,
        description,
        category,
        flag,
        importance,
        location,
        user,
      ),
    setSelectedSupportTicket: (id) => setSelectedSupportTicket(set, id),
  },
}));

export const useSupportTickets = () =>
  useSupportTicketStore((state) => state.data.supportTickets);
export const useSelectedSupportTicket = () =>
  useSupportTicketStore((state) => state.data.selectedSupportTicket);
export const useSupportTicketActions = () =>
  useSupportTicketStore((state) => state.actions);
