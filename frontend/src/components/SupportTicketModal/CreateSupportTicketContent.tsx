import { Box, Text, TextInput } from '@mantine/core';

interface SupportTicketContentProps {
  description: string;
}

export default function CreateSupportTicketContent() {
  return (
    <TextInput h='80%' w='100%' bg='grey' p='0.4vw' placeholder='Describe your issue'>
    </TextInput>
  );
}
