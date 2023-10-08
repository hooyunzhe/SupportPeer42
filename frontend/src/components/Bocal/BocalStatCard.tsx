import { Flex, Text, Title } from '@mantine/core';

interface BocalStatCardProps {
  value: number;
  description: string;
}

export default function BocalStatCard({
  value,
  description,
}: BocalStatCardProps) {
  return (
    <Flex
      w='14vw'
      h='14vw'
      style={{
        border: 'solid 5px cyan',
        borderRadius: '50%',
      }}
      direction='column'
      justify='center'
      align='center'
    >
      <Title size='3vw'>{value}</Title>
      <Text fs='italic'>{description}</Text>
    </Flex>
  );
}
