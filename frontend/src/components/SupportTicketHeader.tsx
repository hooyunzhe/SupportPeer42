import { Avatar, Flex, Title } from '@mantine/core';

interface SupportTicketHeaderProps {
  title: string;
  status: boolean;
}

export default function SupportTicketHeader({
  title,
  status,
}: SupportTicketHeaderProps) {
  return (
    <Flex bg='black' w='100%' h='25%' justify={'center'} align='center'>
      <Title order={3} c='white'>
        {title}
      </Title>
    </Flex>
  );
}
