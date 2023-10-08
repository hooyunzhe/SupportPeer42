import { Card } from '@mantine/core';
import SupportTicketHeader from './SupportTicketHeader';
import SupportTicketContent from './SupportTicketContent';
import SupportTicketFooter from './SupportTicketFooter';
import { SupportTicketType } from '@/types/SupportTicketType';
import { useSupportTicketActions } from '@/lib/stores/useSupportTicketStore';

interface SupportTicketProps {
  ticket: SupportTicketType;
}

export default function SupportTicket({ ticket }: SupportTicketProps) {
  const { setSelectedSupportTicket } = useSupportTicketActions();

  return (
    <Card
      w='20vw'
      h='33vh'
      p='0'
      bg='#232629'
      style={{
        borderRadius: '15px',
      }}
      onClick={() => setSelectedSupportTicket(ticket.id)}
    >
      <SupportTicketHeader title={ticket.title} status={ticket.isOpen} />
      <SupportTicketContent description={ticket.description} />
      <SupportTicketFooter
        user={ticket.user}
        importance={ticket.importance}
        category={ticket.category}
        status={ticket.isOpen}
      />
    </Card>
  );
}
