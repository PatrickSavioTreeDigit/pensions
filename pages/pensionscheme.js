import React, { useState,useEffect } from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd'
import Image from 'next/image'
import { Col, Divider, Row } from 'antd'
import img1 from '../public/Assets/Images/img1.webp'
import img2 from '../public/Assets/Images/img2.webp'
import img3 from '../public/Assets/Images/img3.webp'
import img4 from '../public/Assets/Images/img4.webp'
import Brand from '@/components/Brands/Brand'
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useRouter } from 'next/router'
import {createClient} from "contentful";
import {ImportOutlined , ArrowRightOutlined  } from '@ant-design/icons'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Link from 'next/link'
 
export default function App({pensionContent,preFooterContent,prefooterDescriptionContent,headerContent}) {
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
    {show && <div className='pensionscheme-container'>
      <div className='box1'>
        <div className='diageo-container'>
          <p className='p1'>{pensionContent.text}</p>
          <h1 className='h1'>{pensionContent.text}</h1>
        </div>
      </div>
     
 
      <div className='diageo-container'>
      <p className='p2'>
      {documentToReactComponents(pensionContent.bullets)}
</p>
 <br/>
 
       {/*
        <p className='p2'>
          Please see links below for the following pension scheme which are
          administered by a third party <br></br>
          administrator
        </p>
 
        <ul className='u1'>
          <li className='l1'>Diageo Pension Scheme (DPS)</li>
          <li className='l2'>Diageo Lifestyle Plan (DLP)</li>
          <li className='l3'>Guinness Ireland Group Pension Scheme (GIGPS)</li>
          <li className='l4'>Grand Metropolitan Irish Pension Fund (GMIPF)</li>
        </ul>*/}
      </div>
 
      <div className='diageo-pension-plan-container1'>
        <div className='diageo-container'>
          <Row justify='center' align='top'>
            <Col span={6} className='column1'>
            {/* {documentToReactComponents(pensionContent.richText1)} */}
            {/* {pensionContent.image1} */}
            {/* <div> image={'https:' +pensionContent.image1.fields.file.url}</div> */}
            <Image alt="Image" loader={()=>'https:' + pensionContent.image1.fields.file.url} src={'https:' + pensionContent.image1.fields.file.url} height={150} width={280} className='cs0' />
            <h3 className='h2'>{pensionContent.text1}</h3>
            <p className='p3'>{pensionContent.description1}</p>
            <div className='download-document1'>
            <span className='download-document-span1'>
            <Link aria-label="Read more about scheme of diageo pensions"  target='_blank' href='https://www.hartlinkonline.co.uk/diageo/hofl.chi/wui/schsetui.html?hopsess=14b4ev1j9q78g4x9x7yvy83j2fo2bph9&schid=1&srcpg=wui/schinfui.html'>
                {documentToReactComponents(pensionContent.link1)}
                </Link>
                </span>
                <ImportOutlined className='download-document-icon1' />
               
                </div>
           
                {/* <Image src={'https:' + pensionContent.image1.fields.file.url} height={150} width={280} className='cs0' /> */}
             {/* <ExportOutlined className='export1'/> */}
 
              {/* {pensionContent.richText1} */}
              {/* <Image src={img1} height={150} width={280} className='cs0' />
              <h3 className='h2'>Diageo Pension Scheme</h3>
              <p className='p3'>
                This is Diageo's UK final salary <br></br>
                pension scheme which closed to <br></br>
                new members on 22 September <br></br>
                2005.
              </p>
              <p className='p4'>Visit scheme</p> */}
            </Col>
            <Col span={6} className='column2'>
            <Image alt="Image"loader={()=>'https:' + pensionContent.image2.fields.file.url} src={'https:' + pensionContent.image1.fields.file.url} height={150} width={280} className='cs1' />
            <h3 className='h2'>{pensionContent.text2}</h3>
            <p className='p3'>{pensionContent.description2}</p>
            <div className='download-document1'>
            <span className='download-document-span1'>
            <Link aria-label="Read more about scheme of diageo pensions" target='_blank' href='https://www.hartlinkonline.co.uk/diageo/hofl.chi/wui/schsetui.html?hopsess=3zvc8b4vi0r5jctgs4osqz382e523swc&schid=2&srcpg=wui/schinfui.html'>
                {documentToReactComponents(pensionContent.link1)}
            </Link>
                </span>
                <ImportOutlined className='download-document-icon1' />
               
                </div>
            {/* <div className='iconimport'>
            <span className='visitlink'>
            {documentToReactComponents(pensionContent.link1)}
                      </span>
            <p className='p4'>{documentToReactComponents(pensionContent.link1)}</p>
            <span className='import'><ImportOutlined /></span>
            </div> */}
           
            {/* {documentToReactComponents(pensionContent.richText2)} */}
             
           
 
              {/* <Image src={img2} height={150} width={280} className='cs1' />
              <h3 className='h3'>Diageo Lifestyle Plan</h3>
              <p className='p5'>
                This is Diageo's UK defined <br></br>
                benefit pension scheme which <br></br>
                launched on 6 April 2006.
              </p>
              <p className='p6'>Visit scheme</p> */}
            </Col>
            <Col span={6} className='column3'>
            <Image alt="Image" loader={()=>'https:' + pensionContent.image3.fields.file.url} src={'https:' + pensionContent.image3.fields.file.url} height={150} width={280} className='cs1' />
            <h3 className='h2'>{pensionContent.text3}</h3>
            <p className='p3'>{pensionContent.description3}</p>
            <div className='download-document1'>
            <span className='download-document-span1'>
            <p onClick={() => router.push('/contact')}>
                {documentToReactComponents(pensionContent.link1)}
                </p>
                </span>
                <ArrowRightOutlined  className='download-document-icon1' />
               
                </div>
         {/* <ExportOutlined className='export1'/> */}
              {/* <Image src={img3} height={150} width={280} className='cs2' />
              <h3 className='h4'>
                Guinness Ireland Group <br></br>
                Pension Scheme
              </h3>
              <p className='p7'>
                This is the final salary scheme for <br></br>
                Diageo Ireland employees.
              </p>
              <p className='p8'>Visit scheme</p> */}
            </Col>
            <Col span={6} className='column4'>
            <Image alt="Image" loader={()=>'https:' + pensionContent.image4.fields.file.url} src={'https:' + pensionContent.image4.fields.file.url} height={150} width={280} className='cs1' />
            <h3 className='h2'>{pensionContent.text4}</h3>
            <p className='p3'>{pensionContent.description4}</p>
            <div className='download-document1'>
            <span className='download-document-span1'>
            <p onClick={() => router.push('/contact')}>
                {documentToReactComponents(pensionContent.link1)}
            </p>
                
                </span>
                <ArrowRightOutlined  className='download-document-icon1' />
              
                </div>
                
           
            {/* <ExportOutlined className='export1'/> */}
              {/* <Image src={img4} height={150} width={280} className='cs3' />
              <h3 className='h5'>
                Grand Metropolitan Irish <br></br>
                Pension Fund
              </h3>
              <p className='p9'>
                This is the final salary scheme for <br></br>
                Baileys employees.
              </p>
              <p className='p10'>Visit scheme</p> */}
             
            </Col>
          </Row>
        </div>
      </div>
     
    </div>}
    {show && <Brand content={preFooterContent} />}
    {show && <Footer content={prefooterDescriptionContent}  />}
    </>
  );
}
 
export async function getStaticProps() {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })
   
    const res = await client.getEntries({ content_type: "dbPensionScheme"})
       
       
    
 
   
    // 'fields.title': "tv"
    return {
      props: {
        pensionContent: res.items[0].fields,
      },
      
    }
  }