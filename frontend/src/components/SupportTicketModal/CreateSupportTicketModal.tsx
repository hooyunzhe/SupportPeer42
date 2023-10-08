import { Box, Modal } from '@mantine/core';
import SupportTicketHeader from './SupportTicketHeader';
import SupportTicketContent from './SupportTicketContent';
import SupportTicketFooter from './SupportTicketFooter';
import {
  useSelectedSupportTicket,
  useSupportTicketActions,
} from '@/lib/stores/useSupportTicketStore';
import { useCreateTicket, useTextFieldInput, useUtilActions } from '@/lib/stores/useUtilStore';
import { eventNames } from 'process';
import CreateSupportTicketContent from './CreateSupportTicketContent';
import CreateSupportTicketFooter from './CreateSupportTicketFooter';
import CreateSupportTicketHeader from './CreateSupportTicketHeader';

export default function CreateSupportTicketModal() {
  const textFieldInput = useTextFieldInput();
  const createTicket = useCreateTicket();
  const { setCreateTicket } = useUtilActions();

  return (
    <Modal
      opened={createTicket}
      onClose={() => setCreateTicket(false)}
      centered
      withCloseButton={false}
      padding='0'
      size='30vw'
      radius='15px'
      style={{
        overflow: 'hidden',
        borderRadius: '100px',
      }}
    >
      <Box h='49.5vh'>
        <CreateSupportTicketHeader title={textFieldInput} status={true} />
        <CreateSupportTicketContent />
        <CreateSupportTicketFooter
          user={'your name'}
          importance={''}
          category={''}
          isOpen={true}
          location={''}
        />
      </Box>
    </Modal>
  );
}
