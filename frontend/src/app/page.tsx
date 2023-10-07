'use client';
import '@mantine/core/styles.css';
import { Flex } from '@mantine/core';
import { useState } from 'react';
import { PageView } from '@/types/PageView';
import HeaderArea from '@/components/HeaderArea';
import ContentArea from '@/components/ContentArea';

export default function Home() {
  const [currentPageView, setCurrentPageView] = useState(PageView.DASHBOARD);

  return (
    <Flex w='100vw' h='100vh' bg='cyan' direction='column'>
      <HeaderArea
        currentPageView={currentPageView}
        changePageView={(newPageView) => setCurrentPageView(newPageView)}
      />
      <ContentArea currentPageView={currentPageView} />
    </Flex>
  );
}
