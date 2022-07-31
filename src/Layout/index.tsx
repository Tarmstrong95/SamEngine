import React from "react";
import "./index.css";
import Panel from "./Panel/Panel";

interface LayoutProps {
  TopPanel: React.ReactNode;
  LeftPanel: React.ReactNode;
  RightPanel: React.ReactNode;
  BottomPanel: React.ReactNode;
  MainPanel: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  TopPanel,
  LeftPanel,
  RightPanel,
  BottomPanel,
  MainPanel,
}) => {
  return (
    <main>
      <section className="top">
        {TopPanel}
      </section>
      <section className="middle">
        {LeftPanel}
        {MainPanel}
        {RightPanel}
      </section>
      <section className="bottom">
        {BottomPanel}
      </section>
    </main>
  );
};

export default Layout;
