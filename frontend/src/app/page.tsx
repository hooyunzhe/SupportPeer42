'use client';
import '@mantine/core/styles.css';
import { Box } from '@mantine/core';

export default function Home() {
  return (
    <Box
      w='100vw'
      h='100vh'
      bg='cyan'
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    ></Box>
  );
}
