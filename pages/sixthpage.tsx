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
import InsertType2 from '../components/sco/InsertType2';
import Navigator from "../components/Navigator";
import Image from "../components/Image";

const SixthPage: React.SFC<any> = () => {
  return (
    <Navigator>
      <HtmlHead/>
      <Head>
        <title>Carrefour C4 Project - 6</title>
        <meta name="description" content="SixthPage Page"/>
      </Head>
      <Container>
        <Header>Select Your Tender Type</Header>
        <Receipt/>
        <InsertType2 img={`${Consts.GENERAL_IMG_FOLDER}img_scanitem.png`}>
          <div className="panel1">Make your selection now</div>
          <div className="panel2">
            <Image imgsrc={`ic_arrow.png`}/>
          </div>
          <div className="panel3_1">
            <Button href="seventhpage" color={'BLACK'} icon="ic_credit.png">Credit</Button>
          </div>
          <div className="panel3_2">
            <Button href="seventhpage" color={'PRIMARY'} icon="ic_debit.png">Debit</Button>
          </div>
          <div className="panel6_1">
            <Button href="fifthpage" color={'RETURN'} icon="ic_leftarrow.png" isLeft={true}>Return Scan More Item</Button>
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

export default SixthPage;
