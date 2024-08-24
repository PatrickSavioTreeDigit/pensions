import { Row, Col, Image, Breadcrumb } from 'antd'
import React from 'react'
import { ArrowRightOutlined } from '@ant-design/icons'
import Brand from '@/components/Brands/Brand'
import {createClient} from "contentful"
import { useRouter } from 'next/router'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Link from "next/link"
 
export default function Home({retirementContent,retirementLinks,retirementHome}) {
  const router = useRouter()
  return (
    <div className='saving-plan-container'>
      <section
        className='container'
        style={{
          background: 'linear-gradient(135deg, #e6f4ff, #e8f5ff 64%, #f6e7ff)',
         
        
          
        }}
      >
        <div className='diageo-container'>
          <div className='saving'>
            <Breadcrumb className='breadcrumb'>
              <Breadcrumb.Item>{retirementContent.text}</Breadcrumb.Item>
            </Breadcrumb>
 
            <Row align='middle' justify='center'>
              <Col xs={24} sm={24} md={13} className='col'>
                <div className='para'>
                  <h1 className='head'>{retirementContent.text}</h1>
                  <div className='des1'>
                      <p>{retirementHome.description}</p>
                   
                     {/* <p className='text'>
                     
                      This is the defined contribution pension plan for
                      employees in Ireland.
                    </p>  */}
                   
                  </div>
                </div>
              </Col>
 
              <Col xs={24} sm={24} md={10} className='img1'>
              <Image loader={()=>'https:' + retirementHome.image.fields.file.url}
              src={'https:' + retirementHome.image.fields.file.url}
              preview={false}/>
                {/* <Image
                  src='../Assets/Images/supply-chain-centre.webp'
                  alt='retirement-saving'
                  style={{ maxWidth: '100%', height: 'auto' }}
                  preview={false}
                /> */}
              </Col>
            </Row>
          </div>
        </div>
      </section>
      <div className='pink-shade-background1'  >
        <div className='diageo-container'>
          <h3>{retirementLinks.heading}</h3>
          <Row justify={'space-between'}>
           
             <Col
              xl={7}
              lg={7}
              md={11}
              sm={11}
              xs={11}
              className='different-links'
              onClick={() =>
                router.push('/diageo-retirement-savings-plan/diageo-ireland-section')
                 
              }
             
            >
             <span >{retirementLinks.listLinks} </span>
 
             <ArrowRightOutlined/>
            </Col> {''}
           
            <Col
              xl={7}
              lg={7}
              md={11}
              sm={11}
              xs={11}
              className='different-links'
              onClick={() => router.push('/diageo-retirement-savings-plan/r-and-a-bailey-section')}
            >
              <span >{retirementLinks.listLinks8}</span> <ArrowRightOutlined />
            </Col>
            <Col
              xl={7}
              lg={7}
              md={11}
              sm={11}
              xs={11}
              className='different-links'
              onClick={() => router.push('/diageo-retirement-savings-plan/guinness-storehouse-section')}
            >
              <span >{retirementLinks.listLinks9}</span> <ArrowRightOutlined />
            </Col> 
            <Col
              xl={7}
              lg={7}
              md={11}
              sm={11}
              xs={11}
              className='different-links'
              onClick={() =>
                router.push('/diageo-retirement-savings-plan/diageo-ireland-section/member-information')
              }
            >
              <span>{retirementLinks.listLinks2}</span> <ArrowRightOutlined />
            </Col> 
            <Col
              xl={7}
              lg={7}
              md={11}
              sm={11}
              xs={11}
              className='different-links'
              onClick={() => router.push('/diageo-retirement-savings-plan/r-and-a-bailey-section/member-information')}
             
            >
             <span> {retirementLinks.listLinks2} </span> <ArrowRightOutlined />
             
            </Col>
 
 
            <Col
              xl={7}
              lg={7}
              md={11}
              sm={11}
              xs={11}
              className='different-links'
              onClick={() => router.push('/diageo-retirement-savings-plan/guinness-storehouse-section/member-information')}
            >
              <span className='underline-text'>{retirementLinks.listLinks2}</span>{' '}
              <ArrowRightOutlined />
            </Col>
            <Col
              xl={7}
              lg={7}
              md={11}
              sm={11}
              xs={11}
              className='different-links'
              onClick={() =>
                router.push('diageo-retirement-savings-plan/diageo-ireland-section/how-do-i-join')
              }
            >
              <span>{retirementLinks.listLinks3}</span> <ArrowRightOutlined />
            </Col>
            <Col
              xl={7}
              lg={7}
              md={11}
              sm={11}
              xs={11}
              className='different-links'
              onClick={() => router.push('/diageo-retirement-savings-plan/r-and-a-bailey-section/how-do-i-join')}
             
            >
             <span> {retirementLinks.listLinks3} </span> <ArrowRightOutlined />
             
            </Col>
 
 
            <Col
              xl={7}
              lg={7}
              md={11}
              sm={11}
              xs={11}
              className='different-links'
              onClick={() => router.push('/diageo-retirement-savings-plan/guinness-storehouse-section/how-do-i-join')}
            >
              <span className='underline-text'>{retirementLinks.listLinks3}</span>{' '}
              <ArrowRightOutlined />
            </Col>
            <Col
              xl={7}
              lg={7}
              md={11}
              sm={11}
              xs={11}
              className='different-links'
              onClick={() =>
                router.push('/diageo-retirement-savings-plan/diageo-ireland-section/forms')
              }
            >
              <span>{retirementLinks.listLinks4}</span> <ArrowRightOutlined />
            </Col>
            <Col
              xl={7}
              lg={7}
              md={11}
              sm={11}
              xs={11}
              className='different-links'
              onClick={() => router.push('/diageo-retirement-savings-plan/r-and-a-bailey-section/forms')}
             
            >
             <span> {retirementLinks.listLinks4} </span> <ArrowRightOutlined />
             
            </Col>
 
 
            <Col
              xl={7}
              lg={7}
              md={11}
              sm={11}
              xs={11}
              className='different-links'
              onClick={() => router.push('diageo-retirement-savings-plan/guinness-storehouse-section/forms')}
            >
              <span className='underline-text'>{retirementLinks.listLinks4}</span>{' '}
              <ArrowRightOutlined />
            </Col>
            <Col
              xl={7}
              lg={7}
              md={11}
              sm={11}
              xs={11}
              className='different-links'
              onClick={() =>
                router.push('/diageo-retirement-savings-plan/diageo-ireland-section/scheme-documentation')
              }
            >
              <span>{retirementLinks.listLink5}</span> <ArrowRightOutlined />
            </Col>
            <Col
              xl={7}
              lg={7}
              md={11}
              sm={11}
              xs={11}
              className='different-links'
              onClick={() => router.push('/diageo-retirement-savings-plan/r-and-a-bailey-section/scheme-documentation')}
             
            >
             <span> {retirementLinks.listLink5} </span> <ArrowRightOutlined />
             
            </Col>
 
 
            <Col
              xl={7}
              lg={7}
              md={11}
              sm={11}
              xs={11}
              className='different-links'
              onClick={() => router.push('/diageo-retirement-savings-plan/guinness-storehouse-section/scheme-documentation')}
            >
              <span className='underline-text'>{retirementLinks.listLink5}</span>{' '}
              <ArrowRightOutlined />
            </Col>
            <Col
              xl={7}
              lg={7}
              md={11}
              sm={11}
              xs={11}
              className='different-links'
              onClick={() =>
                router.push('/diageo-retirement-savings-plan/diageo-ireland-section/investment-options')
              }
            >
              <span>{retirementLinks.listLinks6}</span> <ArrowRightOutlined />
            </Col>
            <Col
              xl={7}
              lg={7}
              md={11}
              sm={11}
              xs={11}
              className='different-links'
              onClick={() => router.push('/diageo-retirement-savings-plan/r-and-a-bailey-section/investment-options')}
             
            >
             <span> {retirementLinks.listLinks6} </span> <ArrowRightOutlined />
             
            </Col>
 
 
            <Col
              xl={7}
              lg={7}
              md={11}
              sm={11}
              xs={11}
              className='different-links'
              onClick={() => router.push('/diageo-retirement-savings-plan/guinness-storehouse-section/investment-options')}
            >
              <span className='underline-text'>{retirementLinks.listLinks6}</span>{' '}
              <ArrowRightOutlined />
            </Col>
            <Col
              xl={7}
              lg={7}
              md={11}
              sm={11}
              xs={11}
              className='different-links'
              onClick={() =>
                router.push('/diageo-retirement-savings-plan/diageo-ireland-section/annual-reviews')
              }
            >
              <span>{retirementLinks.listLinks7}</span> <ArrowRightOutlined />
            </Col>
            <Col
              xl={7}
              lg={7}
              md={11}
              sm={11}
              xs={11}
              className='different-links'
              onClick={() => router.push('/diageo-retirement-savings-plan/r-and-a-bailey-section/annual-reviews')}
             
            >
             <span> {retirementLinks.listLinks7} </span> <ArrowRightOutlined />
             
            </Col>
 
 
            <Col
              xl={7}
              lg={7}
              md={11}
              sm={11}
              xs={11}
              className='different-links'
              onClick={() => router.push('/diageo-retirement-savings-plan/guinness-storehouse-section/annual-reviews')}
            >
              <span className='underline-text'>{retirementLinks.listLinks7}</span>{' '}
              <ArrowRightOutlined />
            </Col>
          </Row>
        </div>
      </div>
{/*
      <section
        className='query'
        style={{
          background: 'linear-gradient(135deg, #e6f4ff, #e8f5ff 64%, #f6e7ff)',
          padding: '16px',
          paddingBottom: '4rem',
        }}
      >
        <div className='diageo-container'>
          <h1 className='section'>{retirementLinks.heading}</h1>
         
 
           <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8} lg={8}>
              <a href='#' className='nav-link'>
                <div style={{ padding: '10px', width: 280 }}>
                 
               
                   {retirementLinks.listLinks}
                  <ArrowRightOutlined
                    className='arrow'
                    style={{ marginLeft: 120 }}
                  />
                </div>
              </a>
            </Col>
 
            <Col xs={24} sm={12} md={8} lg={8}>
              <a href='#' className='nav-link'>
                <div style={{ padding: '10px', width: 280 }}>
               
               
                {retirementLinks.listLinks8}
             
                  <ArrowRightOutlined
                    className='arrow1'
                    style={{ marginLeft: 135 }}
                  />
                </div>
              </a>
            </Col>
 
            <Col xs={24} sm={12} md={8} lg={8}>
              <a href='#' className='nav-link'>
                <div style={{ padding: '10px', width: 280 }}>
               
               
                  {retirementLinks.listLinks9}
               
                  <ArrowRightOutlined
                    className='arrow2'
                    style={{ marginLeft: 82 }}
                  />
                </div>
              </a>
            </Col>
          </Row>
 
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8} lg={8}>
              <a href='#' className='nav-link'>
                <div style={{ padding: '10px', width: 280 }}>
               
               
                {retirementLinks.listLinks2}
               
                  <ArrowRightOutlined
                    className='arrow3'
                    style={{ marginLeft: 130 }}
                  />
                </div>
              </a>
            </Col>
 
            <Col xs={24} sm={12} md={8} lg={8}>
              <a href='#' className='nav-link'>
                <div style={{ padding: '10px', width: 280 }}>
               
               
                {retirementLinks.listLinks2}
                  <ArrowRightOutlined
                    className='arrow4'
                    style={{ marginLeft: 130 }}
                  />
                </div>
              </a>
            </Col>
 
            <Col xs={24} sm={12} md={8} lg={8}>
              <a href='#' className='nav-link'>
                <div style={{ padding: '10px', width: 280 }}>
               
               
                {retirementLinks.listLinks2}
                  <ArrowRightOutlined
                    className='arrow5'
                    style={{ marginLeft: 130 }}
                  />
                </div>
              </a>
            </Col>
          </Row>
 
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8} lg={8}>
              <a href='#' className='nav-link'>
                <div style={{ padding: '10px', width: 280 }}>
               
               
                {retirementLinks.listLinks3}
                  <ArrowRightOutlined
                    className='arrow6'
                    style={{ marginLeft: 170 }}
                  />
                </div>
              </a>
            </Col>
 
            <Col xs={24} sm={12} md={8} lg={8}>
              <a href='#' className='nav-link'>
                <div style={{ padding: '10px', width: 280 }}>
               
               
                {retirementLinks.listLinks3}
                  <ArrowRightOutlined
                    className='arrow7'
                    style={{ marginLeft: 170 }}
                  />
                </div>
              </a>
            </Col>
 
            <Col xs={24} sm={12} md={8} lg={8}>
              <a href='#' className='nav-link'>
                <div style={{ padding: '10px', width: 280 }}>
               
                {retirementLinks.listLinks3}
                  <ArrowRightOutlined
                    className='arrow8'
                    style={{ marginLeft: 170 }}
                  />
                </div>
              </a>
            </Col>
          </Row>
 
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8} lg={8}>
              <a href='#' className='nav-link'>
                <div style={{ padding: '10px', width: 280 }}>
                 
               
                {retirementLinks.listLinks4}
                  <ArrowRightOutlined
                    className='arrow9'
                    style={{ marginLeft: 220 }}
                  />
                </div>
              </a>
            </Col>
 
            <Col xs={24} sm={12} md={8} lg={8}>
              <a href='#' className='nav-link'>
                <div style={{ padding: '10px', width: 280 }}>
               
               
                {retirementLinks.listLinks4}
                  <ArrowRightOutlined
                    className='arrow10'
                    style={{ marginLeft: 220 }}
                  />
                </div>
              </a>
            </Col>
 
            <Col xs={24} sm={12} md={8} lg={8}>
              <a href='#' className='nav-link'>
                <div style={{ padding: '10px', width: 280 }}>
               
               
                {retirementLinks.listLinks4}
                  <ArrowRightOutlined
                    className='arrow11'
                    style={{ marginLeft: 220 }}
                  />
                </div>
              </a>
            </Col>
          </Row>
 
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8} lg={8}>
              <a href='#' className='nav-link'>
                <div style={{ padding: '10px', width: 280 }}>
                 
                {retirementLinks.listLink5}
               
                  <ArrowRightOutlined
                    className='arrow12'
                    style={{ marginLeft: 115 }}
                  />
                </div>
              </a>
            </Col>
 
            <Col xs={24} sm={12} md={8} lg={8}>
              <a href='#' className='nav-link'>
                <div style={{ padding: '10px', width: 280 }}>
                 
                {retirementLinks.listLink5}
                  <ArrowRightOutlined
                    className='arrow13'
                    style={{ marginLeft: 115 }}
                  />
                </div>
              </a>
            </Col>
 
            <Col xs={24} sm={12} md={8} lg={8}>
              <a href='#' className='nav-link'>
                <div style={{ padding: '10px', width: 280 }}>
                 
               
                {retirementLinks.listLink5}
                  <ArrowRightOutlined
                    className='arrow14'
                    style={{ marginLeft: 115 }}
                  />
                </div>
              </a>
            </Col>
          </Row>
 
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8} lg={8}>
              <a href='#' className='nav-link'>
                <div style={{ padding: '10px', width: 280 }}>
               
                {retirementLinks.listLinks6}
               
                  <ArrowRightOutlined
                    className='arrow15'
                    style={{ marginLeft: 145 }}
                  />
                </div>
              </a>
            </Col>
 
            <Col xs={24} sm={12} md={8} lg={8}>
              <a href='#' className='nav-link'>
                <div style={{ padding: '10px', width: 280 }}>
                {retirementLinks.listLinks6}
                  <ArrowRightOutlined
                    className='arrow16'
                    style={{ marginLeft: 140 }}
                  />
                </div>
              </a>
            </Col>
 
            <Col xs={24} sm={12} md={8} lg={8}>
              <a href='#' className='nav-link'>
                <div style={{ padding: '10px', width: 280 }}>
                {retirementLinks.listLinks6}
                  <ArrowRightOutlined
                    className='arrow17'
                    style={{ marginLeft: 145 }}
                  />
                </div>
              </a>
            </Col>
          </Row>
 
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8} lg={8}>
              <a href='#' className='nav-link'>
                <div style={{ padding: '10px', width: 280 }}>
                {retirementLinks.listLinks7}
                  <ArrowRightOutlined
                    className='arrow18'
                    style={{ marginLeft: 160 }}
                  />
                </div>
              </a>
            </Col>
 
            <Col xs={24} sm={12} md={8} lg={8}>
              <a href='#' className='nav-link'>
                <div style={{ padding: '10px', width: 280 }}>
                {retirementLinks.listLinks7}
                  <ArrowRightOutlined
                    className='arrow19'
                    style={{ marginLeft: 162 }}
                  />
                </div>
              </a>
            </Col>
 
            <Col xs={24} sm={12} md={8} lg={8}>
              <a href='#' className='nav-link'>
                <div style={{ padding: '10px', width: 280 }}>
                {retirementLinks.listLinks10}
                  <ArrowRightOutlined
                    className='arrow20'
                    style={{ marginLeft: 162 }}
                  />
                </div>
              </a>
            </Col>  
          </Row>
        </div>
      </section> */}
 
      <section className='query'>
        <Row align={'center'} justify={'center'}>
          <div className='contact'>
          {documentToReactComponents(retirementContent.richText)}
          {documentToReactComponents(retirementContent.richText1)}
             {/* <p>
              If you have a query regarding your Diageo Retirement Savings Plan
              record, please contact Irish Life on{' '}
            </p>
            <div>
              <a href='#'>Happytohelp@irishlife.ie</a>
            </div> */}
          </div>
        </Row>
      </section>
 
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
   
    const res = await client.getEntries({ content_type: "diageoRetirementSavingsPlan"})
    const links = await client.getEntries({ content_type: "sectionLinks","fields.title":"Diageo Retirement Savings Plan1"})
    const home = await client.getEntries({content_type: "homeBanner","fields.text1":"Diageo Retirement Savings Plan2"})
   
    console.log(res.items[0].fields)
    console.log(links.items[0].fields)
    console.log(home.items)
   
 
   
    // 'fields.title': "tv"
    return {
      props: {
        retirementContent: res.items[0].fields,
        retirementLinks:links.items[0].fields,
        retirementHome:home.items[0].fields,
       
      },
   
      
    }
  }