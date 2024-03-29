import Link from '../components/Link';
import Head from 'next/head';
import * as Consts from "../components/Consts";
import { HtmlHead } from '../components/html/HtmlHead';
import { Container } from '../components/sco/Container';
import Header from '../components/sco/Header';
import Bottom from '../components/sco/Bottom';
import Receipt from '../components/sco/Receipt';
import InsertType4 from '../components/sco/InsertType4';
import Navigator from "../components/Navigator";
import Image from "../components/Image";

const SecondPage: React.SFC<any> = () => {
  return (
    <Navigator>
      <HtmlHead/>
      <Head>
        <title>Mocked Mocked Project - 2</title>
        <meta name="description" content="Second Page"/>
      </Head>
      <Link href="/thirdpage">
        <Container>
          <Header>Scan Item and Place in Bag</Header>
          <Receipt isInit={true}/>
          <InsertType4>

              <div className="panel1">
                <Image imgsrc={`pssanimated.gif`}/>
              </div>
              <div className="panel2">
                <p>
                  Scan the <strong>barcode</strong>
                  <br/>
                  with your device
                </p>
              </div>
              <div className="panel3">
                <Image imgsrc={`img_barcode.png`}/>
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
