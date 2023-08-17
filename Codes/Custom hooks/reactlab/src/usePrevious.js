import React from "react";

const usePrevious = (val) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    ref.current = val;
  }, [val]);
    
  return ref.current;
};

export default usePrevious;
