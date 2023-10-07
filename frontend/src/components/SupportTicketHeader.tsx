import { Flex, Title } from '@mantine/core';

interface SupportTicketHeaderProps {
  title: string;
  status: boolean;
}

export default function SupportTicketHeader({
  title,
  status,
}: SupportTicketHeaderProps) {
  return (
    <Flex
      bg={status ? 'green' : 'red'}
      w='100%'
      h='25%'
      justify={'center'}
      align='center'
    >
      <Title order={3}>{title}</Title>
    </Flex>
  );
}