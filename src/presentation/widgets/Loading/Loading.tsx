import * as React from "react";

export type LoadingProps = {
  type: "TEXT";
};

export const Loading: React.FC<LoadingProps> = (props) => {
  return (
    <div>
      <p>Loading ...</p>
    </div>
  );
};

Loading.displayName = "Loading";

export default Loading;
