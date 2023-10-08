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
      bg={`linear-gradient(90deg, #25262b 15%, ${
        status ? '#2D8B00' : '#F75560'
      } 100%)`}
      w='100%'
      h='25%'
      justify={'center'}
      align='center'
    >
      <Title order={3} c='white'>
        {title}
      </Title>
    </Flex>
  );
}
