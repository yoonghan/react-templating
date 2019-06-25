import Link from '../components/Link';
import Head from 'next/head';
import * as Consts from "../components/Consts";
import { HtmlHead } from '../components/html/HtmlHead';
import { Container } from '../components/Container';
import Header from '../components/Header';
import Bottom from '../components/Bottom';
import Receipt from '../components/Receipt';
import Button from "../components/Button";
import IconButton from "../components/IconButton";
import InsertType2 from '../components/InsertType2';
import Navigator from "../components/Navigator";

const FourthPage: React.SFC<any> = () => {
  return (
    <Navigator>
      <HtmlHead/>
      <Head>
        <title>Carrefour C4 Project - 4</title>
        <meta name="description" content="Fourth Page"/>
      </Head>
      <Container>
        <Header>Select Your Tender Type</Header>
        <Receipt/>
        <InsertType2 img={`${Consts.GENERAL_IMG_FOLDER}img_scanitem.png`}>
          <div className="panel1">Make your selection now</div>
          <div className="panel2">
            <img src={`${Consts.GENERAL_IMG_FOLDER}ic_arrow.png`}/>
          </div>
          <div className="panel3_1">
            <Button href="fifthpage" color={'BLACK'} icon="ic_credit.png">Credit</Button>
          </div>
          <div className="panel3_2">
            <Button href="fifthpage" color={'PRIMARY'} icon="ic_debit.png">Debit</Button>
          </div>
          <div className="panel6_1">
            <Button href="thirdpage" color={'RETURN'} icon="ic_leftarrow.png" isLeft={true}>Return Scan More Item</Button>
          </div>
        </InsertType2>
        <Bottom/>
      </Container>
      <style jsx>{`

      `}</style>
      {Consts.GENERAL_STYLE}
    </Navigator>
  );
}

export default FourthPage;
