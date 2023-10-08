import { Box, Text } from '@mantine/core';

interface SupportTicketContentProps {
  description: string;
}

export default function SupportTicketContent({
  description,
}: SupportTicketContentProps) {
  return (
    <Box h='80%' w='100%' bg='grey' p='0.4vw'>
      <Text c='white'>{description}</Text>
    </Box>
  );
}
