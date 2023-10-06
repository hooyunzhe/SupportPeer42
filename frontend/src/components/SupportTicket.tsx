import { Card } from '@mantine/core';
import SupportTicketHeader from './SupportTicketHeader';
import { Stats } from 'fs';
import SupportTicketContent from './SupportTicketContent';
import SupportTicketFooter from './SupportTicketFooter';

interface SupportTicketProps {
  title: string;
  description: string;
  status: boolean;
  user: string;
  flag: boolean;
  importance: number;
  category: string
}
export default function SupportTicket({
  title,
  description,
  status,
  user,
  flag,
  importance,
  category
}: SupportTicketProps) {
  return (
    <Card
      w='20vw'
      h='22vh'
      p='0'
      bg='#232629'
      style={{
        borderRadius: '15px',
      }}
    >
      <SupportTicketHeader title={title} status={status}></SupportTicketHeader>
      <SupportTicketContent description='This is a grave issue'></SupportTicketContent>
      <SupportTicketFooter user='leulee' importance='II' category='tech'></SupportTicketFooter>
    </Card>
  );
}
