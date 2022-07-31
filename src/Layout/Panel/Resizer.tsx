import React from "react";
import './index.css'

interface ResizerProps {
  refObject: React.RefObject<HTMLDivElement>;
  callback: React.Dispatch<React.SetStateAction<number>>;
}

const Resizer: React.FC<ResizerProps> = ({ refObject, callback }) => {
  React.useEffect(() => {
    if (!refObject.current) return;

    const mover = (e: any) => {
      callback(e.pageX);
    };

    const dragger = () => {
      window.addEventListener("mousemove", mover);
    };

    const remover = () => window.removeEventListener("mousemove", mover);

    refObject.current.addEventListener("mousedown", dragger);
    refObject.current.addEventListener("mouseup", remover);
  }, [refObject.current]);

  return <div className="resizer" ref={refObject}></div>;
};

export default Resizer;
