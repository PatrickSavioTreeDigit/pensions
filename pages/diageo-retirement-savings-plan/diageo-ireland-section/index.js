import Brand from '@/components/Brands/Brand'
import { Col, Row } from 'antd'
import { useRouter } from 'next/router'
import React from 'react'
import { DownloadOutlined } from '@ant-design/icons'
 
import {createClient} from "contentful"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
export default function Index({irelandContent , irelandLinks,  irelandHead}) {
  const router = useRouter()
  return (
    <div className='diageo-retirement-savings-plan-container'>
      <div className='blue-color-container'>
        <div className='diageo-container'>
          <span
            className='cp'
            onClick={() => router.push('/diageo-retirement-savings-plan')}
          >
           {irelandContent.text1}
          </span>{' '}
          / <span>{irelandContent.text}</span>{' '}
          <Row justify={'center'}>
            <Col span={24}>
              <span className='heading'>
                <h2>{irelandContent.text}</h2>
                <p>
                {irelandContent.description}
                </p>
              </span>
            </Col>
          </Row>
        </div>
      </div>
      <div className='second-component'>
        <div className='diageo-container'>
          <Row>
            <Col xl={6} lg={6} md={6} sm={24} xs={24}>
              <h4 className='active-page-name'>{irelandContent.text}</h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/diageo-ireland-section/member-information'
                  )
                }}
              >
                {irelandLinks.listLinks2}
              </h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/diageo-ireland-section//how-do-i-join'
                  )
                }}
              >
               {irelandLinks.listLinks3}
              </h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/diageo-ireland-section/forms'
                  )
                }}
              >
                {irelandLinks.listLinks4}
              </h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/diageo-ireland-section/scheme-documentation'
                  )
                }}
              >
                {irelandLinks.listLink5}
              </h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/diageo-ireland-section/investment-options'
                  )
                }}
              >
                {irelandLinks.listLinks6}
              </h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/diageo-ireland-section/annual-reviews'
                  )
                }}
              >
               {irelandLinks.listLinks7}
              </h4>
            </Col>
            <Col xl={1} lg={1} md={1} sm={0} xs={0}></Col>
            <Col xl={14} lg={14} md={14} sm={24} xs={24} className='right-col'>
              <Row>
                <Col xl={19} lg={19} md={20} sm={24} xs={24}>
                  <div className='yellow-box'>
                  <p>{irelandHead.text2}</p>
                    <div className='download-document'>
                      <DownloadOutlined className='download-document-icon' />
                      <span className='download-document-span'>
                      <a target='_blank' href='https://media.diageo.com/diageo-corporate-media/media/q4gfbxua/drsp-final-privacy-notice-pdf.pdf'>
                      {documentToReactComponents(irelandHead.richText)}
                      </a>
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
    </div>
  )
}
 
export async function getStaticProps() {
  console.log()
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })
   
    const res = await client.getEntries({ content_type: "homeBannerWithoutImage","fields.text":"Diageo Ireland Section"})
    const links = await client.getEntries({ content_type: "sectionLinks","fields.title":"Diageo Retirement Savings Plan1"})
    const head = await client.getEntries({ content_type: "subMenuMainSections","fields.text":"Diageo Ireland Section"})
    console.log(res.items[0].fields)
    console.log(links.items[0].fields)
    console.log(head.items[0].fields)
   
   
    return {
      props: {
        irelandContent: res.items[0].fields,
        irelandLinks:links.items[0].fields,
        irelandHead:head.items[0].fields,
       
      },
      
    }
  }