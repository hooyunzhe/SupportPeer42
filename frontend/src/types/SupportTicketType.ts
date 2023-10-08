export interface SupportTicketType {
  id: number;
  title: string;
  description: string;
  isOpen: boolean;
  category: string;
  flag: boolean;
  importance: string;
  location: string;
  user: string;
  chuppers: string[];
}
