import Brand from '@/components/Brands/Brand'
import { Col, Row } from 'antd'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import {createClient} from "contentful"
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
export default function Home({joinContent,diageoContent,preFooterContent,prefooterDescriptionContent,headerContent}) {
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
    {show && <div className='plan-information-container'>
      <div className='first-component'>
        <div className='diageo-container'>
          <span
            className='cp'
            onClick={() => router.push('/diageo-pension-plan')}
          >
            {diageoContent.title}
          </span>{' '}
          /{' '}
          <span
            className='cp'
            onClick={() => router.push('/diageo-pension-plan/plan-information')}
          >
            {diageoContent.listLinks}
          </span>{' '}
          / <span>{diageoContent.listLinks2}</span>
          <Row justify={'center'}>
            <Col span={24}>
              <span className='heading'>
                <h2>{joinContent.text}</h2>
              </span>
            </Col>
          </Row>
        </div>
      </div>
      <div className='second-component'>
        <div className='diageo-container'>
          <Row>
            <Col xl={6} lg={6} md={6} sm={24} xs={24}>
              <h4
                onClick={() =>
                  router.push('/diageo-pension-plan/plan-information')
                }
              >
                {diageoContent.listLinks}
              </h4>
              <h4
                onClick={() => {
                  router.push('/diageo-pension-plan/how-the-plan-works')
                }}
              >
                {diageoContent.listLink5}
              </h4>
              <h4 className='active-page-name'>{diageoContent.listLinks2}</h4>
              <h4 onClick={() => router.push('/diageo-pension-plan/forms')}>
                {diageoContent.listLinks6}
              </h4>
            </Col>
            <Col xl={1} lg={1} md={1} sm={0} xs={0}></Col>
            <Col xl={14} lg={14} md={14} sm={24} xs={24} className='right-col'>
              <p>{joinContent.longText}</p>
              {/* <p>
                If you are eligible, you will be automatically enrolled into the
                Plan once you have completed 3 months employment with Diageo. If
                you would like to join sooner you can do this from My Benefits
                Hub by selecting My Benefits Choices.
              </p> */}
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

    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })
   
    const menu = await client.getEntries({ content_type: "subMenu","fields.text":"How do I join?"})
    const section = await client.getEntries({ content_type: "sectionLinks","fields.title":"Diageo Pension Plan"})
   
 
   
   
    // 'fields.title': "tv"
    return {
      props: {
        joinContent: menu.items[0].fields,
        diageoContent: section.items[0].fields,
       
      },
      
    }
  }
 