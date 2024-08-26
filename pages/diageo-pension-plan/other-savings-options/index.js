import Brand from '@/components/Brands/Brand'
import { Col, Row } from 'antd'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import {createClient} from "contentful"
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
export default function Savings({savingContent,preFooterContent,prefooterDescriptionContent,headerContent}) {
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
    {show && <div className='other-saving-options-container'>
      <div className='yellow-color-container'>
        <div className='diageo-container'>
          <span
            className='cp'
            onClick={() => router.push('/diageo-pension-plan')}
          >
            {savingContent.text2}
          </span>{' '}
          / <span>{savingContent.text}</span>{' '}
          <Row justify={'center'}>
            <Col span={24}>
              <span className='heading'>
                <h2>{savingContent.text}</h2>
              </span>
            </Col>
          </Row>
        </div>
      </div>
      <div className='second-component'>
        <div className='diageo-container'>
          <Row>
            <Col xl={6} lg={6} md={6} sm={24} xs={24}>
              <h4 className='active-page-name'>{savingContent.text}</h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-pension-plan/diageo-individual-savings-account-isa'
                  )
                }}
              >
                {savingContent.text3}
              </h4>
            </Col>
            <Col xl={1} lg={1} md={1} sm={0} xs={0}></Col>
            <Col xl={14} lg={14} md={14} sm={24} xs={24} className='right-col'>
              <p>
              {documentToReactComponents(savingContent.richText1)}
              </p>
              <p>
              {documentToReactComponents(savingContent.richText2)}
              </p>
              <p>{savingContent.text4}</p>
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
   
    const res = await client.getEntries({ content_type: "subMenu","fields.text":"Other Savings Options"})
    console.log(res.items[0].fields)
   
    // 'fields.title': "tv"
    return {
      props: {
        savingContent: res.items[0].fields,
      },
      
    }
  }
 