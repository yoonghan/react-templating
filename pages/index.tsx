import Link from '../components/Link';
import Head from 'next/head';
import * as Consts from "../components/Consts";
import { HtmlHead } from '../components/html/HtmlHead';
import Navigator from "../components/Navigator";

const Index: React.SFC<any> = () => {

  const adjustIndexFolder = Consts.OVERRIDE_URL?"./static/":"";

  return (
    <Navigator>
      <HtmlHead/>
      <Head>
        <title>Carrefour C4 Project</title>
        <meta name="description" content="Carrefour C4 Project."/>
      </Head>
      <div className={'container'}>
        <Link href="/secondpage" isRoot={true}>
          <img src={`${adjustIndexFolder}${Consts.GENERAL_IMG_FOLDER}homepage.png`}/>
        </Link>
      </div>
      <style jsx>{`
        .container img {
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
