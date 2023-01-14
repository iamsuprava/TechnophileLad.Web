import React from "react";
import Form from "../container/FormPage/form";
import {useEffect} from 'react';

const FromPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Form />
    </div>
  );
};

export default FromPage;
