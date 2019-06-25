import Link from '../components/Link';
import Head from 'next/head';
import * as Consts from "../components/Consts";
import { HtmlHead } from '../components/html/HtmlHead';
import { Container } from '../components/Container';
import Header from '../components/Header';
import Bottom from '../components/Bottom';
import Receipt from '../components/Receipt';
import Button from "../components/Button";
import InsertType1 from '../components/InsertType1';
import Navigator from "../components/Navigator";

const ThirdPage: React.SFC<any> = () => {
  return (
    <Navigator>
      <HtmlHead/>
      <Head>
        <title>Carrefour C4 Project - 3</title>
        <meta name="description" content="Third Page"/>
      </Head>
      <Container>
        <Header>Scan Item and Place in Bag</Header>
        <Receipt/>
        <InsertType1 img={`${Consts.GENERAL_IMG_FOLDER}img_scanitem.png`}>
          <div className="panel2">
            <Button href="thirdpage" color={'PRIMARY'} isBig={true} icon={"ic_magnifying.png"} isLeft={true}>Item Lookup</Button>
          </div>
          <div className="panel3_1"></div>
          <div className="panel3_2"></div>
          <div className="panel4">
            <Button href="fourthpage" color={'OK'}>Finish And Pay</Button>
          </div>
        </InsertType1>
        <Bottom/>
      </Container>
      <style jsx>{`

      `}</style>
      {Consts.GENERAL_STYLE}
    </Navigator>
  );
}

export default ThirdPage;
