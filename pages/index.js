import { Col, Row } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

import {ImportOutlined , ArrowRightOutlined  } from '@ant-design/icons'
import Brand from '@/components/Brands/Brand';
import { useRouter } from 'next/router';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useEffect, useState } from 'react';

const imageLoader = ({ src, width, quality }) => `${src}?w=${width}&q=${quality || 75}`;

export default function App({ homeContent, homesecond, homethird,homefourth, homefifth, headerContent, preFooterContent,prefooterDescriptionContent }) {
  const router = useRouter();
  const [show,setshow] = useState(false)
  useEffect(()=>{
    setTimeout(()=>{
      setshow(true)
    },0)
    
  },[])

  return (

    <>
     {show&&<Header content={headerContent} />}
      {show && <div className='home-page-container'>
      
        <div className='welcome-card' >
          <div className='diageo-container'>
         
             <Row align='middle' justify='center'>
              <Col xl={12} lg={12} md={22} sm={22} xs={22}>
                <div className='left-col'>
                  <h2>{homeContent.text2} <br /><i>{homeContent.text3}</i></h2>
                  <p>{homeContent.description ? homeContent.description :"This is the site for all members of Diageo's UK and Ireland pension schemes. Please select the pension scheme or plan which you are a member of, from the menu or selection below."}</p>
                </div>
              </Col>
              <Col xl={12} lg={12} md={22} sm={22} xs={22} className='right-col' align='end' >
                <div className='image-container'>
                  <Image
                    alt="banner Image"
                    loader={imageLoader}
                    src={'https:' + homeContent.image.fields.file.url}
                    layout='fill'
                    objectFit='cover'
                    sizes='10vw'
                    priority
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div className='two-cards-detail'>
          <div className='diageo-container'>
            <Row>
              <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                <h2>{homesecond.text}</h2>
                <p>{homesecond.description}</p>
                <Row justify='space-around' className='comparison-card'>
                  <Col span={11}>
                    <h3>{homesecond.header}</h3>
                    <div className='address'>{documentToReactComponents(homesecond.richText)}</div>
                  </Col>
                  <Col span={11}>
                    <h3>{homesecond.header1}</h3>
                    <div className='address'>{documentToReactComponents(homesecond.richText2)}</div>
                  </Col>
                </Row>
                <p className='para'>{homesecond.text1}</p>
                <Row justify='space-between' className='image-with-detail'>
                  <Col xl={11} lg={11} md={22} sm={22} xs={22} className='image-with-detail-col'>
                    <div className='image-container1'>
                      <Image
                        alt="image"
                        loader={imageLoader}
                        src={'https:' + homesecond.image.fields.file.url}
                        layout='fill'
                        objectFit='cover'
                        priority
                      />
                    </div>
                    <h2>{homesecond.text2}</h2>
                    <p>{homesecond.text3}</p>
                    <div className='download-document1'>
                       <span className='download-document-span1'>
                        <Link aria-label="Read more about scheme of diageo pensions"  target='_blank' href='https://www.hartlinkonline.co.uk/diageo/hofl.chi/wui/schsetui.html?hopsess=14b4ev1j9q78g4x9x7yvy83j2fo2bph9&schid=1&srcpg=wui/schinfui.html'>
                {documentToReactComponents(homesecond.richText10)}
                </Link>
                </span>
                <ImportOutlined className='download-document-icon1' />
               
                </div>
                    {/* <div className='visit-scheme'>
                      <Link aria-label="Read more about scheme of diageo pensions" href="https://www.hartlinkonline.co.uk/diageo/hofl.chi/wui/schsetui.html?hopsess=14b4ev1j9q78g4x9x7yvy83j2fo2bph9&schid=1&srcpg=wui/schinfui.html" passHref>
                      {documentToReactComponents(homesecond.richText3)}
                      </Link>
                    </div> */}
                  </Col>
                  <Col xl={11} lg={11} md={22} sm={22} xs={22} className='image-with-detail-col'>
                    <div className='image-container1'>
                      <Image
                        alt="image"
                        loader={imageLoader}
                        src={'https:' + homesecond.image1.fields.file.url}
                        layout='fill'
                        objectFit='cover'
                        priority
                      />
                    </div>
                    <h2>{homesecond.text4}</h2>
                    <p>{homesecond.text5}</p>
                    {/* <div className='download-document1'>
                    <span className='download-document-span1'>
                    <a aria-label="Read more about scheme of diageo pensions"  href='https://portal.hartlinkonline.co.uk/diageo/hopl.chi/wui/tilepgui.html'>
                    <p>{homesecond.link1}</p>
                    </a>
                    </span>
                    <ImportOutlined className='download-document-icon1' />
                    </div> */}
                    {/* <div className='download-document1'>
                      <span className='download-document-span1'>
                      <Link aria-label="Read more about scheme of diageo pensions" href="https://www.hartlinkonline.co.uk/diageo/hofl.chi/wui/schsetui.html?hopsess=14b4ev1j9q78g4x9x7yvy83j2fo2bph9&schid=1&srcpg=wui/schinfui.html" passHref>
                      {documentToReactComponents(homesecond.richText10)}     
                      </Link>
                  
                    </div>
                    </span> */}
                    <div className='download-document1'>
            <span className='download-document-span1'>
            <Link aria-label="Read more about scheme of diageo pensions"  target='_blank' href='https://www.hartlinkonline.co.uk/diageo/hofl.chi/wui/schsetui.html?hopsess=14b4ev1j9q78g4x9x7yvy83j2fo2bph9&schid=1&srcpg=wui/schinfui.html'>
                {documentToReactComponents(homesecond.richText10)}
                </Link>
                </span>
                <ImportOutlined className='download-document-icon1' />
               
                </div>
                  </Col>
                </Row>
                
              </Col>
            </Row>
            <Row>
              <Col xl={12} lg={12} md={12} sm={24} xs={24}> 
                <h2>{homethird.text}</h2>
                <p>{homethird.description}</p>
                <Row justify='space-around' className='comparison-card'>
                  <Col span={11}>
                    <h3>{homesecond.header}</h3>
                    <div className='address'>{documentToReactComponents(homethird.richText)}</div>
                  </Col>
                  <Col span={11}>
                    <h3>{homesecond.header1}</h3>
                    <div className='address'>{documentToReactComponents(homethird.richText2)}</div>
                  </Col>
                </Row>
                <p className='para'>{homesecond.text1}</p>
                <Row justify='space-between' className='image-with-detail'>
                  <Col xl={11} lg={11} md={22} sm={22} xs={22} className='image-with-detail-col'>
                    <div className='image-container1'>
                      <Image
                        alt="image"
                        loader={imageLoader}
                        src={'https:' + homethird.image.fields.file.url}
                        layout='fill'
                        objectFit='cover'
                        priority
                      />
                    </div>
                    <h2>{homethird.text2}</h2>
                    <p>{homethird.text3}</p>
                  
                    <div className='download-document1'>
            <span className='download-document-span1'>
            <Link aria-label="Read more about scheme of diageo pensions"  target='_blank' href='https://www.hartlinkonline.co.uk/diageo/hofl.chi/wui/schsetui.html?hopsess=14b4ev1j9q78g4x9x7yvy83j2fo2bph9&schid=1&srcpg=wui/schinfui.html'>
                {documentToReactComponents(homesecond.richText10)}
                </Link>
                </span>
                <ImportOutlined className='download-document-icon1' />
               
                </div>
                      {/* <Link aria-label="Read more about scheme of diageo pensions" href="https://www.hartlinkonline.co.uk/diageo/hofl.chi/wui/schsetui.html?hopsess=14b4ev1j9q78g4x9x7yvy83j2fo2bph9&schid=1&srcpg=wui/schinfui.html" passHref>
                      <p>{homesecond.link1}</p>
                      </Link> */}
                  
                  </Col>
                  <Col xl={11} lg={11} md={22} sm={22} xs={22} className='image-with-detail-col'>
                    <div className='image-container1'>
                      <Image
                        alt="image"
                        loader={imageLoader}
                        src={'https:' + homethird.image1.fields.file.url}
                        layout='fill'
                        objectFit='cover'
                        priority
                      />
                    </div>
                    <h2>{homethird.text4}</h2>
                    <p>{homethird.text5}</p>
                    <div className='download-document1'>
            <span className='download-document-span1'>
            <Link aria-label="Read more about scheme of diageo pensions"  target='_blank' href='https://www.hartlinkonline.co.uk/diageo/hofl.chi/wui/schsetui.html?hopsess=14b4ev1j9q78g4x9x7yvy83j2fo2bph9&schid=1&srcpg=wui/schinfui.html'>
                {documentToReactComponents(homesecond.richText10)}
                </Link>
                </span>
                <ImportOutlined className='download-document-icon1' />
               
                </div>
                    {/* <div className='visit-scheme'>
                      <Link aria-label="Read more about scheme of diageo pensions" href="https://www.hartlinkonline.co.uk/diageo/hofl.chi/wui/schsetui.html?hopsess=14b4ev1j9q78g4x9x7yvy83j2fo2bph9&schid=1&srcpg=wui/schinfui.html" passHref>
                      {documentToReactComponents(homethird.richText3)}
                      </Link>
                    </div> */}
                  </Col>
                </Row>
                
              </Col>
            </Row>
          </div>
        </div>

        <div className='diageo-container'>
          <div className='diageo-pension-plan'>
            <Row justify='space-between' align='middle'>
              <Col xl={8} lg={14} md={8} sm={24} xs={24}>
                <h2>{homefourth.text4} <i>{homefourth.text2}</i> {homefourth.text3}</h2>
                <p>{homefourth.description}</p>
                <div className='visit-scheme'>
                  <p onClick={() => router.push('/diageo-pension-plan')} className='visit-cta'>
                    {homefourth.text5}<ArrowRightOutlined />
                  </p>
                </div>
              </Col>
              <Col xl={14} lg={14} md={14} sm={24} xs={24}>
                <div className='image-container'>
                  <Image
                    alt="image"
                    loader={imageLoader}
                    src={'https:' + homefourth.image.fields.file.url}
                    layout='fill'
                    objectFit='cover'
                    priority
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div className='blue-background-card'>
          <div className='diageo-container'>
            <div className='diageo-pension-plan'>
              <Row justify='space-between' align='middle'>
                <Col xl={14} lg={14} md={14} sm={24} xs={24}>
                  <div className='image-container'>
                    <Image
                      alt="image"
                      loader={imageLoader}
                      src={'https:' + homefifth.image.fields.file.url}
                      layout='fill'
                      objectFit='cover'
                      priority
                    />
                  </div>
                </Col>
                <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                  <h2>{homefifth.text4} <i>{homefifth.text2}</i> {homefifth.text3}</h2>
                  <p>{homefifth.description}</p>
                  <div className='visit-scheme'>
                    <p onClick={() => router.push('/contact')} className='visit-cta'>
                      {homefifth.text3}<ArrowRightOutlined />
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>

        <Brand />
      </div>}
      {show && <Brand content={preFooterContent} />}
      {show && <Footer content={prefooterDescriptionContent}  />}
    </>
  );
}

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: "homeBanner", "fields.text1": "Diageo Pensions" })
  const second = await client.getEntries({ content_type: "diageoPensionsHomepage", "fields.text": "DB Pension Scheme - UK" })
  const third = await client.getEntries({ content_type: "diageoPensionsHomepage", "fields.text": "DB Pension Schemes - RoI" })
  const fourth = await client.getEntries({ content_type: "homeBanner", "fields.text1": "Diageo Pension Plan (DPP)" })
  const fifth = await client.getEntries({ content_type: "homeBanner", "fields.text1": "Diageo Retirement Savings Plan - Homepage" })
  // 'fields.title': "tv"
 
  return {
    props: {
      homeContent: res.items[0].fields,
      homesecond: second.items[0].fields,
      homethird: third.items[0].fields,
      homefourth: fourth.items[0].fields,
      homefifth: fifth.items[0].fields,

    },
    
  }
}