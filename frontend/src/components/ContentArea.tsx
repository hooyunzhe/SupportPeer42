import { ScrollArea, SimpleGrid } from '@mantine/core';
import SupportTicket from './SupportTicket/SupportTicket';
import { useSupportTickets } from '@/lib/stores/useSupportTicketStore';
import { useTextFieldInput } from '@/lib/stores/useUtilStore';

export default function ContentArea() {
  const supportTickets = useSupportTickets();
  const textFieldInput = useTextFieldInput();

  return (
    <ScrollArea w='100%' h='75%'>
      <SimpleGrid cols={4} spacing='1.5vw' px='7%'>
        {supportTickets
          .filter(
            (ticket) =>
              !textFieldInput ||
              textFieldInput
                .split(' ')
                .filter((s) => s)
                .every(
                  (keyword) =>
                    ticket.title
                      .toLowerCase()
                      .split(' ')
                      .some(
                        (word: string) =>
                          word && word.startsWith(keyword.toLowerCase()),
                      ) ||
                    ticket.description
                      .toLowerCase()
                      .split(' ')
                      .some(
                        (word: string) =>
                          word && word.startsWith(keyword.toLowerCase()),
                      ),
                ),
          )
          .map((ticket, index) => (
            <SupportTicket key={index} ticket={ticket} />
          ))}
      </SimpleGrid>
    </ScrollArea>
  );
}
