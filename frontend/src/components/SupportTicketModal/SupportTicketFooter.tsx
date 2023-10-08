import { Avatar, Badge, Flex, Text } from '@mantine/core';

interface SupportTicketFooterProp {
  user: string;
  importance: string;
  category: string;
  isOpen: boolean;
  location: string;
}

export default function SupportTicketFooter({
  user,
  importance,
  category,
  isOpen,
  location,
}: SupportTicketFooterProp) {
  return (
    <Flex
      h='10%'
      w='100%'
      justify='space-between'
      align='center'
      bg={`linear-gradient(90deg, #25262b 15%, ${
        isOpen ? '#F75560' : '#2D8B00'
      } 100%)`}
      px='1vw'
    >
      <Flex w='50%' align='center' gap='1vw'>
        <Avatar color='cyan'></Avatar>
        <Text c='blue'>{user}</Text>
      </Flex>
      <Flex justify='space-around' mr='3%' w='50%'>
        <Badge color='black'>{location}</Badge>
        <Badge color='black'>{importance}</Badge>
        <Badge color='black'>{category}</Badge>
      </Flex>
    </Flex>
  );
}
