import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { SubscribeButton } from '../components/SubscribeButton';
import styles from './home.module.scss';
import { stripe } from '../services/stripe';
import { setCurrency } from '../utils/setCurrency';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product: { amount, priceId } }: HomeProps) {
  // console.log(product)
  return (
    <>
      <Head>
        <title>Home | Ig.News</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br/>
            <span>for {amount} moth</span>
          </p>
          <SubscribeButton priceId={priceId}/>
        </section>
        <Image src="/images/avatar.svg" alt="Girls coding" width={334} height={520} />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1L7tUwKglM8koJtGQOzxUFBG');

  const product = {
    priceId: price.id,
    amount: setCurrency(price.unit_amount)
  }
  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24 //24haours
  }
}
