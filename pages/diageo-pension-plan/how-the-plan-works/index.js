import Brand from '@/components/Brands/Brand'
import { Col, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import VideoScreenShot from '../../../public/Assets/Images/videoScreenShot.png'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ImportOutlined, ArrowRightOutlined } from '@ant-design/icons'
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

import { createClient } from "contentful"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Link from 'next/link'
export default function Index({ planContent, planlinks, planhead,preFooterContent,prefooterDescriptionContent,headerContent }) {
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
            {planhead.text1}
          </span>{' '}
          /{' '}
          <span
            className='cp'
            onClick={() => router.push('/diageo-pension-plan/plan-information')}
          >
            {planhead.text3}
          </span>{' '}
          / <span>{planContent.text}</span>
          <Row justify={'center'}>
            <Col span={24}>
              <span className='heading'>
                <div>
                  <h2>{planContent.text}</h2>
                  <p>
                    {planhead.description}
                  </p>
                </div>
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
                {planhead.text3}
              </h4>
              <h4 className='active-page-name'>{planContent.text}</h4>
              <h4
                onClick={() => {
                  router.push('/diageo-pension-plan/how-do-i-join')
                }}
              >
                {planlinks.listLinks3}
              </h4>
              <h4 onClick={() => router.push('/diageo-pension-plan/forms')}>
                {planlinks.listLinks4}
              </h4>
            </Col>
            <Col xl={1} lg={1} md={1} sm={0} xs={0}></Col>
            <Col xl={14} lg={14} md={14} sm={24} xs={24}>
              <Image alt='Image' src={VideoScreenShot} className='mb-50 temp-img' />
              <p>
                {planContent.description}
              </p>
              <div className='download-document'>
                <span className='download-document-span'>
                     <Link aria-label="Read more about scheme of diageo pensions"  target='_blank' href='https://www.scottishwidows.co.uk/save/dpp.html'>
                  {documentToReactComponents(planContent.richText)}
                   </Link>
                </span>
                <ImportOutlined className='download-document-icon' />

              </div>
              {/* <span className='black1'>{documentToReactComponents(planContent.richText)}</span> */}
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

  const res = await client.getEntries({ content_type: "howThePlanWorks" })
  const links = await client.getEntries({ content_type: "sectionLinks", "fields.title": "Diageo Retirement Savings Plan1" })
  const head = await client.getEntries({ content_type: "homeBannerWithoutImage", "fields.text": "How the Plan works" })

  console.log(res.items[0].fields)
  console.log(links.items[0].fields)
  console.log(head.items[0].fields)

  return {
    props: {
      planContent: res.items[0].fields,
      planlinks: links.items[0].fields,
      planhead: head.items[0].fields,
    },
    
  }
}




