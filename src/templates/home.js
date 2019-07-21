import React from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Page from "../components/Page";

const Home = () => {
  return (
    <Layout
      title="Vincent Trivett | Full stack developer and educator"
      description="Brooklyn-based JavaScript, Node.js, and Ruby developer."
    >
      <Sidebar isIndex />
      <Page title="Hello!">
        <p>
          I am a full stack web developer, former journalist, and lifelong
          learner. Currently, I am working at{" "}
          <a href="https://meetfabric.com" target="_blank">
            Fabric Technologies
          </a>
          , where I am learning a lot about serverless architecture, Node.js,
          Gatsby, React, and Redux.
        </p>
        <p>
          In addition to practicing as a technologist, I also mentor graduates
          and teach beginning web developers at General Assembly. If you are a
          graduate of GA or you are interested in starting to learn to code, I
          would love to have you in{" "}
          <a
            href="https://generalassemb.ly/instructors/vincent-trivett/5998"
            href="_blank"
          >
            my next class
          </a>
          .
        </p>
        <p>
          I live in Brooklyn, NY. I can often be found jaunting around the city
          and its environs on my bicycle or playing with Frances, my Siberian
          cat. I am constantly studying and learning more stuff, especially
          anything related to technology, language, and history.
        </p>
      </Page>
    </Layout>
  );
};

export default Home;
