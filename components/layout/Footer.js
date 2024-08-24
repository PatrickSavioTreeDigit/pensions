import React from 'react'
import DiageoLogo from '../../public/Assets/Images/diageo_logo.svg'
import DrinkioLogo from '../../public/Assets/Images/drinkio_logo.svg'
import { Col, Row } from 'antd'
import Image from 'next/image'
import { useRouter } from 'next/router'

import {
    ArrowRightOutlined,
    FacebookFilled,
    TwitterCircleFilled,
    LinkedinFilled,
    YoutubeFilled,
} from '@ant-design/icons'

import { createClient } from "contentful"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';



export default function App(props) {
    const router = useRouter()


    return (
        (props.content && props.content.description) && (<div>
            <div className='footer-container'>
                <div className='diageo-container'>
                    <Row align={'middle'}>
                        <Col xl={19} lg={19} md={19} sm={12} xs={12}>
                            <Image alt="image" loader={() => 'https:' + props.content.image.fields.file.url} src={'https:' + props.content.image.fields.file.url} width={120} height={54} />

                            {/*  <Image loader={()=>'https:' + props.content.image1.fields.file.url} src={'https:' +props.content.image1.fields.file.url}  width={130} height={100}  />*/}

                        </Col>
                        <Col xl={5} lg={5} md={5} sm={0} xs={0}>
                            <Image alt="image" loader={() => 'https:' + props.content.image1.fields.file.url} src={'https:' + props.content.image1.fields.file.url} width={120} height={54} />
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={5} lg={5} md={8} sm={24} xs={24}>

                            <p className='left-col-para'>
                                {/* {footerContent && footerContent.description}*/}
                                {props.content && props.content.description}
                            </p>

                            <div className='visit-scheme'>
                                <span className='visit-cta' onClick={() => router.push('/contact')}> {props.content.text}</span>&nbsp;
                                <ArrowRightOutlined />
                            </div>

                            <div className='follow-us'>
                                <Col xl={24} lg={24} md={24} sm={0} xs={0}>
                                    <p>{props.content.text15}</p>

                                    <div className='social-media-links'>

                                        <a target='_blank' href='https://www.facebook.com/DiageoGraduates'>
                                            <FacebookFilled className='social-media-icon'

                                            />
                                        </a>


                                        <a target='_blank' href='https://twitter.com/Diageo_News'>
                                            <TwitterCircleFilled className='social-media-icon'
                                            />
                                        </a>


                                        <a target='_blank' href='https://www.linkedin.com/company/diageo'>
                                            <LinkedinFilled className='social-media-icon' />
                                        </a>


                                        <a target='_blank' href='https://www.youtube.com/user/Diageo'>
                                            <YoutubeFilled className='social-media-icon'

                                            />
                                        </a>
                                    </div>
                                </Col>
                            </div>
                        </Col>
                        <Col xl={14} lg={14} md={11} sm={24} xs={24}>
                            <Row justify={'space-between'} className='other-services'>
                                <Col
                                    xl={7}
                                    lg={7}
                                    md={12}
                                    sm={12}
                                    xs={12}
                                    className='other-services-col'
                                >
                                    <h4>{props.content.text1}</h4>
                                    <a target='_blank' href='https://www.guinness-nigeria.com/en/'>
                                        <span >{props.content.text2} </span>
                                    </a> <br /> <br />
                                    <a target='_blank' href='https://www.diageoindia.com/en/'>
                                        <span>{props.content.text3} </span>
                                    </a> <br /><br />
                                    <a target='_blank' href='https://www.diageo.co.za/en/'>
                                        <span> {props.content.text4} </span>
                                    </a>
                                </Col>
                                <Col
                                    xl={7}
                                    lg={7}
                                    md={12}
                                    sm={12}
                                    xs={12}
                                    className='other-services-col'
                                >
                                    <h4>{props.content.text5}</h4>
                                    <a target='_blank' href='https://www.drinkiq.com/quiz/'>
                                        <span>{props.content.text6}</span>
                                    </a> <br /><br />
                                    <a target='_blank' href=' https://www.drinkiq.com/'>
                                        <span>{props.content.text7}</span>
                                    </a><br /><br />
                                    <a target='_blank' href='https://www.diageo.com/en/esg/sustainability/diageo-sustainable-solutions'>
                                        <span>{props.content.text8}</span>
                                    </a>
                                </Col>


                                <Col
                                    xl={7}
                                    lg={7}
                                    md={12}
                                    sm={12}
                                    xs={12}
                                    className='other-services-col'

                                >
                                    <h4>{props.content.text13}</h4>
                                    <a target='_blank' href='https://www.mydiageoshares.com/en'>
                                        <span>{props.content.text14}</span>
                                    </a>
                                </Col>
                                <Col
                                    xl={7}
                                    lg={7}
                                    md={12}
                                    sm={12}
                                    xs={12}
                                    className='other-services-col'
                                >
                                    <h4>{props.content.text9}</h4>
                                    <a target='_blank' href='https://www.thebar.com/en-gb'>
                                        <span >{props.content.text10}</span>
                                    </a><br /><br />

                                    <a target='_blank' href='https://www.diageosuppliers.com/s/?language=en_US'>
                                        <span>{props.content.text11}</span>
                                    </a><br />

                                    <a target='_blank' href='https://www.diageo-one.com/s/?language=en_IE'><br />
                                        <span>{props.content.text12}</span>
                                    </a>
                                </Col>













                            </Row>
                        </Col>
                        <Col xl={5} lg={5} md={8} sm={24} xs={24}>
                            <Col xl={0} lg={0} md={0} sm={24} xs={24}>
                                <Image alt="image" src={DrinkioLogo} width={120} height={54} />
                            </Col>
                            <p className='right-col-para'>
                                {/*  {footerContent && footerContent.description2}*/}
                                {/* description2={footerContent.fields.description2}*/}
                                {props.content.description2}

                                {/*
                            Our DRINKiQ programme aims to raise the 'collective drink IQ' by
                            increasing public awareness of the effects of alcohol and
                            supporting responsible drinking. */}
                            </p>
                            <div className='visit-scheme'>
                                <span className='visit-cta'  > {documentToReactComponents(props.content.richtext)}<ArrowRightOutlined style={{ marginLeft: '10rem' }} /></span>&nbsp;

                            </div>
                            <Col xl={0} lg={0} md={0} sm={24} xs={24} className='follow-us'>
                                <p>{props.content.text15}</p>

                                <div className='social-media-links'>
                                    <FacebookFilled className='social-media-icon' />
                                    <TwitterCircleFilled className='social-media-icon' />
                                    <LinkedinFilled className='social-media-icon' />
                                    <YoutubeFilled className='social-media-icon' />
                                </div>
                            </Col>
                        </Col>
                    </Row>
                    <div className='terms'>

                        <Row justify={'space-between'}>
                            <Col xl={3} lg={3} md={3} sm={24} xs={24}>
                                <span>Terms & Conditions</span>
                            </Col>
                            <Col xl={4} lg={4} md={4} sm={24} xs={24}>
                                <span>Diageo Privacy Centre</span>
                            </Col>
                            <Col xl={2} lg={2} md={2} sm={24} xs={24}>
                                <span>UGC Policy</span>
                            </Col>
                            <Col xl={2} lg={2} md={2} sm={24} xs={24}>
                                <span>Accessibility</span>
                            </Col>
                            <Col xl={3} lg={3} md={3} sm={24} xs={24}>
                                <span>Privacy Settings</span>
                            </Col>
                            <Col xl={4} lg={4} md={4} sm={24} xs={24} >
                                <span>Privacy and Cookie Notice</span>
                            </Col>
                            <Col xl={3} lg={3} md={3} sm={24} xs={24}>
                                <span>Drink responsibly</span>
                            </Col>
                        </Row>



                        <Col xl={20} lg={20} md={20} sm={24} xs={24}>
                            <Row style={{ marginTop: "1rem" }}>

                                <Col xl={2} lg={2} md={2} sm={24} xs={24}>
                                    <span>DrinkIQ</span>
                                </Col>
                                <Col xl={3} lg={3} md={3} sm={24} xs={24}>
                                    <span>theBar.com</span>
                                </Col>
                                <Col xl={3} lg={3} md={3} sm={24} xs={24}>
                                    <span>Disclaimer</span>
                                </Col>
                                <Col xl={3} lg={3} md={3} sm={24} xs={24}>
                                    <span>Diageo.com
                                    </span>
                                </Col>
                                <Col xl={3} lg={3} md={3} sm={24} xs={24}>
                                    <span>© Diageo Plc</span>
                                </Col>
                            </Row>
                        </Col>

                        <p>Please do not share with anyone under the legal purchase age for alcohol. Drink Responsibly.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        )
    )
}