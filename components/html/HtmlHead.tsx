`use strict`

import * as React from "react";
import Head from 'next/head';

export const HtmlHead: React.SFC<any> = () => {
  return (
    <Head>
      <meta charSet="utf-8" key="charset"/>
      <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport"/>
      <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"/>
    </Head>
  );
}
