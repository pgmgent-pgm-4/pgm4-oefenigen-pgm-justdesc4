import React from "react";
import { Helmet } from "react-helmet";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title> AwesomeBlog | Start </title>
        <meta name="description" content="AwesomeBlog Start..." />
      </Helmet>
      <div>HomePage</div>
    </>
  );
}
