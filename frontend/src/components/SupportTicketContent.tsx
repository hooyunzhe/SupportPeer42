import { Box } from '@mantine/core';

interface SupportTicketContentProps {
  description: string;
}

export default function SupportTicketContent({
  description,
}: SupportTicketContentProps) {
  return (
    <Box h='55%' w='100%' bg='blue'>
      {description}
    </Box>
  );
}
