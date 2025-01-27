import UnAuthLayout from "@lovethepadel/components/Layout/UnAuthLayout";
import React from "react";

const PublicRoute = ({ Component }: { Component: React.ComponentType }) => {
  return (
    <UnAuthLayout>
      <Component />
    </UnAuthLayout>
  );
};

export default PublicRoute;
