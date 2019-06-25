import Link from '../components/Link';
import Head from 'next/head';
import * as Consts from "../components/Consts";
import { HtmlHead } from '../components/html/HtmlHead';
import Navigator from "../components/Navigator";

const FirstPage: React.SFC<any> = () => {
  return (
    <Navigator>
      <HtmlHead/>
      <Head>
        <title>Carrefour C4 Project - 1</title>
        <meta name="description" content="First Page"/>
      </Head>
      <Link href="/secondpage">
        <div className={'container'}>
            <div className="block">
              <img src={`${Consts.GENERAL_IMG_FOLDER}pssanimated.gif`}/>
              <p>
                Scan the <strong>barcode</strong>
                <br/>
                with your device
              </p>
              <img src={`${Consts.GENERAL_IMG_FOLDER}img_barcode.png`}/>
            </div>
        </div>
      </Link>
      <style jsx>{`
        .container {
          width: 100%;
          height: 100%;
          cursor: pointer;
          position: relative;
        }
        .block {
          margin: 0;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .block p {
          text-align: center;
        }
      `}</style>
      {Consts.GENERAL_STYLE}
    </Navigator>
  );
}

export default FirstPage;
