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

const FifthPage: React.SFC<any> = () => {
  return (
    <Navigator>
      <HtmlHead/>
      <Head>
        <title>Carrefour C4 Project - 5</title>
        <meta name="description" content="Fifth Page"/>
      </Head>
      <Container>
        <Header>Scan Item and Place in Bag</Header>
        <Receipt/>
        <InsertType1 img={`img_scanitem.png`}>
          <div className="panel2">
            <Button href="fifthpage" color={'PRIMARY'} isBig={true} icon={"ic_magnifying.png"} isLeft={true}>Item Lookup</Button>
          </div>
          <div className="panel3">
            <Button href="fifthpage" isDisabled={true} color={'OK'} isBig={true} icon={"ic_clickhere.png"} isLeft={true}>
              <div className="pg5-text">
                Click Here<br/><span className="pg5-text-small">to Process Scanned Items</span>
              </div>
            </Button>
          </div>
          <div className="panel4">
            <Button href="sixthpage" color={'OK'}>Finish And Pay</Button>
          </div>
        </InsertType1>
        <Bottom/>
      </Container>
      <style jsx>{`
        .pg5-text {
          text-align: left;
        }
        .pg5-text-small {
          font-size: 0.6rem;
        }
      `}</style>
      {Consts.GENERAL_STYLE}
    </Navigator>
  );
}

export default FifthPage;
