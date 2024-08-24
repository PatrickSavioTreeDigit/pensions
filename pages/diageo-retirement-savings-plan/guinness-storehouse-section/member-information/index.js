import Brand from '@/components/Brands/Brand'
import { Col, Row } from 'antd'
import { useRouter } from 'next/router'
import React from 'react'
import { DownloadOutlined } from '@ant-design/icons'
 
import {createClient} from "contentful"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
 
export default function Index({memeberContent,memberlinks,memberHead}) {
  const router = useRouter()
  return (
    <div className='diageo-retirement-savings-plan-container'>
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
                '/diageo-retirement-savings-plan/guinness-storehouse-section'
              )
            }
          >
            {memberlinks.listLinks9}
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
                    '/diageo-retirement-savings-plan/guinness-storehouse-section'
                  )
                }}
              >
                {memberlinks.listLinks9}
              </h4>
              <h4 className='active-page-name'>{memberlinks.listLinks2}</h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/guinness-storehouse-section/how-do-i-join'
                  )
                }}
              >
                {memberlinks.listLinks3}
              </h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/guinness-storehouse-section/forms'
                  )
                }}
              >
                {memberlinks.listLinks4}
              </h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/guinness-storehouse-section/scheme-documentation'
                  )
                }}
              >
                {memberlinks.listLink5}
              </h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/guinness-storehouse-section/investment-options'
                  )
                }}
              >
               {memberlinks.listLinks6}</h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/guinness-storehouse-section/annual-reviews'
                  )
                }}
              >
                {memberlinks.listLinks10}
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
                      {documentToReactComponents(memeberContent.richText1)}
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
                      {documentToReactComponents(memeberContent.richText3)}
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
   
    const res = await client.getEntries({ content_type: "memberInformation","fields.text":"Diageo Retirement Savings Plan"})
    const links = await client.getEntries({ content_type: "sectionLinks","fields.title":"Diageo Retirement Savings Plan1"})
   
    console.log(res.items[0].fields)
    console.log(links.items[0].fields)
   
   
    return {
      props: {
        memeberContent: res.items[0].fields,
        memberlinks:links.items[0].fields,
     
      },
      
    }
  }