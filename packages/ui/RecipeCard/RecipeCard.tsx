import { NextLink } from '@mantine/next'
import { createStyles, Paper, Title, Button } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    height: 440,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.colors.dark,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },

  button: {
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}));

interface ArticleCardImageProps {
  id: string;
  title: string;
}

export function RecipeCard({ id, title }: ArticleCardImageProps) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(/placeholder.jpg)` }}
      className={classes.card}
    >
      <div>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button component={NextLink} href={`/recipe/${id}`} color='dark' className={classes.button}>
        Zobacz przepis
      </Button>
    </Paper>
  );
}