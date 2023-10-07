import { PageView } from '@/types/PageView';
import { Flex, NavLink, Space, Title } from '@mantine/core';

interface NavigationMenuProps {
  currentPageView: PageView;
  changePageView: (newPageView: PageView) => void;
}

export default function NavigationMenu({
  currentPageView,
  changePageView,
}: NavigationMenuProps) {
  return (
    <Flex
      w='8%'
      h='80%'
      p='0.5vw'
      bg='white'
      style={{
        borderTopRightRadius: '15px',
        borderBottomRightRadius: '15px',
      }}
      direction='column'
    >
      <Title order={4} ml='xs'>
        Support Peer
      </Title>
      <Space h='xs' />
      <NavLink
        label='Dashboard'
        active={currentPageView === PageView.DASHBOARD}
        onClick={() => changePageView(PageView.DASHBOARD)}
      />
      <NavLink
        label='Browse'
        active={currentPageView === PageView.BROWSE}
        onClick={() => changePageView(PageView.BROWSE)}
      />
      <NavLink
        label='My Tickets'
        active={currentPageView === PageView.MY_TICKETS}
        onClick={() => changePageView(PageView.MY_TICKETS)}
      />
    </Flex>
  );
}
