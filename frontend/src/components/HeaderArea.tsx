import { Button, Flex, Text, TextInput } from '@mantine/core';
import { useTextFieldInput, useUtilActions } from '@/lib/stores/useUtilStore';
import {
  useSupportTicketActions,
  useSupportTickets,
} from '@/lib/stores/useSupportTicketStore';
import { SupportTicketType } from '@/types/SupportTicketType';
import { useSelectedSupportTicket } from '@/lib/stores/useSupportTicketStore';
import SupportTicket from './SupportTicket/SupportTicket';

export default function HeaderArea() {
  const textFieldInput = useTextFieldInput();
  const { setTextFieldInput, setCreateTicket } = useUtilActions();

  return (
    <Flex
      w='100%'
      h='25%'
      direction='column'
      justify='space-evenly'
      align='center'
    >
      <Text
        size='3vw'
        variant='gradient'
        gradient={{ from: 'darkgreen', to: 'blue', deg: 90 }}
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
          Next
        </Button>
      </Flex>
    </Flex>
  );
}
