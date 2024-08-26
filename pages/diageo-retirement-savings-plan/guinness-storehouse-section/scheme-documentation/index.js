import Brand from '@/components/Brands/Brand'
import { Col, Row } from 'antd'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react';
import { DownloadOutlined } from '@ant-design/icons'
import Link from 'next/link'
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { createClient } from "contentful"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
export default function Ireland({ schemeContent, schemelinks,preFooterContent,prefooterDescriptionContent,headerContent }) {
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
            {schemeContent.text}
          </span>{' '}
          /{' '}
          <span
            className='cp'
            onClick={() =>
              router.push(
                '/diageo-retirement-savings-plan/diageo-ireland-section'
              )
            }
          >
            {schemelinks.listLinks9}
          </span>{' '}
          / <span>{schemeContent.text2}</span>{' '}
          <Row justify={'center'}>
            <Col span={24}>
              <span className='heading'>
                <h2>{schemeContent.text2}</h2>
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
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/diageo-ireland-section'
                  )
                }}
              >
                {schemelinks.listLinks9}
              </h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/diageo-ireland-section/member-information'
                  )
                }}
              >
                {schemelinks.listLinks2}
              </h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/diageo-ireland-section/how-do-i-join'
                  )
                }}
              >
                {schemelinks.listLinks3}
              </h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/diageo-ireland-section/forms'
                  )
                }}
              >
                {schemelinks.listLinks4}
              </h4>
              <h4 className='active-page-name'>   {schemelinks.listLink5}</h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/diageo-ireland-section/investment-options'
                  )
                }}
              >
                {schemelinks.listLinks6}
              </h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/diageo-ireland-section/annual-reviews'
                  )
                }}
              >
                {schemelinks.listLinks7}
              </h4>
            </Col>
            <Col xl={1} lg={1} md={1} sm={0} xs={0}></Col>
            <Col xl={14} lg={14} md={14} sm={24} xs={24} className='right-col'>
              <h2>{schemeContent.header}</h2>

              <div className='download-document'>
                <DownloadOutlined className='download-document-icon' />
                <Link aria-label="Read more about scheme of diageo pensions" target='_blank' href="https://media-diageo.diageoplatform.com/diageo-corporate-media/media/zwqlkmyc/consolidated-tdr-with-appendix-di.pdf"><span className='download-document-span'>
                  {schemeContent.pdf}
                </span></Link>
              </div>

              <h2>{schemeContent.header1}</h2>

              <div className='download-document'>
                <DownloadOutlined className='download-document-icon' />
                <Link aria-label="Read more about scheme of diageo pensions" target='_blank' href="https://media-diageo.diageoplatform.com/diageo-corporate-media/media/t3qa1lga/dirss-sipp-may18.pdf"><span className='download-document-span'>
                  {schemeContent.pdf1}
                </span></Link>
              </div>

              <h2>{schemeContent.header2}</h2>

              <div className='download-document'>
                <DownloadOutlined className='download-document-icon' />
                <a target='_blank' href="https://media-diageo.diageoplatform.com/diageo-corporate-media/media/ozqffg2e/drsp-trustee-report-and-accountsto-june-2022.pdf"><span className='download-document-span'>
                  {schemeContent.pdf2}
                </span></a>
              </div>
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

  const res = await client.getEntries({ content_type: "schemeDocumentation", "fields.text": "Diageo Retirement Savings Plan" })
  const links = await client.getEntries({ content_type: "sectionLinks", "fields.title": "Diageo Retirement Savings Plan1" })

  console.log(res.items[0].fields)
  console.log(links.items[0].fields)


  return {
    props: {
      schemeContent: res.items[0].fields,
      schemelinks: links.items[0].fields,

    },
    
  }
}

