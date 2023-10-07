import { Button, Flex, TextInput, Title } from '@mantine/core';
import NavigationMenu from './NavigationMenu';
import { PageView } from '@/types/PageView';

interface HeaderAreaProps {
  currentPageView: PageView;
  changePageView: (newPageView: PageView) => void;
}

export default function HeaderArea({
  currentPageView,
  changePageView,
}: HeaderAreaProps) {
  return (
    <Flex w='100%' h='25%' py='3vh' justify='center' align='center'>
      <NavigationMenu
        currentPageView={currentPageView}
        changePageView={changePageView}
      />
      <Flex
        w='92%'
        h='100%'
        mr='8%'
        direction='column'
        justify='space-evenly'
        align='center'
      >
        <Title>Open a support ticket</Title>
        <Flex w='100%' justify='center'>
          <TextInput
            size='xl'
            w='50%'
            placeholder='What do you need help with?'
          />
          <Button size='xl'>Next</Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
