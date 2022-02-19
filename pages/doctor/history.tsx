import React from "react";
import History from "../../components/Doctor/History/History";
import MetaTags from "../../reusables/MetaTags";

const history = () => {
  return (
    <>
      <MetaTags title="Dr Segun Oyegbami's History " />
      {[1, 2, 3, 4, 7, 5, 8].map((size) => (
        <>
          <History />
        </>
      ))}
    </>
  );
};

export default history;
