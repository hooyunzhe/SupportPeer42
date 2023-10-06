'use client';
import '@mantine/core/styles.css';
import { Box } from '@mantine/core';
import SupportTicket from '@/components/SupportTicket';
import SupportTicketHeader from '@/components/SupportTicketHeader';

export default function Home() {
  return (
    <Box
      w='100vw'
      h='100vh'
      bg='cyan'
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <SupportTicket title='Title' status={false} />
    </Box>
  );
}
