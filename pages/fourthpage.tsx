import Link from '../components/Link';
import Head from 'next/head';
import * as Consts from "../components/Consts";
import { HtmlHead } from '../components/html/HtmlHead';
import { Container } from '../components/sco/Container';
import Header from '../components/sco/Header';
import Bottom from '../components/sco/Bottom';
import Receipt from '../components/sco/Receipt';
import Button from "../components/sco/Button";
import IconButton from "../components/sco/IconButton";
import InsertType1 from '../components/sco/InsertType1';
import Navigator from "../components/Navigator";

const FourthPage: React.SFC<any> = () => {
  return (
    <Navigator>
      <HtmlHead/>
      <Head>
        <title>Mocked Mocked Project - 4</title>
        <meta name="description" content="Fourth Page"/>
      </Head>
      <Link href="/fifthpage">
        <Container>
          <Header>Scan Item and Place in Bag</Header>
          <Receipt t isInit={true}/>
          <InsertType1 img={`ic_retrieve_error.png`}>
            <div className="panel2">
              <div className="pg-4-text">Your scanned order<br/>cannot be retrieved.</div>
            </div>
            <div className="panel3">
              <div className="pg-4-text">Please wait<br/> help is on the way.</div>
            </div>
            <div className="panel4">
            </div>
          </InsertType1>
          <Bottom/>
        </Container>
      </Link>
      <style jsx>{`
        .pg-4-text {
          text-align: center;
        }
      `}</style>
      {Consts.GENERAL_STYLE}
    </Navigator>
  );
}

export default FourthPage;
