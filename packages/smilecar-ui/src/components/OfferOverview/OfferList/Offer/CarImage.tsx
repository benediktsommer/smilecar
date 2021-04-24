import { memo } from 'react';
import { createStyles, makeStyles } from '@material-ui/core';

interface IProps {
  src: string;
  alt: string;
}

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      overflow: 'hidden',
      textAlign: 'center',
    },
    img: {
      height: '10rem',
      opacity: 1,
      filter: 'none',

      [theme.breakpoints.up('md')]: {
        height: '8rem',
      },
    },
  })
);

export const CarImage = memo(({ alt, src }: IProps) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img className={classes.img} src={src} alt={alt} />
    </div>
  );
});
