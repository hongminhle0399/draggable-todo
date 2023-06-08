import React from "react";

import MainLayout from "../layout/MainLayout";

const About = () => {
  return (
    <MainLayout>
      <div className="about-wrapper">About Page</div>
    </MainLayout>
  );
};

export default React.memo(About);
