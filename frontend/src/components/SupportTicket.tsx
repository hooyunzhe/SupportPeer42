import { Card } from '@mantine/core';
import SupportTicketHeader from './SupportTicketHeader';
import SupportTicketContent from './SupportTicketContent';
import SupportTicketFooter from './SupportTicketFooter';
import SupportTicket from '@/types/SupportTicketType';

interface SupportTicketProps {
  ticket: SupportTicket;
}

export default function SupportTicket({ ticket }: SupportTicketProps) {
  return (
    <Card
      w='20vw'
      h='33vh'
      p='0'
      bg='#232629'
      style={{
        borderRadius: '15px',
      }}
    >
      <SupportTicketHeader title={ticket.title} status={ticket.status} />
      <SupportTicketContent description={ticket.description} />
      <SupportTicketFooter
        user={ticket.user}
        importance={ticket.importance}
        category={ticket.category}
        status={ticket.status}
      />
    </Card>
  );
}
