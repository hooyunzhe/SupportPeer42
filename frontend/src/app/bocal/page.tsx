'use client';
import '@mantine/core/styles.css';
import { Flex } from '@mantine/core';
import BocalHeaderArea from '@/components/Bocal/BocalHeaderArea';
import BocalContentArea from '@/components/Bocal/BocalContentArea';
import SupportTicketModal from '@/components/SupportTicketModal/SupportTicketModal';
import BocalFilterArea from '@/components/Bocal/BocalFilterArea';

export default function Home() {
  return (
    <Flex w='100vw' h='100vh' bg='#111111' direction='column' align='center'>
      <BocalHeaderArea />
      <BocalFilterArea />
      <BocalContentArea />
      <SupportTicketModal />
    </Flex>
  );
}
