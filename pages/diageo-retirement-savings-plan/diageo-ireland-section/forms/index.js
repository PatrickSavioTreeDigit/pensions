import Brand from '@/components/Brands/Brand'
import { Col, Row } from 'antd'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { DownloadOutlined } from '@ant-design/icons'
import Link from 'next/link'
import Header from '@/components/layout/Header';

import Footer from '@/components/layout/Footer';
import { createClient } from "contentful"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
export default function Ireland({ formsContent, formslinks, preFooterContent,prefooterDescriptionContent,headerContent }) {
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
            {formsContent.text}
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
            {formslinks.listLinks}
          </span>{' '}
          / <span>{formsContent.text2}</span>{' '}
          <Row justify={'center'}>
            <Col span={24}>
              <span className='heading'>
                <h2>{formsContent.text2}</h2>
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
                {formslinks.listLinks}
              </h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/diageo-ireland-section/member-information'
                  )
                }}
              >
                {formslinks.listLinks2}
              </h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/diageo-ireland-section/how-do-i-join'
                  )
                }}
              >
                {formslinks.listLinks3}
              </h4>
              <h4 className='active-page-name'>{formslinks.listLinks4}</h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/diageo-ireland-section/scheme-documentation'
                  )
                }}
              >
                {formslinks.listLink5}
              </h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/diageo-ireland-section/investment-options'
                  )
                }}
              >
                {formslinks.listLinks6}
              </h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/diageo-ireland-section/annual-reviews'
                  )
                }}
              >
                {formslinks.listLinks7}
              </h4>
            </Col>
            <Col xl={1} lg={1} md={1} sm={0} xs={0}></Col>
            <Col xl={14} lg={14} md={14} sm={24} xs={24} className='right-col'>
              <h2>{formsContent.header}</h2>
              <p>
                {formsContent.description}
              </p>
              <p>{formsContent.descriptionContent}</p>
              <h2>{formsContent.header1}</h2>
              <p>
                {formsContent.description1}
              </p>
              <div className='download-document'>
                <DownloadOutlined className='download-document-icon' />
                <Link aria-label="Read more about scheme of diageo pensions" target='_blank' href="https://media-diageo.diageoplatform.com/diageo-corporate-media/media/4znjsrtt/drsp-investment-form-jan-19-xx_1.pdf"> <span className='download-document-span'>
                  {formsContent.pdf1}
                </span></Link>
                {/* {documentToReactComponents(formsContent.pdf1)} */}
              </div>
              <h2>{formsContent.Header2}</h2>
              <p>
                {formsContent.description2}
              </p>
              <div className='download-document'>
                <DownloadOutlined className='download-document-icon' />
                <span className='download-document-span'>
                <Link aria-label="Read more about scheme of diageo pensions" target='_blank' href='https://media.diageo.com/diageo-corporate-media/media/dwcpnbkx/drsp-fund-switch-form-jan-19.pdf'>
                  {formsContent.pdf2}
                  </Link>
                </span>
              </div>
              <h2>{formsContent.header3}</h2>
              <p>
                {formsContent.description3}
              </p>
              <h2>{formsContent.header4}</h2>
              <p>
                {formsContent.description4}
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

  const res = await client.getEntries({ content_type: "formsDiageoRetirementSavingsPlan", "fields.text": "Diageo Retirement Savings Plan" })
  const links = await client.getEntries({ content_type: "sectionLinks", "fields.title": "Diageo Retirement Savings Plan1" })

  console.log(res.items[0].fields)
  console.log(links.items[0].fields)


  return {
    props: {
      formsContent: res.items[0].fields,
      formslinks: links.items[0].fields,

    },
    
  }
}