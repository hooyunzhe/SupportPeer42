import { Flex } from '@mantine/core';
import NavigationMenu from './NavigationMenu';
import { PageView } from '@/types/PageView';
import BocalStatCard from './BocalStatCard';

interface HeaderAreaProps {
  currentPageView: PageView;
  changePageView: (newPageView: PageView) => void;
}

export default function BocalHeaderArea({
  currentPageView,
  changePageView,
}: HeaderAreaProps) {
  return (
    <Flex
      w='100%'
      h='40%'
      py='3vh'
      bg='blue'
      justify='center'
      align='center'
      style={{
        borderBottomLeftRadius: '30px',
        borderBottomRightRadius: '30px',
      }}
    >
      <NavigationMenu
        currentPageView={currentPageView}
        changePageView={changePageView}
      />
      <Flex w='92%' h='100%' mr='8%' justify='space-evenly' align='center'>
        <BocalStatCard value={1} description='ticket flagged with bocal' />
        <BocalStatCard value={3} description='open tickets' />
        <BocalStatCard value={7} description='closed tickets' />
      </Flex>
    </Flex>
  );
}
