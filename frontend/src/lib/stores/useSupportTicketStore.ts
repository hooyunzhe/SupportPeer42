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
        title: 'browser not responding',
        category: 'TECH',
        description:
          'My chrome has not been working even though I restart it many times,  my mouse become this spinny wheel thingy',
        isOpen: true,
        flag: false,
        importance: 'II',
        location: 'U91-Z05-S01',
        user: 'leu-lee',
        chuppers: [],
      },
      {
        id: 2,
        title: 'cannot retry python module',
        category: 'TECH',
        description:
          'I subscribe to the python piscine, and all the projects failed, now i cannot retry the python 0',
        isOpen: false,
        flag: true,
        importance: 'II',
        location: 'U91-Z05-S02',
        user: 'gdaryl',
        chuppers: ['Thila'],
      },
      {
        id: 3,
        title: 'toilet light not working',
        category: 'Building',
        description:
          'light blinking in male toilet next to kitchen in 190 unit',
        isOpen: false,
        flag: false,
        importance: 'I',
        location: 'U91-Z05-S03',
        user: 'amaligno',
        chuppers: [],
      },
      {
        id: 4,
        title: 'Cant login to Imac',
        category: 'TECH',
        description:
          "i can't login to my Imac after i came back from lunch. There's a red dot on the top left of the screen, does that have anything to do with the login? SOMEONE PLEASE HELP ME",
        isOpen: true,
        flag: true,
        importance: 'III',
        location: 'U91-Z05-S04',
        user: 'etlim',
        chuppers: [],
      },
      {
        id: 5,
        title: 'My Image is on all Imacs',
        category: 'TECH',
        description:
          "My Picture is on every Imac's login page. WHAT IS HAPPENING!?!? i just came in to campus and suddenly all my pictures are on the login pages'",
        isOpen: true,
        flag: true,
        importance: 'III',
        location: 'U91-Z05-S05',
        user: 'leu-lee',
        chuppers: ['Thila'],
      },
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
