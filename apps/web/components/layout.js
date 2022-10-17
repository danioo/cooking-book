import { AppShell } from '@mantine/core'

import { DoubleNavbar } from 'ui'

export default function Layout({ children }) {
  return (
    <AppShell navbar={<DoubleNavbar />}>
      {children}
    </AppShell>
  )
}