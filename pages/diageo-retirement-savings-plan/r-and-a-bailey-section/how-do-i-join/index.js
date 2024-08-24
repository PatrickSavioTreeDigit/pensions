import Brand from '@/components/Brands/Brand'
import { Col, Row } from 'antd'
import { useRouter } from 'next/router'
import React from 'react'
import { DownloadOutlined } from '@ant-design/icons'
 
import {createClient} from "contentful"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
export default function Index({howContent,howlinks}) {
  const router = useRouter()
  return (
 
    <div className='diageo-retirement-savings-plan-container'>
      <div className='blue-color-container'>
        <div className='diageo-container'>
          <span
            className='cp'
            onClick={() => router.push('/diageo-retirement-savings-plan')}
          >
           {howContent.text2}
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
           {howlinks.listLinks8}
          </span>{' '}
          / <span>{howContent.text}</span>{' '}
          <Row justify={'center'}>
            <Col span={24}>
              <span className='heading'>
                <h2>{howContent.text}</h2>
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
                {howlinks.listLinks8}
              </h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/diageo-ireland-section/member-information'
                  )
                }}
              >
                {howlinks.listLinks2}
              </h4>
              <h4 className='active-page-name'>{howlinks.listLinks3}</h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/diageo-ireland-section/forms'
                  )
                }}
              >
                {howlinks.listLinks4}
              </h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/diageo-ireland-section/scheme-documentation'
                  )
                }}
              >
               {howlinks.listLink5}
              </h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/diageo-ireland-section/investment-options'
                  )
                }}
              >
                {howlinks.listLinks6}
              </h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/diageo-ireland-section/annual-reviews'
                  )
                }}
              >
                {howlinks.listLinks7}
              </h4>
            </Col>
            <Col xl={1} lg={1} md={1} sm={0} xs={0}></Col>
            <Col xl={14} lg={14} md={14} sm={24} xs={24} className='right-col'>
              <p>
              {howContent.description}
              </p>
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
   
    const res = await client.getEntries({ content_type: "howDoIJoinDiageoRetirementSavingsPlan","fields.text":"How do I join?"})
    const links = await client.getEntries({ content_type: "sectionLinks","fields.title":"Diageo Retirement Savings Plan1"})
   
    console.log(res.items[0].fields)
    console.log(links.items[0].fields)
   
   
    return {
      props: {
        howContent: res.items[0].fields,
        howlinks:links.items[0].fields,
       
      },
      
    }
  }
 