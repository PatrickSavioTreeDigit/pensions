import Brand from '@/components/Brands/Brand'
import { Col, Row } from 'antd'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { DownloadOutlined } from '@ant-design/icons'
import {createClient} from "contentful"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link'

export default function Dpp({diaContent,dppLinks,preFooterContent,prefooterDescriptionContent,headerContent}) {
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
            {diaContent.text1}
          </span>{' '}
          /{' '}
          <span
            className='cp'
            onClick={() =>
              router.push('/diageo-pension-plan/other-savings-options')
            }
          >
            {diaContent.text3}
          </span>/{' '}
          <span>{diaContent.text}</span>{' '}
          <Row justify={'center'}>
            <Col span={24}>
              <span className='heading'>
                <h2>{diaContent.text}</h2>
                <p>
                {diaContent.description}
                </p>
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
                  router.push('/diageo-pension-plan/other-savings-options')
                }}
              >
                {diaContent.text3}
              </h4>
              <h4 className='active-page-name'
              onClick={() => {
                  router.push('/diageo-pension-plan/diageo-individual-savings-account-isa')
                }}
                >
              {diaContent.text}
              </h4>
            </Col>
            <Col xl={1} lg={1} md={1} sm={0} xs={0}></Col>
            <Col xl={14} lg={14} md={14} sm={24} xs={24} className='right-col'>
              <p>
              {dppLinks.longText}
              </p>
              <hr />
              <Row justify={'space-around'}>
               <Col span={11}> {diaContent.text1}</Col>
                <Col span={11}> {dppLinks.tableHeader}</Col>
                
              </Row>

              <div className='table'> 

             
        
                <Row justify={'space-between'} className='table-row'>
                  <Col span={5}>
                    <p>{dppLinks.dl}</p>
                  </Col>
                  <Col span={5}>
                    <p>{dppLinks.table2}</p>
                  </Col>
                  <Col span={5}>
                    <p>{dppLinks.dl}</p>
                  </Col>
                  <Col span={5}>
                    <p>{dppLinks.table2}</p>
                  </Col>
                </Row>
                <Row justify={'space-between'} className='table-row'>
                  <Col span={5}>
                    <p>{dppLinks.table4}</p>
                  </Col>
                  <Col span={5}>
                    <p>{dppLinks.table5}</p>
                  </Col>
                  <Col span={5}>
                    <p>{dppLinks.table6}</p>
                  </Col>
                  <Col span={5}>
                    <p>{dppLinks.table7}</p>
                  </Col>
                </Row>
                <Row justify={'space-between'} className='table-row'>
                  <Col span={5}>
                    <p>{dppLinks.table8}</p>
                  </Col>
                  <Col span={5}>
                    <p>{dppLinks.table9}</p>
                  </Col>
                  <Col span={5}>
                    <p>{dppLinks.table6}</p>
                  </Col>
                  <Col span={5}>
                    <p>{dppLinks.table1}</p>
                  </Col>
                </Row>
                <Row justify={'space-between'} className='table-row'>
                  <Col span={5}>
                    <p>{dppLinks.tablea}</p>
                  </Col>
                  <Col span={5}>
                    <p>{dppLinks.tableb}</p>
                  </Col>
                  <Col span={5}>
                    <p>{dppLinks.table6}</p>
                  </Col>
                  <Col span={5}>
                    <p>{dppLinks.tablec}</p>
                  </Col>
                </Row>
                <Row justify={'space-between'} className='table-row'>
                  <Col span={5}>
                    <p>{dppLinks.table5}</p>
                  </Col>
                  <Col span={5}>
                    <p>{dppLinks.tableh}</p>
                  </Col>
                  <Col span={5}>
                    <p>{dppLinks.tablej}</p>
                  </Col>
                  <Col span={5}>
                    <p>{dppLinks.tablez}</p>
                  </Col>
                </Row> 
              </div>

              <Row>
                <Col xl={20} lg={20} md={21} sm={24} xs={24}>
                  <p>

                 
                  
                  {dppLinks.text1}
                    <span>
                      <u className='cp'>

                      <Link aria-label="Read more about scheme of diageo pensions" target='_blank' href='https://www.gov.uk/individual-savings-accounts/how-isas-work'>
                       {documentToReactComponents(dppLinks.richText1)}
                       {/* www.gov.uk/individual-savings-accounts/how-isas-work*/}
                       </Link>
                      </u>
                    </span> 
                  </p>

                  <h1>{dppLinks.header}</h1>
                  <p>
                  {dppLinks.description}
                  </p>

                  <div className='download-document'>
                    <DownloadOutlined className='download-document-icon' />
                    <span className='download-document-span'>
                    <Link aria-label="Read more about scheme of diageo pensions" target='_blank' href='https://media.diageo.com/diageo-corporate-media/media/fcyd2yqa/diageo-savings-plan-eguide_0.pdf'>
                    {documentToReactComponents(dppLinks.pdf)}
                    </Link>
                    </span>
                  </div>
                  <h1>{dppLinks.header1}</h1>
                  <p>
                  {dppLinks.description1}
                  </p>

                  <h1>{dppLinks.header2}</h1>
                 
                  <Link aria-label="Read more about scheme of diageo pensions" target='_blank' href='http://www.corporate-vantage.co.uk/dsp'>
                 
                 {documentToReactComponents(dppLinks.descrption2)} {documentToReactComponents(dppLinks.rich)} 
                 </Link>

                  {/*
                    For further information on the Diageo Individual Savings
                    Account please visit the{' '}
                    <span>
                      <u className='cp'>Hargreaves Lansdown site.</u>
                    </span>*/}
                  
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

    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })
   
   
   const res = await client.getEntries({ content_type: "homeBannerWithoutImage","fields.text":"Diageo Individual Savings Account (ISA)"})
   const links = await client.getEntries({ content_type: "diageoIndividualSavingsAccountIsa","fields.text": "Diageo Individual Savings Account (ISA)"})
    
   
    
   
    // 'fields.title': "tv"
    return {
      props: {
        diaContent: res.items[0].fields,
        dppLinks:links.items[0].fields,
       
      },
      
    }
  }
