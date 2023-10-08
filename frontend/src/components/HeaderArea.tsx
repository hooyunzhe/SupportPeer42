import { Button, Flex, Text, TextInput, Title } from '@mantine/core';
import { PageView } from '@/types/PageView';
import { useTextFieldInput, useUtilActions } from '@/lib/stores/useUtilStore';
import {
  useSupportTicketActions,
  useSupportTickets,
} from '@/lib/stores/useSupportTicketStore';
import { SupportTicketType } from '@/types/SupportTicketType';
import { useSelectedSupportTicket } from '@/lib/stores/useSupportTicketStore';
import SupportTicket from './SupportTicket/SupportTicket';

interface HeaderAreaProps {
  currentPageView: PageView;
  changePageView: (newPageView: PageView) => void;
}

export default function HeaderArea({
  currentPageView,
  changePageView,
}: HeaderAreaProps) {
  const supportTickets = useSupportTickets();
  const textFieldInput = useTextFieldInput();
  const { setTextFieldInput, setCreateTicket } = useUtilActions();

  return (
    <Flex w='100%' h='25%' py='3vh' justify='center' align='center'>
      <Flex
        w='100%'
        h='100%'
        direction='column'
        justify='space-between'
        align='center'
      >
        <Text
          size='3vw'
          variant='gradient'
          gradient={{ from: 'darkgreen', to: 'blue', deg: 90 }}
          h='100%'
        >
          Support Peer
        </Text>
        <Flex w='100%' justify='center'>
          <TextInput
            size='xl'
            w='50%'
            placeholder='What do you need help with?'
            value={textFieldInput}
            onChange={(event) => setTextFieldInput(event.target.value)}
          />
          <Button size='xl' color='dark' onClick={() => setCreateTicket(true)}>
            Create Ticket
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
