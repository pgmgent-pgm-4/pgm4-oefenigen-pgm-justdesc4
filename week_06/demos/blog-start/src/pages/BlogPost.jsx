import { useQuery } from "@apollo/client";
import React, { useParams } from "react";
import { GET_POST_BY_SLUG } from "../graphql/queries";
import parse from "html-react-parser";
import { Helmet } from "react-helmet";

export default function BlogPost() {
  const { slug } = useParams();
  console.log(slug);
  const { loading, error, data } = useQuery(GET_POST_BY_SLUG, {
    variables: { slug },
  });
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (data) console.log(data);

  return (
    <div>
      <Helmet>
        <title> AwesomeBlog | {data.post.title} </title>
        <meta name="description" content="Blog post..." />
      </Helmet>
      {parse(data.post.content.html)}
    </div>
  );
}
