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
    <Flex
      bg={status ? 'green' : 'red'}
      w='100%'
      h='25%'
      justify={'space-evenly'}
      align='center'
    >
      <Flex>
        <Title order={3}>{title}</Title>
      </Flex>
      <Flex>
        <Avatar color='black'></Avatar>
        <Avatar color='black'></Avatar>
      </Flex>
    </Flex>
  );
}
