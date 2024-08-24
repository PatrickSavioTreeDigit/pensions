import Brand from '@/components/Brands/Brand'
import { Col, Row, Collapse } from 'antd'
import { useRouter } from 'next/router'
import React from 'react'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'

import { createClient } from "contentful"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
export default function Index({ annualContent, annuallinks, annualyear, annualyear1, annualyear2, annualyear3, annualyear4, annualyear5 }) {
  const router = useRouter()
  const customExpandIcon = ({ isActive }) => (
    <span>{isActive ? <MinusOutlined /> : <PlusOutlined />}</span>
  )
  const items = [
    {
      key: '1',
      label: <h3>{annualContent.text}</h3>,
      children: (
        <>
          <p>
            {annualContent.text1}
          </p>
          <u className='black'>{documentToReactComponents(annualContent.richText)}</u>
        </>
      ),
    },
    {
      key: '2',
      label: <h3>{annualyear.text}</h3>,
      children: (
        <>
          <p>
            {annualyear.text1}
          </p>
          <u className='black'>{documentToReactComponents(annualyear.richText)}</u>
        </>
      ),
    },
    {
      key: '3',
      label: <h3>{annualyear1.text}</h3>,
      children: (
        <>
          <p>
            {annualyear1.text1}
          </p>
          <u className='black'>{documentToReactComponents(annualyear1.richText)}</u>
        </>
      ),
    },
    {
      key: '4',
      label: <h3>{annualyear2.text}</h3>,
      children: (
        <>
          <p>
            {annualyear2.text2}
          </p>
          <u className='black'>{documentToReactComponents(annualyear2.richText)}</u>
        </>
      ),
    },
    {
      key: '5',
      label: <h3>{annualyear3.text}</h3>,
      children: (
        <>
          <p>
            {annualyear3.text1}
          </p>
          <u className='black'>{documentToReactComponents(annualyear3.richText)}</u>
        </>
      ),
    },
    {
      key: '6',
      label: <h3>{annualyear4.text}</h3>,
      children: (
        <>
          <p>
            {annualyear4.text1}
          </p>
          <u className='black'>{documentToReactComponents(annualyear4.richText)}</u>
        </>
      ),
    },
    {
      key: '7',
      label: <h3>{annualyear5.text}</h3>,
      children: (
        <>
          <p>
            {annualyear5.text1}
          </p>
          <u className='black'>{documentToReactComponents(annualyear5.richText)}</u>
          <p>
            {annualyear5.text2}
          </p>
          <u className='black'>{documentToReactComponents(annualyear5.richtext1)}</u>
        </>
      ),
    },
  ]
  return (
    <div className='diageo-retirement-savings-plan-container'>
      <div className='blue-color-container'>
        <div className='diageo-container'>
          <span
            className='cp'
            onClick={() => router.push('/diageo-retirement-savings-plan')}
          >
            Diageo Retirement Savings Plan
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
            R & A Bailey Section
          </span>{' '}
          / <span>Annual Reviews</span>{' '}
          <Row justify={'center'}>
            <Col span={24}>
              <span className='heading'>
                <h2>Annual Reviews</h2>
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
                R & A Bailey Section
              </h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/r-and-a-bailey-section/member-information'
                  )
                }}
              >
                Member information
              </h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/r-and-a-bailey-section/how-do-i-join'
                  )
                }}
              >
                How do I join?
              </h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/r-and-a-bailey-section/forms'
                  )
                }}
              >
                Forms
              </h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/r-and-a-bailey-section/scheme-documentation'
                  )
                }}
              >
                Scheme documentation
              </h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/r-and-a-bailey-section/investment-options'
                  )
                }}
              >
                Investment options
              </h4>
              <h4 className='active-page-name'>Annual Reviews</h4>
            </Col>
            <Col xl={1} lg={1} md={1} sm={0} xs={0}></Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24} className='right-col'>
              <Collapse items={items} expandIcon={customExpandIcon} />
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

  const res = await client.getEntries({ content_type: "annualReviewsRABaileySection", "fields.text": "2022" })
  const year = await client.getEntries({ content_type: "annualReviewsRABaileySection", "fields.text": "2021" })
  const year1 = await client.getEntries({ content_type: "annualReviewsRABaileySection", "fields.text": "2020" })
  const year2 = await client.getEntries({ content_type: "annualReviewsRABaileySection", "fields.text": "2019" })
  const year3 = await client.getEntries({ content_type: "annualReviewsRABaileySection", "fields.text": "2018" })
  const year4 = await client.getEntries({ content_type: "annualReviewsRABaileySection", "fields.text": "2017" })
  const year5 = await client.getEntries({ content_type: "annualReviewsRABaileySection", "fields.text": "2016" })
  const links = await client.getEntries({ content_type: "sectionLinks", "fields.title": "Diageo Retirement Savings Plan1" })

  console.log(res.items[0].fields)
  console.log(links.items[0].fields)
  console.log(year.items[0].fields)
  console.log(year1.items[0].fields)
  console.log(year2.items[0].fields)
  console.log(year3.items[0].fields)
  console.log(year4.items[0].fields)
  console.log(year5.items[0].fields)

  return {
    props: {
      annualContent: res.items[0].fields,
      annuallinks: links.items[0].fields,
      annualyear: year.items[0].fields,
      annualyear1: year1.items[0].fields,
      annualyear2: year2.items[0].fields,
      annualyear3: year3.items[0].fields,
      annualyear4: year4.items[0].fields,
      annualyear5: year5.items[0].fields,
    },
    
  }
}
