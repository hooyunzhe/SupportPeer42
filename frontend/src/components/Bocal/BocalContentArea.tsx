import { ScrollArea, SimpleGrid } from '@mantine/core';
import SupportTicket from '../SupportTicket/SupportTicket';
import { useSupportTickets } from '@/lib/stores/useSupportTicketStore';
import {
  useSelectedTech,
  useSelectedBuilding,
  useSelectedOpen,
  useSelectedClosed,
  useSelectedFlag,
} from '@/lib/stores/useUtilStore';

export default function BocalContentArea() {
  const supportTickets = useSupportTickets();
  const selectedTech = useSelectedTech();
  const selectedBuilding = useSelectedBuilding();
  const selectedOpen = useSelectedOpen();
  const selectedClosed = useSelectedClosed();
  const selectedFlag = useSelectedFlag();

  return (
    <ScrollArea w='100%' h='50%'>
      <SimpleGrid cols={4} spacing='1.5vw' px='7%'>
        {supportTickets
          .filter(
            (ticket) =>
              (ticket.category === 'TECH' ? selectedTech : selectedBuilding) &&
              (ticket.isOpen ? selectedOpen : selectedClosed),
          )
          .map((ticket, index) => (
            <SupportTicket key={index} ticket={ticket} />
          ))}
      </SimpleGrid>
    </ScrollArea>
  );
}
