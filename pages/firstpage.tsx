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

const FirstPage: React.SFC<any> = () => {
  return (
    <Navigator>
      <HtmlHead/>
      <Head>
        <title>Mocked Mocked Project - 1</title>
        <meta name="description" content="First Page"/>
      </Head>
      <Container>
        <Header>Scan Item and Place in Bag</Header>
        <Receipt isInit={true}/>
        <InsertType1 img={`img_scanitem.png`} isDisabled={true} >
          <div className="panel2">
            <Button href="firstpage" isDisabled={true} color={'PRIMARY'} isBig={true} icon={"ic_magnifying.png"} isLeft={true}>Item Lookup</Button>
          </div>
          <div className="panel3">
            <Button href="secondpage" color={'OK'} isBig={true} icon={"ic_clickhere.png"} isLeft={true}>
              <div className="pg1-text">
                Click Here<br/><span className="pg1-text-small">to Process Scanned Items</span>
              </div>
            </Button>
          </div>
          <div className="panel4">
          </div>
        </InsertType1>
        <Bottom/>
      </Container>
      <style jsx>{`
        .pg1-text {
          text-align: left;
        }
        .pg1-text-small {
          font-size: 0.6rem;
        }
      `}</style>
      {Consts.GENERAL_STYLE}
    </Navigator>
  );
}

export default FirstPage;
