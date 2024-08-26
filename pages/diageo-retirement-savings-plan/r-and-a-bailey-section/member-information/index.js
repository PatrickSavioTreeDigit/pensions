import Brand from '@/components/Brands/Brand'
import { Col, Row } from 'antd'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { DownloadOutlined } from '@ant-design/icons'
import { createClient } from "contentful"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link'
export default function Index({ memeberContent, memberlinks, memberHead,preFooterContent,prefooterDescriptionContent,headerContent }) {
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
            {memeberContent.text}
          </span>{' '}
          /{' '}
          <span
            className='cp'
            onClick={() =>
              router.push(
                '/diageo-retirement-savings-plan/r-and-a-bailey-section'
              )
            }
          >
            {memeberContent.text1}
          </span>{' '}
          / <span>{memeberContent.text2}</span>{' '}
          <Row justify={'center'}>
            <Col span={24}>
              <span className='heading'>
                <h2>{memeberContent.text3}</h2>
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
                    '/diageo-retirement-savings-plan/r-and-a-bailey-section'
                  )
                }}
              >
                {memberlinks.listLinks8}
              </h4>
              <h4 className='active-page-name'>{memberlinks.listLinks2}</h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/r-and-a-bailey-section/how-do-i-join'
                  )
                }}
              >
                {memberlinks.listLinks3}
              </h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/r-and-a-bailey-section/forms'
                  )
                }}
              >
                {memberlinks.listLinks4}
              </h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/r-and-a-bailey-section/scheme-documentation'
                  )
                }}
              >
                {memberlinks.listLink5}
              </h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/r-and-a-bailey-section/investment-options'
                  )
                }}
              >
                {memberlinks.listLinks6}
              </h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/r-and-a-bailey-section/annual-reviews'
                  )
                }}
              >
                Annual Reviews
              </h4>
            </Col>
            <Col xl={1} lg={1} md={1} sm={0} xs={0}></Col>
            <Col xl={14} lg={14} md={14} sm={24} xs={24} className='right-col'>
              <Row justify={'space-around'}>
                <Col xl={11} lg={11} md={11} sm={24} xs={24}>
                  <div className='yellow-box'>
                    <p>{memeberContent.header}</p>
                    <h5>{memeberContent.text5}</h5>
                    <div className='download-document'>
                      <DownloadOutlined className='download-document-icon' />
                      <span className='download-document-span1'>
                      <Link aria-label="Read more about scheme of diageo pensions" target='_blank' href='https://media.diageo.com/diageo-corporate-media/media/svqai1yd/rab-section-of-drsp-member-booklet-2019-final_3.pdf'>
                        {documentToReactComponents(memeberContent.richText1)}
                        </Link>
                      </span>
                    </div>
                  </div>
                </Col>
                <Col xl={11} lg={11} md={11} sm={24} xs={24}>
                  <div className='yellow-box'>
                    <p>{memeberContent.header1}</p>
                    <h5>{memeberContent.text5}</h5>
                    <div className='download-document'>
                      <DownloadOutlined className='download-document-icon' />
                      <span className='download-document-span1'>
                      <Link aria-label="Read more about scheme of diageo pensions" target='_blank' href='https://media.diageo.com/diageo-corporate-media/media/nqoko0x1/rab_section_of_drsp_investment_guide_2019_final_4.pdf'>
                        {documentToReactComponents(memeberContent.richText3)}
                        </Link>
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

  const res = await client.getEntries({ content_type: "memberInformation", "fields.mainHeader": "R & A Bailey Section / Member information" })
  const links = await client.getEntries({ content_type: "sectionLinks", "fields.title": "Diageo Retirement Savings Plan1" })

  console.log(res.items[0].fields)
  console.log(links.items[0].fields)


  return {
    props: {
      memeberContent: res.items[0].fields,
      memberlinks: links.items[0].fields,

    },
    
  }
}
