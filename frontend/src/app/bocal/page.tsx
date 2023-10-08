'use client';
import BocalHeaderArea from '@/components/BocalHeaderArea';
import BocalContentArea from '@/components/Bocal/BocalContentArea';
import { PageView } from '@/types/PageView';
import { Flex } from '@mantine/core';
import '@mantine/core/styles.css';
import { useState } from 'react';

export default function Home() {
  const [currentPageView, setCurrentPageView] = useState(PageView.DASHBOARD);

  return (
    <Flex
      w='100vw'
      h='100vh'
      bg='cyan'
      direction='column'
      justify='space-between'
      align='center'
    >
      <BocalHeaderArea
        currentPageView={currentPageView}
        changePageView={(newPageView) => setCurrentPageView(newPageView)}
      />
      <BocalContentArea currentPageView={currentPageView} />
    </Flex>
  );
}
