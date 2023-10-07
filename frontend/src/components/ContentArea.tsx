import { ScrollArea, SimpleGrid } from '@mantine/core';
import { PageView } from '@/types/PageView';
import SupportTicket from './SupportTicket';
import SupportTicketType from '@/types/SupportTicketType';

interface ContentAreaProps {
  currentPageView: PageView;
}

export default function ContentArea({ currentPageView }: ContentAreaProps) {
  const tickets: SupportTicketType[] = [
    {
      title: 'Red dot of death',
      category: 'Tech',
      description: 'This is a grave issue',
      flag: false,
      importance: 'II',
      status: false,
      user: 'leu-lee',
    },
    {
      title: 'Rainbow spinning wheel',
      category: 'Tech',
      description: 'Help me!',
      flag: true,
      importance: 'III',
      status: true,
      user: 'amaligno',
    },
  ];

  return (
    <ScrollArea w='100%' h='75%'>
      <SimpleGrid cols={4} spacing='1.5vw' px='7%'>
        {tickets.map((ticket, index) => (
          <SupportTicket key={index} ticket={ticket} />
        ))}
      </SimpleGrid>
    </ScrollArea>
  );
}
