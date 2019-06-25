import Link from '../components/Link';
import Head from 'next/head';
import * as Consts from "../components/Consts";
import { HtmlHead } from '../components/html/HtmlHead';
import { Container } from '../components/Container';
import Header from '../components/Header';
import Bottom from '../components/Bottom';
import Receipt from '../components/Receipt';
import Button from "../components/Button";
import InsertType3 from '../components/InsertType3';
import Navigator from "../components/Navigator";

const FifthPage: React.SFC<any> = () => {
  return (
    <Navigator>
      <HtmlHead/>
      <Head>
        <title>Carrefour C4 Project - 6</title>
        <meta name="description" content="Sixth Page"/>
      </Head>
      <Link href="/sixthpage">
        <Container>
          <Header>Select Tender Type</Header>
          <Receipt isCenter={true} isComplete={true}/>
          <InsertType3>
            <div className="panel1">
              Please take your receipt
            </div>
            <div className="panel2">
              <img src={`${Consts.GENERAL_IMG_FOLDER}img_printer.png`}/>
            </div>
          </InsertType3>
          <Bottom/>
        </Container>
      </Link>
      <style jsx>{`

      `}</style>
      {Consts.GENERAL_STYLE}
    </Navigator>
  );
}

export default FifthPage;
