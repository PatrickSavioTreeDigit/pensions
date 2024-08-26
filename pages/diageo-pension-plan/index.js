import { Col, Row } from 'antd'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import BannerImg from '../../public/Assets/Images/pension-page-image.jpg'
import { ArrowRightOutlined , ImportOutlined  } from '@ant-design/icons'
import Brand from '@/components/Brands/Brand'
import { useRouter } from 'next/router'
import {createClient} from "contentful"
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
export default function Dpp({dppContent , dppLinks, dpphome,preFooterContent,prefooterDescriptionContent,headerContent}) {
  const router = useRouter()
  const [show,setshow] = useState(false)
  useEffect(()=>{
    setTimeout(()=>{
      setshow(true)
    },0)
    
  },[])
  return (
    <>
    {show && <Header content={headerContent} />}
    {show && <div className='diageo-pension-plan-container'>
      <div className='pink-shade-background'>
        <div className='diageo-container'>
          <span>{dppContent.text}</span>
          <Row align={'middle'} className='heading' justify={'space-between'}>
            <Col xl={11} lg={11} md={11} sm={24} xs={24}>
              <h2>{dppContent.heading1}</h2>
              <p>
                {dppContent.text3}
              </p>
            </Col>
           
            <Col xl={11} lg={11} md={11} sm={24} xs={24}>
            <div className='imagedpp'>
              <Image alt='Image' loader={()=>'https:' + dpphome.image.fields.file.url} src={'https:' + dpphome.image.fields.file.url} height={300} width={510}/>
            </div>
            </Col>
          </Row>
        </div>
      </div>
   
 
      <div className='announcement-section'>
        <div className='diageo-container'>
          <Row justify={'center'}>
            <Col xl={16} lg={17} md={18} sm={24} xs={24}>
            <h2>{dppContent.text1}</h2>
              <div className='download-document'>
              <span className='download-document-span'>{documentToReactComponents(dppContent.richText1)}</span>
              <ImportOutlined className='download-document-icon' />
              </div>
              {documentToReactComponents(dppContent.richText)}
              {/* <h2>Announcement</h2>
              <div className='visit-scheme'>
                <span className='visit-cta'>
                  Data privacy notice - May 2018 (From Scottish Widows DPP
                  administrator){' '}
                </span>
                <ArrowRightOutlined />
              </div>
              <p>
                As a new UK Diageo employee you are eligible to join the Diageo
                Pension Plan (DPP). You will be automatically enrolled into the
                DPP in your fourth month and if you satisfy the following
                criteria.
              </p>
              <ul>
                <li>are not already in a workplace pension scheme;</li>
                <li>are aged 22 or over;</li>
                <li>are under State Pension Age;</li>
                <li>earn more than £9,440 pa (reviewed each April);</li>
                <li>and work, or usually work, in the UK.</li>
              </ul> */}
            </Col>
          </Row>
        </div>
      </div>
 
      <div className='pink-shade-background'>
        <div className='diageo-container'>
          <h3>{dppLinks.heading}</h3>
          <Row justify={'space-between'}>
           
             <Col
              xl={7}
              lg={7}
              md={11}
              sm={11}
              xs={11}
              className='different-links'
              onClick={() =>
                router.push('/diageo-pension-plan/plan-information')
                 
              }
             
            >
             <span>{dppLinks.listLinks} </span>
 
             <ArrowRightOutlined/>
            </Col>
           
            <Col
              xl={7}
              lg={7}
              md={11}
              sm={11}
              xs={11}
              className='different-links'
              onClick={() => router.push('/diageo-pension-plan/how-do-i-join')}
            >
              <span>{dppLinks.listLinks2}</span> <ArrowRightOutlined />
            </Col>
            <Col
              xl={7}
              lg={7}
              md={11}
              sm={11}
              xs={11}
              className='different-links'
              onClick={() => router.push('/')}
            >
              <span>{dppLinks.listLinks4}</span> <ArrowRightOutlined />
            </Col>
            <Col
              xl={7}
              lg={7}
              md={11}
              sm={11}
              xs={11}
              className='different-links'
              onClick={() =>
                router.push('/diageo-pension-plan/how-the-plan-works')
              }
            >
              <span>{dppLinks.listLink5}</span> <ArrowRightOutlined />
            </Col>
            <Col
              xl={7}
              lg={7}
              md={11}
              sm={11}
              xs={11}
              className='different-links'
              onClick={() => router.push('/diageo-pension-plan/forms')}
             
            >
             <span> {dppLinks.listLinks6} </span> <ArrowRightOutlined />
             
            </Col>
 
 
            <Col
              xl={7}
              lg={7}
              md={11}
              sm={11}
              xs={11}
              className='different-links'
              onClick={() => router.push('/diageo-pension-plan/diageo-individual-savings-account-isa')}
            >
              <span className='underline-text'>{dppLinks.listLinks3}</span>{' '}
              <ArrowRightOutlined />
            </Col>
          </Row>
        </div>
      </div>
      <div className='hyperlink-section'>
        <div className='diageo-container'>
          <Row justify={'center'} className='diageo'>
            <Col xl={16} lg={17} md={18} sm={24} xs={24} >
 
            {/* <span style={{justifycontent: 'center', fontSize:'10px'}}> {documentToReactComponents(dppContent.richText2)}</span>
               <p>
                {dppContent.ddp}
                  <span> {documentToReactComponents(dppContent.richText2)}</span> or you can
                  visit&nbsp;<span>www.scottishwidows.co.uk/save/dpp</span> for
                  any general Pension Plan questions.
                </p> */}
                 <p>
                 {dppContent.ddp}
                <span className='black'>{documentToReactComponents(dppContent.ddp2)}</span> {dppContent.text8}
                <span className='black'>{documentToReactComponents(dppContent.ddp3)}</span> {dppContent.text10}
              </p>
             
            </Col>
          </Row>
        </div>
      </div>
 
      <Brand />
    </div>}
    {show && <Brand content={preFooterContent} />}
    {show && <Footer content={prefooterDescriptionContent}  />}
    </>
  )
}
 
 
export async function getStaticProps() {
  console.log()
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })
   
    const res = await client.getEntries({ content_type: "diageoPensionPlan"})
   const home = await client.getEntries({ content_type: "homeBanner","fields.text1":"Diageo Pension Plan"})
    const links = await client.getEntries({ content_type: "sectionLinks","fields.title":"Diageo Pension Plan"})
    const images = await client.getEntries({ content_type: "preFooter"})
    // console.log(res.items[0].fields)
    // console.log(links.items)
    // console.log(home.items[0].fields)
    console.log(images.items[0].fields.image1.fields)
   
   
    // 'fields.title': "tv"
    return {
      props: {
        dppContent: res.items[0].fields,
        dppLinks:links.items[0].fields,
       dpphome:home.items[0].fields,
       dppimages:images.items[0].fields,
      },
      revalidate: 60
    }
  }




