import Link from '../components/Link';
import Head from 'next/head';
import * as Consts from "../components/Consts";
import { HtmlHead } from '../components/html/HtmlHead';
import { Container } from '../components/sco/Container';
import Header from '../components/sco/Header';
import Bottom from '../components/sco/Bottom';
import Receipt from '../components/sco/Receipt';
import Button from "../components/sco/Button";
import InsertType1 from '../components/sco/InsertType1';
import Navigator from "../components/Navigator";

const ThirdPage: React.SFC<any> = () => {
  return (
    <Navigator>
      <HtmlHead/>
      <Head>
        <title>Mocked Mocked Project - 3</title>
        <meta name="description" content="Third Page"/>
      </Head>
      <Link href="/fourthpage">
        <Container>
          <Header>Scan Item and Place in Bag</Header>
          <Receipt isInit={true}/>
          <InsertType1 img={`ic_retrieve.gif`}>
            <div className="panel2">
              <div className="pg-3-text">Please wait while<br/>your order is retrieved</div>
            </div>
            <div className="panel3">

            </div>
            <div className="panel4">
            </div>
          </InsertType1>
          <Bottom/>
        </Container>
      </Link>
      <style jsx>{`
        .pg-3-text {
          text-align: center;
        }
      `}</style>
      {Consts.GENERAL_STYLE}
    </Navigator>
  );
}

export default ThirdPage;
