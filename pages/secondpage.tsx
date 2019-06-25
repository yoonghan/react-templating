import Link from '../components/Link';
import Head from 'next/head';
import * as Consts from "../components/Consts";
import { HtmlHead } from '../components/html/HtmlHead';
import { Container } from '../components/Container';
import Header from '../components/Header';
import Bottom from '../components/Bottom';
import Receipt from '../components/Receipt';
import Button from "../components/Button";
import InsertType4 from '../components/InsertType4';
import Navigator from "../components/Navigator";

const SecondPage: React.SFC<any> = () => {
  return (
    <Navigator>
      <HtmlHead/>
      <Head>
        <title>Carrefour C4 Project - 2</title>
        <meta name="description" content="Second Page"/>
      </Head>
      <Container>
        <Header>Scan Item and Place in Bag</Header>
        <Receipt isInit={true}/>        
        <InsertType4>
          <Link href="/thirdpage">
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
          </Link>
        </InsertType4>
        <Bottom/>
      </Container>
      <style jsx>{`

      `}</style>
      {Consts.GENERAL_STYLE}
    </Navigator>
  );
}

export default SecondPage;
