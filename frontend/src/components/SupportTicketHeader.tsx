import { Avatar, Badge, Flex, Title } from '@mantine/core';

interface SupportTicketHeaderProps {
  title: string;
  status: boolean;
}

export default function SupportTicketHeader({
  title,
  status,
}: SupportTicketHeaderProps) {
  return (
    <Flex bg='black' w='100%' h='25%' justify={'space-between'} align='center'>
      <Flex ml='10'>
        <Title order={3} c='white'>
          {title}
        </Title>
      </Flex>
      <Flex align='center' justify='space-between' w='60' mr='10'>
        <Badge color='green'></Badge>
        <Avatar src='elon.png' size='20'></Avatar>
      </Flex>
    </Flex>
  );
}
