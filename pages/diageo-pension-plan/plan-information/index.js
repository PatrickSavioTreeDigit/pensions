import Brand from '@/components/Brands/Brand'
import { Col, Row } from 'antd'
import { useRouter } from 'next/router'
import React from 'react'
import {createClient} from "contentful"

export default function Planinformation({planContent}) {
  const router = useRouter()
  return (

    <div className='plan-information-container'>
      <div className='first-component'>
        <div className='diageo-container'>
          <span
            className='cp'
            onClick={() => router.push('/diageo-pension-plan')}
          >
            {planContent.text2}
          </span>{' '}
          / <span>{planContent.text}</span>
          <Row justify={'center'}>
            <Col span={24}>
              <span className='heading'>
                <h2>{planContent.text3}</h2>
              </span>
            </Col>
          </Row>
        </div>
      </div>
      <div className='second-component'>
        <div className='diageo-container'>
          <Row>
            <Col xl={6} lg={6} md={6} sm={24} xs={24}>
              <h4 className='active-page-name'>{planContent.text}</h4>
              <h4
                onClick={() => {
                  router.push('/diageo-pension-plan/how-the-plan-works')
                }}
              >
               {planContent.text4}
              </h4>
              <h4
                onClick={() => {
                  router.push('/diageo-pension-plan/how-do-i-join')
                }}
              >
                {planContent.text5}
              </h4>
              <h4 onClick={() => router.push('/diageo-pension-plan/forms')}>
               {planContent.text6}
              </h4>
            </Col>
            <Col xl={1} lg={1} md={1} sm={0} xs={0}></Col>
            <Col xl={14} lg={14} md={14} sm={24} xs={24} className='right-col'>
              <p>
                {planContent.longText}
                {/* The Diageo Pension Plan is a defined contribution scheme which
                is set up under a master trust with Scottish Widows since 3
                April 2018. Prior to this Zurich was the master trust provider. */}
              </p>
              <p>
                {planContent.text1}
             {/* {   More information can be found by clicking on the menu options to
                the left of this page.} */}
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
   
    const res = await client.getEntries({ content_type: "subMenu","fields.text":"Plan Information"})
    console.log(res.items[0].fields)
   
    // 'fields.title': "tv"
    return {
      props: {
        planContent: res.items[0].fields,
      },
      
    }
  }
