import React from "react";
import { PageTemplate } from "../../templates";
import axios from "axios";
import { Footer, Header } from "../../organismos";
import { Text, Link } from "../../atoms";

const AboutPage = () => {


  return (
    <>
      <PageTemplate header={<Header />} footer={<Footer />}>
        <>
          <h2>Ejemplo</h2>
          <Text>
            ATOM TEXT
          </Text>
          <Link href='/'> Home </Link>
        </>
      </PageTemplate>
    </>
  )
};

export { AboutPage };