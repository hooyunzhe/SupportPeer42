'use client';
import '@mantine/core/styles.css';
import { Flex } from '@mantine/core';
import HeaderArea from '@/components/HeaderArea';
import ContentArea from '@/components/ContentArea';
import SupportTicketModal from '@/components/SupportTicketModal/SupportTicketModal';
import CreateSupportTicketModal from '@/components/SupportTicketModal/CreateSupportTicketModal';

export default function Home() {
  return (
    <Flex w='100vw' h='100vh' bg='#111111' direction='column'>
      <HeaderArea />
      <ContentArea />
      <SupportTicketModal />
      <CreateSupportTicketModal />
    </Flex>
  );
}
