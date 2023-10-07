import type { Metadata } from 'next';
import { MantineProvider } from '@mantine/core';

export const metadata: Metadata = {
  title: 'Support Peer 42',
  description: 'Support your peers in 42 today!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body style={{ margin: '0px', overflow: 'hidden' }}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
