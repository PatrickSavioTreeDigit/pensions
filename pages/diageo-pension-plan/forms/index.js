import Brand from '@/components/Brands/Brand'
import { Col, Row } from 'antd'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { DownloadOutlined } from '@ant-design/icons'
import { createClient } from "contentful"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Link from 'next/link'
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
export default function Form({ formContent, footerContent,preFooterContent,prefooterDescriptionContent,headerContent }) {
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
            {formContent.text2}
          </span>{' '}
          /{' '}
          <span
            className='cp'
            onClick={() => router.push('/diageo-pension-plan/plan-information')}

          >
            {formContent.text3}
          </span>{' '}
          / <span>{formContent.text}</span>
          <Row justify={'center'}>
            <Col span={24}>
              <span className='heading'>
                <h2>{formContent.text}</h2>
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
                  router.push('/diageo-pension-plan/plan-information')
                }}
              >
                {formContent.text3}
              </h4>
              <h4
                onClick={() => {
                  router.push('/diageo-pension-plan/how-the-plan-works')
                }}
              >
                {formContent.text4}
              </h4>
              <h4
                onClick={() => {
                  router.push('/diageo-pension-plan/how-do-i-join')
                }}
              >
                {formContent.text5}
              </h4>
              <h4 className='active-page-name'> {formContent.text} </h4>
            </Col>
            <Col xl={1} lg={1} md={1} sm={0} xs={0}></Col>
            <Col xl={14} lg={14} md={14} sm={24} xs={24} className='right-col'>

              <p>
                {formContent.longText}
              </p>
              <div className='download-document'>
                <DownloadOutlined className='download-document-icon' />
                <Link aria-label="Read more about scheme of diageo pensions" target='_blank' href="https://media-diageo.diageoplatform.com/diageo-corporate-media/media/wl3h32f2/excepted-life-policy-nomination-of-beneficiary-gdpr-v2.pdf"><span className='download-document-span'>
                  {formContent.text6}
                </span></Link>
              </div>

              <p>
                {formContent.text1}
              </p>

              <div className='download-document'>
                <DownloadOutlined className='download-document-icon' />
                <Link aria-label="Read more about scheme of diageo pensions" target='_blank' href="https://www.scottishwidows.co.uk/save/dpp.html"><span className='download-document-span'>
                  {formContent.text7}
                </span></Link>
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

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: "subMenu", "fields.text": "Forms" })
  const footer = await client.getEntries({ content_type: "prefooterDescription", "fields.heading": "DIAGEO Pension" })



  return {
    props: {
      formContent: res.items[0].fields,
      footerContent: footer.items[0].fields,
    },
    
  }
}


