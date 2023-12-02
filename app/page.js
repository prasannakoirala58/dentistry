import Image from 'next/image';
import Link from 'next/link';
import NavBar from './navbar/page';
import Hero from './hero/page';
import Showcase from './showcase/page';
import Success from './success/page';
import Intro from './intro/page';
import News from './news/page';
import Footer from './footer/page';

export default function Page() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Showcase />
      <Success />
      <Intro />
      <News />
      <Footer />
    </main>
  );
}
