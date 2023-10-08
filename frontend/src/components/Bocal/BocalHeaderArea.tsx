import { Flex, Text } from '@mantine/core';
import BocalStatCard from './BocalStatCard';

export default function BocalHeaderArea() {
  return (
    <Flex w='100%' h='40%' direction='column' align='center'>
      <Text
        size='3vw'
        variant='gradient'
        mt='2vh'
        gradient={{ from: 'darkgreen', to: 'blue', deg: 90 }}
      >
        Support Peer
      </Text>
      <Flex w='75%' h='100%' justify='space-around' align='center'>
        <BocalStatCard value={1} description='ticket flagged with bocal' />
        <BocalStatCard value={3} description='open tickets' />
        <BocalStatCard value={7} description='closed tickets' />
      </Flex>
    </Flex>
  );
}
