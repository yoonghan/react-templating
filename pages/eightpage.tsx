import Link from '../components/Link';
import Head from 'next/head';
import * as Consts from "../components/Consts";
import { HtmlHead } from '../components/html/HtmlHead';
import { Container } from '../components/sco/Container';
import Header from '../components/sco/Header';
import Bottom from '../components/sco/Bottom';
import Receipt from '../components/sco/Receipt';
import Button from "../components/sco/Button";
import InsertType3 from '../components/sco/InsertType3';
import Modal from '../components/sco/Modal';
import Navigator from "../components/Navigator";
import Image from "../components/sco/Image";

const EightPage: React.SFC<any> = () => {

  function _onClick() {
    //donothing.
  }

  return (
    <Navigator>
      <HtmlHead/>
      <Head>
        <title>Carrefour C4 Project - 8</title>
        <meta name="description" content="EightPage Page"/>
      </Head>
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
      <Link href="/">
        <Modal
          title="Please remember"
          content="to take your purchased items"
          imgsrc="img_remember.png"
          callbackClose={_onClick}
        />
      </Link>
      <style jsx>{`

      `}</style>
      {Consts.GENERAL_STYLE}
    </Navigator>
  );
}

export default EightPage;
