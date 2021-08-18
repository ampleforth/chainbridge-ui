import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import React, { useState } from "react";
import clsx from "clsx";
import AboutDrawer from "../Modules/AboutDrawer";
import MeterLogo from "../media/bridges/meter.png";

const useStyles = makeStyles(({ constants, palette, zIndex }: ITheme) => {
  return createStyles({
    root: {
      display: "flex",
      position: "fixed",
      justifyContent: "space-between",
      padding: `${constants.generalUnit * 2}px ${constants.generalUnit * 4}px`,
      width: "100%",
      bottom: 0,
      left: 0,
      backgroundColor: palette.additional["header"][1],
      borderTop: `1px solid ${palette.additional["header"][3]}`,
      color: palette.additional["header"][2],
      alignItems: "center",
      zIndex: zIndex?.layer1,
    },
    bridgeLogo: {
      width: "50px",
    }
  });
});

interface IAppFooter {}

const AppFooter: React.FC<IAppFooter> = () => {
  const classes = useStyles();
  const [aboutOpen, setAboutOpen] = useState<boolean>(false);
  return (
    <section>
      <AboutDrawer open={aboutOpen} close={() => setAboutOpen(false)} />
      <footer className={clsx(classes.root)}>
        <a href="#" onClick={() => setAboutOpen(true)}>Learn more</a>
        <a href="https://meter.io" target="_blank">
          <img src={MeterLogo} className={classes.bridgeLogo}/>
        </a>
      </footer>
    </section>
  );
};

export default AppFooter;
