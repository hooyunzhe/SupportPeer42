import { Avatar, Badge, Flex, Text } from '@mantine/core';

interface SupportTicketFooterProp {
  user: string;
  importance: string;
  category: string;
  status: boolean;
}

export default function SupportTicketFooter({
  user,
  importance,
  category,
  status,
}: SupportTicketFooterProp) {
  return (
    <Flex
      h='20%'
      justify='space-between'
      w='100%'
      align='center'
      gap='30'
      bg={`linear-gradient(90deg, #25262b 15%, ${
        status ? '#F75560' : '#2D8B00'
      } 100%)`}
    >
      <Flex align='center'>
        <Avatar color='cyan'></Avatar>
        <Text c='blue'>{user}</Text>
      </Flex>
      <Flex justify='space-around' mr='3%' w='32%'>
        <Badge color='black'>{importance}</Badge>
        <Badge color='black'>{category}</Badge>
      </Flex>
    </Flex>
  );
}
