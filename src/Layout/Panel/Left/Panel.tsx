import React from "react";
import "./Panel.css";
import Resizer from "../Resizer";

interface PanelProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Panel: React.FC<PanelProps> = ({ children, ...props }) => {
  const resizerRef = React.useRef<HTMLDivElement>(null);
  const [pos, setPos] = React.useState(150);

  return (
    <div
      className="panel leftPanel"
      style={{ width: pos + 5 }}
      {...props}
    >
      {children}
      <Resizer refObject={resizerRef} callback={setPos} />
    </div>
  );
};

export default Panel;
