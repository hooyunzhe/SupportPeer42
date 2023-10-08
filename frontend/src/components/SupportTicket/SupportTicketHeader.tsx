import { Avatar, Badge, Flex, Title, Text } from '@mantine/core';

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
      bg={`linear-gradient(-90deg, #25262b 15%, ${
        status ? '#2D8B00' : '#F75560'
      } 100%)`}
      w='100%'
      h='20%'
      align='center'
      justify={'space-between'}
      px='1vw'
    >
      <Text fw='900' size='1rem' c='white' truncate='end' h='40%' w='85%'>
        {title}
      </Text>
      <Avatar src='elon.png' size='30' title='Bocalmusk'></Avatar>
    </Flex>
  );
}
