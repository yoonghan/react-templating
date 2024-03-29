import Link from '../components/Link';
import Head from 'next/head';
import * as Consts from "../components/Consts";
import { HtmlHead } from '../components/html/HtmlHead';
import { Container } from '../components/sco/Container';
import Header from '../components/sco/Header';
import Bottom from '../components/sco/Bottom';
import Receipt from '../components/sco/Receipt';
import InsertType3 from '../components/sco/InsertType3';
import Navigator from "../components/Navigator";
import Image from "../components/Image";

const SeventhPage: React.SFC<any> = () => {
  return (
    <Navigator>
      <HtmlHead/>
      <Head>
        <title>Mocked Mocked Project - 7</title>
        <meta name="description" content="SeventhPage Page"/>
      </Head>
      <Link href="/eightpage">
        <Container>
          <Header>Select Tender Type</Header>
          <Receipt isCenter={true} isComplete={true}/>
          <InsertType3>
            <div className="panel1">
              Please take your receipt
            </div>
            <div className="panel2">
              <Image imgsrc={`img_printer.png`}/>
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

export default SeventhPage;
