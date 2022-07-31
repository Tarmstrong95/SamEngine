import React from "react";
import "./Panel.css";
import Resizer from "../Resizer";

interface PanelProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Panel: React.FC<PanelProps> = ({ children, ...props }) => {
  const resizerRef = React.useRef<HTMLDivElement>(null);
  const [pos, setPos] = React.useState(window.innerWidth - 150);

  return (
    <div
      className="panel rightPanel"
      style={{ width: window.innerWidth - pos + 5 }}
      {...props}
    >
      <Resizer refObject={resizerRef} callback={setPos} />
      {children}
    </div>
  );
};

export default Panel;
