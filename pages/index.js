import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
} from 'react-icons/ai';
import Image from 'next/image';
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10' >
        <section className='min-h-screen' >
          <nav className='py-10 mb-12 flex justify-between' >
            <h1 className="text-xl  font-burtons" >EbenSuccess</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl' />
              </li>
              <li><a className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10 ' >
            <h2 className='text-5xl py-2 text-teal-600 font-medium' >EbenSuccess</h2>
            <h3 className='text-2xl py-2' >Software Engineer</h3>
            <p className='text-md py-5 leading-8 text-gray-800' >I am a motivated computer science student at the University of Ghana with experience in machine learning and software development. A solution-oriented team player with a recognized aptitude for innovative thinking</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600" >
            <a href=""><AiFillTwitterCircle /></a>
            <a href=""><AiFillLinkedin /> </a>
            <a href=""><AiFillGithub /></a>


          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden'>
            <Image src={deved} layout="fill" objectFit='cover' />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1" >What I do</h3>
            <p className='text-md py-2 leading-8 text-gray-800' > I am enthusiastic, responsible, and hardworking. Having worked on       different  <spen className="text-teal-500" >projects</spen>   has helped me to <span className="text-teal-500" >adapt</span>  to changes quickly and made me a mature team worker.</p>

            <p className='text-md py-2 leading-8 text-gray-800' > I am enthusiastic, responsible, and hardworking. Having worked on       different  <spen className="text-teal-500" >projects</spen>   has helped me to <span className="text-teal-500" >adapt</span>  to changes quickly and made me a mature team worker.</p>
          </div>
          <div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={design} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>Creating elegant designs suited for your needs</p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div>
            <div className='text-center shadow-lg pd-10 rounded-xl my-10'>
              <Image src={design} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>Creating elegant designs suited for your needs</p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div>
            <div className='text-center shadow-lg pd-10 rounded-xl my-10'>
              <Image src={design} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>Creating elegant designs suited for your needs</p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div>
          </div>
        </section>
      </main>


    </div>
  )
}
