import { Col, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { createClient } from "contentful"
import Brand from "../components/Brands/Brand.js"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
export default function Contact1({contactContent,preFooterContent,prefooterDescriptionContent,headerContent}) {
// const contact1 = ({ contactContent }) => {
    const [show,setshow] = useState(false)
    useEffect(()=>{
      setTimeout(()=>{
        setshow(true)
      },0)
      
    },[])
    return (
        <>
    {show && <Header content={headerContent} />}
    {show && <div className='contact1-container'>
            <div className='pink-shade-background'>
                <div className='diageo-container'>
                    <p>{contactContent.text}</p>
                    <Row justify={'center'}>
                        <Col xl={10} lg={11} md={11} sm={23} xs={23}><h2>{contactContent.text}</h2></Col>
                    </Row>
                </div>
            </div>
            <div className='contact-body'>
                <div className='diageo-container'>
                    <Row justify={'center'}>
                        <Col xl={14} lg={15} md={16} sm={24} xs={24}>
                            <h2>{contactContent.header} </h2>
                            {
                                contactContent.description.split('\n').map((line, index) => (
                                    <p key={index}>{line}</p>
                                ))}

                            <div className='compare-section'>
                                <Row>
                                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                        <h3>{contactContent.header1}</h3>
                                        <div className='details'>
                                            {documentToReactComponents(contactContent.richText1)}
                                        </div>
                                    </Col>
                                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                        <h3>{contactContent.header2}</h3>
                                        <div className='details'>
                                            {documentToReactComponents(contactContent.richText2)}
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className='address'>
                                {contactContent.address.split('\n').map((line, index) => (
                                    <p key={index}>{line}</p>
                                ))}
                                <p className='last-para'>{contactContent.content}</p>
                            </div>
                            <h2>{contactContent.text1}</h2>
                            <h2>{contactContent.text2}</h2>
                            {contactContent.longText.split('\n').map((line, index) => (
                                <p key={index}>{line}</p>
                            ))}
                            <div className='compare-section'>
                                <Row>
                                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                        <h3>{contactContent.header1}</h3>
                                        <div className='details'>
                                            {documentToReactComponents(contactContent.richText)}
                                        </div>
                                    </Col>
                                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                        <h3>{contactContent.header2}</h3>
                                        <div className='details'>
                                            {documentToReactComponents(contactContent.richTextTable)}
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <p>{contactContent.content}</p>
                            <div className='plans-container'>
                                <h2>{contactContent.text3}</h2>
                                <div className='special-case'><span>{contactContent.text6}</span>
                                    <span>{documentToReactComponents(contactContent.dppText)}</span></div>
                                {documentToReactComponents(contactContent.richText5)}
                                {documentToReactComponents(contactContent.irish)}
                                <p>{contactContent.communication}</p>
                            </div>
                            <h2>{contactContent.text4}</h2>
                            <div className='special-case'><span>{contactContent.text9}</span> <span>{documentToReactComponents(contactContent.drspText)}</span></div>

                            {documentToReactComponents(contactContent.irish)}
                            <p>{contactContent.communication}</p>
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

    const res = await client.getEntries({ content_type: "contact" })
    // console.log(res.items[0].fields)

    // 'fields.title': "tv"
    return {
        props: {
            contactContent: res.items[0].fields,
        },
        
    }
}