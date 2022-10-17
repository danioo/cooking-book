import { createStyles, Container, Title, Text, Button, Group } from '@mantine/core'
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
    textAlign: 'center',
  },

  content: {
    paddingTop: 220,
    zIndex: 1,

    [theme.fn.smallerThan('sm')]: {
      paddingTop: 120,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 38,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 540,
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,
  }
}))

export default function Custom404() {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.content}>
        <Title className={classes.title}>Nothing to see here</Title>
        <Text color="dimmed" size="lg" align="center" className={classes.description}>
          Page you are trying to open does not exist. You may have mistyped the address, or the
          page has been moved to another URL. If you think this is an error contact support.
        </Text>
        <Link href="/" passHref>
          <Button component="a" size="md">Take me back to home page</Button>
        </Link>
      </div>
    </Container>
  )
}