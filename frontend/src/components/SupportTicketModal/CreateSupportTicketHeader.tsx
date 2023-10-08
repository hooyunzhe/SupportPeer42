import { Avatar, Box, Flex, Text, TextInput } from '@mantine/core';

interface SupportTicketHeaderProps {
  title: string;
  status: boolean;
}

export default function CreateSupportTicketHeader({
  title,
  status,
}: SupportTicketHeaderProps) {
  return (
    <Flex
      bg={`linear-gradient(-90deg, #25262b 15%, ${
        status ? '#2D8B00' : '#F75560'
      } 100%)`}
      w='100%'
      h='10%'
      align='center'
      justify={'space-between'}
      px='1vw'
    >
      <TextInput inputContainer={} fw='900' size='1rem' c='white' h='40%' w='85%'>
      </TextInput>
    </Flex>
  );
}
