'use client';
import '@mantine/core/styles.css';
import { Flex, Text } from '@mantine/core';
import { useState } from 'react';
import { PageView } from '@/types/PageView';
import HeaderArea from '@/components/HeaderArea';
import ContentArea from '@/components/ContentArea';

export default function Home() {
  const [currentPageView, setCurrentPageView] = useState(PageView.DASHBOARD);

  return (
    <Flex
      w='100vw'
      h='100vh'
      bg='#111111'
      direction='column'
      justify='flex-start'
      align='flex-start'
    >
      <HeaderArea
        currentPageView={currentPageView}
        changePageView={(newPageView) => setCurrentPageView(newPageView)}
      />
      <ContentArea currentPageView={currentPageView} />
    </Flex>
  );
}
