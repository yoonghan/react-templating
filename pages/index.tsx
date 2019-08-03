import Link from '../components/Link';
import Head from 'next/head';
import * as Consts from "../components/Consts";
import { HtmlHead } from '../components/html/HtmlHead';
import Navigator from "../components/Navigator";
import Image from "../components/Image";

const Index: React.SFC<any> = () => {
  return (
    <Navigator>
      <HtmlHead/>
      <Head>
        <title>Mocked Mocked Project</title>
        <meta name="description" content="Mocked Mocked Project."/>
      </Head>
      <div className={'container'}>
        <Link href="/firstpage" isRoot={true}>
          <Image imgsrc={`homepage.png`} isIndexPage={true}/>
        </Link>
      </div>
      <style jsx>{`
        .container :global(img) {
          position: relative;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }
      `}</style>
      {Consts.GENERAL_STYLE}
    </Navigator>
  );
}

export default Index;
