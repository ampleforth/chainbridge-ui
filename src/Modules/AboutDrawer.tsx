import React from "react";

import { makeStyles, createStyles, ITheme } from "@chainsafe/common-theme";
import CustomDrawer from "../Components/Custom/CustomDrawer";
import { Button, Typography } from "@chainsafe/common-components";

const useStyles = makeStyles(({ constants, zIndex }: ITheme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      zIndex: zIndex?.layer3,
    },
    link: {
      color: "#ffffff",
    },
    buttons: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      "& *": {
        marginRight: constants.generalUnit,
        textDecoration: "none",
      },
    },
  })
);

interface IAboutDrawerProps {
  open: boolean;
  close: () => void;
}

const AboutDrawer: React.FC<IAboutDrawerProps> = ({
  open,
  close,
}: IAboutDrawerProps) => {
  const classes = useStyles();

  return (
    <CustomDrawer onClose={close} open={open} className={classes.root}>
      <Typography variant="h1" component="h4">
        What is the AMPL Bridge?
      </Typography>
      <Typography component="p" variant="h5">
        The AMPL Bridge is a n-way blockchain bridge which allows AMPL to be
        transfer between any two connected blockchains.
        <br /><br /><br />

        This POA-bridge currently supports transfers between Ropsten, BSC testnet
        and Meter testnet and is validated by <a href="#" className={classes.link}>Meter</a>, Relayer2 and Relayer3.
        <br /><br /><br />

        <a href="#" className={classes.link}>Learn more</a> about how AMPL works acorss muliple chains.
      </Typography>
      <section className={classes.buttons}>
        <Button onClick={() => close()} variant="outline">
          OK
        </Button>
        <a
          rel="noopener noreferrer"
          href={process.env.REACT_APP_SUPPORT_URL}
          target="_blank"
        >
          <Button variant="outline">
            Ask a question on {process.env.REACT_APP_SUPPORT_SERVICE}
          </Button>
        </a>
      </section>
    </CustomDrawer>
  );
};

export default AboutDrawer;
