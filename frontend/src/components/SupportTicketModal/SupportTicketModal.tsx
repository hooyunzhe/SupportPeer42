import { Box, Modal } from '@mantine/core';
import SupportTicketHeader from './SupportTicketHeader';
import SupportTicketContent from './SupportTicketContent';
import SupportTicketFooter from './SupportTicketFooter';
import {
  useSelectedSupportTicket,
  useSupportTicketActions,
} from '@/lib/stores/useSupportTicketStore';
import { useTextFieldInput } from '@/lib/stores/useUtilStore';

export default function SupportTicketModal() {
  const selectedSupportTicket = useSelectedSupportTicket();
  const { setSelectedSupportTicket } = useSupportTicketActions();

  return (
    selectedSupportTicket && (
      <Modal
        opened={selectedSupportTicket !== undefined}
        onClose={() => setSelectedSupportTicket(undefined)}
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
          <SupportTicketHeader
            title={selectedSupportTicket.title}
            status={selectedSupportTicket.isOpen}
          />
          <SupportTicketContent
            description={selectedSupportTicket.description}
          />
          <SupportTicketFooter
            user={selectedSupportTicket.user}
            importance={selectedSupportTicket.importance}
            category={selectedSupportTicket.category}
            isOpen={selectedSupportTicket.isOpen}
            location={selectedSupportTicket.location}
          />
        </Box>
      </Modal>
    )
  );
}
