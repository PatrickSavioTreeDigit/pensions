import Brand from '@/components/Brands/Brand'
import { Col, Row } from 'antd'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { DownloadOutlined } from '@ant-design/icons'
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {createClient} from "contentful"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
export default function Inedx({guinnessContent,guinnesslinks,guinnessHead,preFooterContent,prefooterDescriptionContent,headerContent}) {
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
    {show && <div className='diageo-retirement-savings-plan-container'>
      <div className='blue-color-container'>
        <div className='diageo-container'>
          <span
            className='cp'
            onClick={() => router.push('/diageo-retirement-savings-plan')}
          >
           { guinnessContent.text1}
          </span>{' '}
          / <span>{guinnessContent.text3}</span>{' '}
          <Row justify={'center'}>
            <Col span={24}>
              <span className='heading'>
                <h2>
                  {guinnessContent.text}
                </h2>
                <p>{guinnessContent.description}</p>
              </span>
            </Col>
          </Row>
        </div>
      </div>
      <div className='second-component'>
        <div className='diageo-container'>
          <Row>
            <Col xl={6} lg={6} md={6} sm={24} xs={24}>
              <h4 className='active-page-name'>{guinnesslinks.listLinks9}</h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/guinness-storehouse-section/member-information'
                  )
                }}
              >
                {guinnesslinks.listLinks2}
              </h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/guinness-storehouse-section/how-do-i-join'
                  )
                }}
              >
                {guinnesslinks.listLinks3}
              </h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/guinness-storehouse-section/forms'
                  )
                }}
              >
                {guinnesslinks.listLinks4}
              </h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/guinness-storehouse-section/scheme-documentation'
                  )
                }}
              >
                {guinnesslinks.listLink5}
              </h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/guinness-storehouse-section/investment-options'
                  )
                }}
              >
                {guinnesslinks.listLinks6}
              </h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/guinness-storehouse-section/annual-reviews'
                  )
                }}
              >
                {guinnesslinks.listLinks7}
              </h4>
            </Col>
            <Col xl={1} lg={1} md={1} sm={0} xs={0}></Col>
            <Col xl={14} lg={14} md={14} sm={24} xs={24} className='right-col'>
              <Row>
                <Col xl={19} lg={19} md={20} sm={24} xs={24}>
                  <div className='yellow-box'>
                    <p>{guinnessHead.text2}</p>
                    <div className='download-document'>
                      <DownloadOutlined className='download-document-icon' />
                      <span className='download-document-span'>
                      {documentToReactComponents(guinnessHead.richText)}
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
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
   
    const res = await client.getEntries({ content_type: "homeBannerWithoutImage","fields.text":"Diageo Retirement Savings Plan (Guinness Storehouse Section)"})
    const links = await client.getEntries({ content_type: "sectionLinks","fields.title":"Diageo Retirement Savings Plan1"})
    const head = await client.getEntries({ content_type: "subMenuMainSections","fields.text":"Diageo Ireland Section"})
    console.log(res.items[0].fields)
    console.log(links.items[0].fields)
    console.log(head.items[0].fields)
    
   
    return {
      props: {
        guinnessContent: res.items[0].fields,
        guinnesslinks:links.items[0].fields,
        guinnessHead:head.items[0].fields,
       
      },
      
    }
  }



