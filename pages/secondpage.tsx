import Link from '../components/Link';
import Head from 'next/head';
import * as Consts from "../components/Consts";
import { HtmlHead } from '../components/html/HtmlHead';
import { Container } from '../components/sco/Container';
import Header from '../components/sco/Header';
import Bottom from '../components/sco/Bottom';
import Receipt from '../components/sco/Receipt';
import Button from "../components/sco/Button";
import InsertType4 from '../components/sco/InsertType4';
import Navigator from "../components/Navigator";

const SecondPage: React.SFC<any> = () => {
  return (
    <Navigator>
      <HtmlHead/>
      <Head>
        <title>Carrefour C4 Project - 2</title>
        <meta name="description" content="Second Page"/>
      </Head>
      <Link href="/thirdpage">
        <Container>
          <Header>Scan Item and Place in Bag</Header>
          <Receipt isInit={true}/>
          <InsertType4>

              <div className="panel1">
                <img src={`${Consts.GENERAL_IMG_FOLDER}pssanimated.gif`}/>
              </div>
              <div className="panel2">
                <p>
                  Scan the <strong>barcode</strong>
                  <br/>
                  with your device
                </p>
              </div>
              <div className="panel3">
                <img src={`${Consts.GENERAL_IMG_FOLDER}img_barcode.png`}/>
              </div>
          </InsertType4>
          <Bottom/>
        </Container>
      </Link>
      <style jsx>{`

      `}</style>
      {Consts.GENERAL_STYLE}
    </Navigator>
  );
}

export default SecondPage;
