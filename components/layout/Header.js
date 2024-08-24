import { Col, Row, Drawer } from 'antd'
import Image from 'next/image'
import React, { useState } from 'react'
import DiageoLogo from '../../public/Assets/Images/diageo_logo.svg'
import {
  SearchOutlined,
  AlignLeftOutlined,
  CloseOutlined,
  RightOutlined,
  ArrowLeftOutlined
} from '@ant-design/icons'
import { useRouter } from 'next/router'

export default function App(props, headerContent) {

  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [desktopOpen, setDesktopOpen] = useState(false)
  const [headerOption, setHeaderOption] = useState('')
  const [diageoPensionPlanLinks, setDiageoPensionPlanLinks] = useState('')
  const [mobileHeaderOption, setMobileHeaderOption] = useState('main-headings')

  const showDrawer = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
  }
  const showDesktopDrawer = (value) => {
    setDesktopOpen(true)
    setHeaderOption(value)
  }
  const onDesktopClose = () => {
    setDesktopOpen(false)
    setHeaderOption('')
    setDiageoPensionPlanLinks('')
  }

  return (
    <>
      <div className='diageo-container'>
        <div className='header-container'>
          <div className='desktop-header'>
            <Row align={'middle'}>
              <Col xxl={5} xl={4} lg={3} className='z-index-header'>
                <Image alt="image" loader={() => 'https:' + props.content.image3.fields.file.url}
                  src={'https:' + props.content.image3.fields.file.url}
                  width={120} height={54}
                  className='cp'
                  onClick={() => router.push('/')} />
              </Col>
              <Col xxl={14} xl={16} lg={18} className='desktop-header-links'>
                <ul>
                  <li>
                    <p onClick={() => showDesktopDrawer('Diageo Pension Plan')}>
                      {props.content.listLinks2}
                    </p>
                  </li>
                  <li>
                    <p
                      onClick={() =>
                        showDesktopDrawer('Diageo Retirement Savings Plan')
                      }
                    >
                      {props.content.listLinks3}
                    </p>
                  </li>
                  <li>
                    <p onClick={() => showDesktopDrawer('DB Pension Scheme')}>
                      {props.content.listLinks4}
                    </p>
                  </li>
                  <li>
                    <p onClick={() => showDesktopDrawer('Contact')}> {props.content.listLink5}</p>
                  </li>
                </ul>
              </Col>
              <Col
                xxl={5}
                xl={4}
                lg={3}
                align={'end'}
                className='z-index-header'
              >
                <span className='search'>
                  <SearchOutlined /> {props.content.listLinks6}
                </span>
              </Col>
            </Row>
          </div>
          <div className='mobile-header'>
            <Row align={'middle'} justify={'space-between'}>
              <Col span={4}>
                <AlignLeftOutlined
                  style={{
                    fontSize: '32px',
                  }}
                  onClick={showDrawer}
                />
              </Col>
              <Col span={10} align={'center'}>
                <Image alt="image" loader={() => 'https:' + props.content.image3.fields.file.url}
                  src={'https:' + props.content.image3.fields.file.url} width={120} height={54} 
                  onClick={() => router.push('/')}
                  />

              </Col>
              <Col span={3} align={'end'}>
                {' '}
                <SearchOutlined
                  style={{
                    fontSize: '32px',
                  }}
                />
              </Col>
            </Row>
            <Drawer
              placement='top'
              closable={false}
              onClose={onDesktopClose}
              open={desktopOpen}
              width='100%'
              height='70vh'
              className='desktop-header-drawer'
            >
              <div className='diageo-container'>
                <div className='desktop-header-content'>
                  <Row>
                    <Col xxl={5} xl={4} lg={3}></Col>
                    <Col xxl={14} xl={16} lg={18}>
                      <Row justify={'space-between'}>
                        <Col span={18}>
                          {headerOption === 'Diageo Pension Plan' && (
                            <Row>
                              <Col span={10} className='extra-links'>
                                <p>{props.content.listLink30}</p>
                                <h4
                                  onClick={() => {
                                    setDiageoPensionPlanLinks(
                                      'Diageo Pension Plan overview'
                                    )
                                    router.push('/diageo-pension-plan')
                                    setDesktopOpen(false)
                                  }}
                                >
                                  {props.content.listLinks7}
                                </h4>
                                <h4
                                  onClick={() =>
                                    setDiageoPensionPlanLinks(
                                      'Plan information'
                                    )
                                  }
                                >
                                  {props.content.listLink12} <RightOutlined />
                                </h4>
                                <h4
                                  onClick={() =>
                                    setDiageoPensionPlanLinks(
                                      'Other Savings Options'
                                    )
                                  }
                                >
                                  {props.content.heading} <RightOutlined />
                                </h4>
                              </Col>

                              <Col span={1}></Col>

                              {diageoPensionPlanLinks ===
                                'Plan information' && (
                                  <Col span={10} className='extra-links'>
                                    <p>{props.content.listLink31}</p>
                                    <h4
                                      onClick={() => {
                                        router.push(
                                          '/diageo-pension-plan/plan-information'
                                        )
                                        setDesktopOpen(false)
                                      }}
                                    >
                                      {props.content.listLinks9}
                                    </h4>
                                    <h4
                                      onClick={() => {
                                        router.push(
                                          '/diageo-pension-plan/how-the-plan-works'
                                        )
                                        setDesktopOpen(false)
                                      }}
                                    >
                                      {props.content.listLink13}
                                    </h4>
                                    <h4
                                      onClick={() => {
                                        router.push(
                                          '/diageo-pension-plan/how-do-i-join'
                                        )
                                        setDesktopOpen(false)
                                      }}
                                    >
                                      {props.content.listLink14}
                                    </h4>
                                    <h4
                                      onClick={() => {
                                        router.push('/diageo-pension-plan/forms')
                                        setDesktopOpen(false)
                                      }}
                                    >
                                      {props.content.listLinks}
                                    </h4>
                                  </Col>
                                )}

                              {diageoPensionPlanLinks ===
                                'Other Savings Options' && (
                                  <Col span={11} className='extra-links'>
                                    <p>{props.content.listLink32}</p>
                                    <h4
                                      onClick={() => {
                                        router.push(
                                          '/diageo-pension-plan/other-savings-options'
                                        )
                                        setDesktopOpen(false)
                                      }}
                                    >
                                      {props.content.listLinks8}
                                    </h4>
                                    <h4
                                      onClick={() => {
                                        router.push(
                                          '/diageo-pension-plan/diageo-individual-savings-account-isa'
                                        )
                                        setDesktopOpen(false)
                                      }}
                                    >
                                      {props.content.listLink16}
                                    </h4>
                                  </Col>
                                )}
                            </Row>
                          )}

                          {headerOption ===
                            'Diageo Retirement Savings Plan' && (
                              <Row>
                                <Col span={10} className='extra-links'>
                                  <p>{props.content.listLink33}</p>
                                  <h4
                                    onClick={() => {
                                      router.push(
                                        '/diageo-retirement-savings-plan'
                                      )
                                      setDesktopOpen(false)
                                    }}
                                  >
                                    {props.content.listLinks10}
                                  </h4>
                                  <h4
                                    onClick={() =>
                                      setDiageoPensionPlanLinks(
                                        'Diageo Ireland Section'
                                      )
                                    }
                                  >
                                    {props.content.listLink17} <RightOutlined />
                                  </h4>
                                  <h4
                                    onClick={() =>
                                      setDiageoPensionPlanLinks(
                                        'R & A Bailey Section'
                                      )
                                    }
                                  >
                                    {props.content.listLink22} <RightOutlined />
                                  </h4>

                                  <h4
                                    onClick={() =>
                                      setDiageoPensionPlanLinks(
                                        'Guinness Storehouse Sections'
                                      )
                                    }
                                  >
                                    {props.content.listLink25} <RightOutlined />
                                  </h4>
                                </Col>

                                <Col span={1}></Col>

                                {diageoPensionPlanLinks ===
                                  'Diageo Ireland Section' && (
                                    <Col span={11} className='extra-links'>
                                      <p>{props.content.listLink34}</p>
                                      <h4
                                        onClick={() => {
                                          router.push(
                                            '/diageo-retirement-savings-plan/diageo-ireland-section'
                                          )
                                          setDesktopOpen(false)
                                        }}
                                      >
                                        {props.content.listLinks11}
                                      </h4>
                                      <h4
                                        onClick={() => {
                                          router.push(
                                            '/diageo-retirement-savings-plan/diageo-ireland-section/member-information'
                                          )
                                          setDesktopOpen(false)
                                        }}
                                      >
                                        {props.content.listLink18}
                                      </h4>
                                      <h4
                                        onClick={() => {
                                          router.push(
                                            '/diageo-retirement-savings-plan/diageo-ireland-section/how-do-i-join'
                                          )
                                          setDesktopOpen(false)
                                        }}
                                      >
                                        {props.content.listLink14}
                                      </h4>
                                      <h4
                                        onClick={() => {
                                          router.push(
                                            '/diageo-retirement-savings-plan/diageo-ireland-section/forms'
                                          )
                                          setDesktopOpen(false)
                                        }}
                                      >
                                        {props.content.listLinks}
                                      </h4>
                                      <h4
                                        onClick={() => {
                                          router.push(
                                            '/diageo-retirement-savings-plan/diageo-ireland-section/scheme-documentation'
                                          )
                                          setDesktopOpen(false)
                                        }}
                                      >
                                        {props.content.listLink19}
                                      </h4>
                                      <h4
                                        onClick={() => {
                                          router.push(
                                            '/diageo-retirement-savings-plan/diageo-ireland-section/investment-options'
                                          )
                                          setDesktopOpen(false)
                                        }}
                                      >
                                        {props.content.listLink20}
                                      </h4>
                                      <h4
                                        onClick={() => {
                                          router.push(
                                            '/diageo-retirement-savings-plan/diageo-ireland-section/annual-reviews'
                                          )
                                          setDesktopOpen(false)
                                        }}
                                      >
                                        {props.content.listLink21}
                                      </h4>
                                    </Col>
                                  )}

                                {diageoPensionPlanLinks ===
                                  'R & A Bailey Section' && (
                                    <Col span={11} className='extra-links'>
                                      <p>{props.content.listLink35}</p>
                                      <h4
                                        onClick={() => {
                                          router.push(
                                            '/diageo-retirement-savings-plan/r-and-a-bailey-section'
                                          )
                                          setDesktopOpen(false)
                                        }}
                                      >
                                        {props.content.listLink23}
                                      </h4>
                                      <h4
                                        onClick={() => {
                                          router.push(
                                            '/diageo-retirement-savings-plan/r-and-a-bailey-section/member-information'
                                          )
                                          setDesktopOpen(false)
                                        }}
                                      >
                                        {props.content.listLink18}
                                      </h4>
                                      <h4
                                        onClick={() => {
                                          router.push(
                                            '/diageo-retirement-savings-plan/r-and-a-bailey-section/how-do-i-join'
                                          )
                                          setDesktopOpen(false)
                                        }}
                                      >
                                        {props.content.listLink14}
                                      </h4>
                                      <h4
                                        onClick={() => {
                                          router.push(
                                            '/diageo-retirement-savings-plan/r-and-a-bailey-section/forms'
                                          )
                                          setDesktopOpen(false)
                                        }}
                                      >
                                        {props.content.listLinks}
                                      </h4>
                                      <h4
                                        onClick={() => {
                                          router.push(
                                            '/diageo-retirement-savings-plan/r-and-a-bailey-section/scheme-documentation'
                                          )
                                          setDesktopOpen(false)
                                        }}
                                      >
                                        {props.content.listLink19}
                                      </h4>
                                      <h4
                                        onClick={() => {
                                          router.push(
                                            '/diageo-retirement-savings-plan/r-and-a-bailey-section/investment-options'
                                          )
                                          setDesktopOpen(false)
                                        }}
                                      >
                                        {props.content.listLink20}
                                      </h4>
                                      <h4
                                        onClick={() => {
                                          router.push(
                                            '/diageo-retirement-savings-plan/r-and-a-bailey-section/annual-reviews'
                                          )
                                          setDesktopOpen(false)
                                        }}
                                      >
                                        {props.content.listLink21}
                                      </h4>
                                    </Col>
                                  )}

                                {diageoPensionPlanLinks ===
                                  'Guinness Storehouse Sections' && (
                                    <Col span={11} className='extra-links'>
                                      <p>{props.content.listLink36}</p>
                                      <h4
                                        onClick={() => {
                                          router.push(
                                            '/diageo-retirement-savings-plan/guinness-storehouse-section'
                                          )
                                          setDesktopOpen(false)
                                        }}
                                      >
                                        {props.content.listLink26}
                                      </h4>
                                      <h4
                                        onClick={() => {
                                          router.push(
                                            '/diageo-retirement-savings-plan/guinness-storehouse-section/member-information'
                                          )
                                          setDesktopOpen(false)
                                        }}
                                      >
                                        {props.content.listLink18}
                                      </h4>
                                      <h4
                                        onClick={() => {
                                          router.push(
                                            '/diageo-retirement-savings-plan/guinness-storehouse-section/how-do-i-join'
                                          )
                                          setDesktopOpen(false)
                                        }}
                                      >
                                        {props.content.listLink14}
                                      </h4>
                                      <h4
                                        onClick={() => {
                                          router.push(
                                            '/diageo-retirement-savings-plan/guinness-storehouse-section/forms'
                                          )
                                          setDesktopOpen(false)
                                        }}
                                      >
                                        {props.content.listLinks}
                                      </h4>
                                      <h4
                                        onClick={() => {
                                          router.push(
                                            '/diageo-retirement-savings-plan/guinness-storehouse-section/scheme-documentation'
                                          )
                                          setDesktopOpen(false)
                                        }}
                                      >
                                        {props.content.listLink19}
                                      </h4>
                                      <h4
                                        onClick={() => {
                                          router.push(
                                            '/diageo-retirement-savings-plan/guinness-storehouse-section/investment-options'
                                          )
                                          setDesktopOpen(false)
                                        }}
                                      >
                                        {props.content.listLink20}
                                      </h4>
                                      <h4
                                        onClick={() => {
                                          router.push(
                                            '/diageo-retirement-savings-plan/guinness-storehouse-section/annual-reviews'
                                          )
                                          setDesktopOpen(false)
                                        }}
                                      >
                                        {props.content.listLink21}
                                      </h4>
                                    </Col>
                                  )}
                              </Row>
                            )}

                          {headerOption === 'DB Pension Scheme' && (
                            <Row>
                              <Col span={10} className='extra-links'>
                                <p>{props.content.listLink37}</p>
                                <h4
                                  onClick={() => {
                                    router.push('/pensionscheme')
                                    setDesktopOpen(false)
                                  }}
                                >
                                  {props.content.listLink27}
                                </h4>
                              </Col>
                            </Row>
                          )}

                          {headerOption === 'Contact' && (
                            <Row>
                              <Col span={10} className='extra-links'>
                                <p>{props.content.listLink38}</p>
                                <h4
                                  onClick={() => {
                                    router.push('/contact')
                                    setDesktopOpen(false)
                                  }}
                                >
                                  {props.content.listLink28}
                                </h4>
                              </Col>
                            </Row>
                          )}
                        </Col>
                        <Col span={2} align={'end'}>
                          <CloseOutlined
                            className='close-icon'
                            onClick={onDesktopClose}
                          />
                        </Col>
                      </Row>
                    </Col>
                    <Col xxl={5} xl={4} lg={3}></Col>
                  </Row>
                </div>
              </div>
            </Drawer>
            <Drawer
              placement='left'
              closable={false}
              onClose={onClose}
              open={open}
              width='80%'
              className='header-drawer'
            >
              <div>
                <CloseOutlined
                  onClick={onClose}
                  style={{
                    fontSize: '32px',
                    color: 'grey',
                  }}
                />
              </div>


              {mobileHeaderOption === "main-headings" && <div className='drawer-container'>
                <div className='links-row'>
                  <p onClick={() => setMobileHeaderOption('Diageo Pension Plan Mobile')}>{props.content.listLinks2}</p>
                  <span>
                    <RightOutlined />
                  </span>
                </div>
                <div className='links-row'>
                  <p onClick={() => setMobileHeaderOption('Diageo Retirement Savings Plan Mobile')}>{props.content.listLinks3}</p>
                  <span>
                    <RightOutlined />
                  </span>
                </div>
                <div className='links-row'>
                  <p onClick={() => {
                    router.push('/pensionscheme')
                    onClose()
                  }}>{props.content.listLinks4}</p>
                </div>
                <div className='links-row'>
                  <p
                    onClick={() => {
                      router.push('/contact')
                      onClose()
                    }}
                  >{props.content.listLink5}</p>
                </div>
              </div>}
              {mobileHeaderOption === "Diageo Pension Plan Mobile" && <div className='mobile-header-links'>
                <div onClick={() => setMobileHeaderOption("main-headings")} className='back-button'><ArrowLeftOutlined /> {props.content.header}</div>

                <p>{props.content.listLink30}</p>
                <h4
                  onClick={() => {
                    router.push('/diageo-pension-plan')
                    onClose()
                  }}
                >
                  {props.content.listLinks7}
                </h4>
                <h4
                  onClick={() =>
                    setMobileHeaderOption("Plan information Mobile")
                  }
                >
                  {props.content.listLink12}<RightOutlined />
                </h4>
                <h4
                  onClick={() =>
                    setMobileHeaderOption("Other Savings Options Mobile")
                  }
                >
                  {props.content.listLink15} <RightOutlined />
                </h4>

              </div>
              }

              {mobileHeaderOption === "Plan information Mobile" && <div className='mobile-header-links'>
                <div onClick={() => setMobileHeaderOption("Diageo Pension Plan Mobile")} className='back-button'><ArrowLeftOutlined /> {props.content.header2}</div>
                <p onClick={() => setMobileHeaderOption("Diageo Pension Plan Mobile")}>{props.content.listLink31}</p>
                <h4
                  onClick={() => {
                    router.push(
                      '/diageo-pension-plan/plan-information'
                    )
                    onClose()
                  }}
                >
                  {props.content.listLinks9}
                </h4>
                <h4
                  onClick={() => {
                    router.push(
                      '/diageo-pension-plan/how-the-plan-works'
                    )
                    onClose()
                  }}
                >
                  {props.content.listLink13}
                </h4>
                <h4
                  onClick={() => {
                    router.push(
                      '/diageo-pension-plan/how-do-i-join'
                    )
                    onClose()
                  }}
                >
                  {props.content.listLink14}
                </h4>
                <h4
                  onClick={() => {
                    router.push('/diageo-pension-plan/forms')
                    onClose()
                  }}
                >
                  {props.content.listLinks}
                </h4>


              </div>}

              {mobileHeaderOption === "Other Savings Options Mobile" && <div className='mobile-header-links'>
                <div onClick={() => setMobileHeaderOption("Diageo Pension Plan Mobile")} className='back-button'><ArrowLeftOutlined /> {props.content.header2}</div>
                <p onClick={() => setMobileHeaderOption("Diageo Pension Plan Mobile")}>{props.content.listLink32}</p>
                <h4
                  onClick={() => {
                    router.push(
                      '/diageo-pension-plan/other-savings-options'
                    )
                    onClose()
                  }}
                >
                  {props.content.listLinks8}
                </h4>
                <h4
                  onClick={() => {
                    router.push(
                      '/diageo-pension-plan/diageo-individual-savings-account-isa'
                    )
                    onClose()
                  }}
                >
                  {props.content.listLink16}
                </h4>
              </div>}

              {mobileHeaderOption === "Diageo Retirement Savings Plan Mobile" && <div className='mobile-header-links'>
                <div onClick={() => setMobileHeaderOption("main-headings")} className='back-button'><ArrowLeftOutlined /> {props.content.header}</div>
                <p>{props.content.listLink33}</p>
                <h4
                  onClick={() => {
                    router.push(
                      '/diageo-retirement-savings-plan'
                    )
                    onClose()
                  }}
                >
                  {props.content.listLinks10}
                </h4>
                <h4
                  onClick={() =>
                    setMobileHeaderOption(
                      'Diageo Ireland Section Mobile'
                    )
                  }
                >
                  {props.content.listLink17} <RightOutlined />
                </h4>
                <h4
                  onClick={() =>
                    setMobileHeaderOption(
                      'R & A Bailey Section Mobile'
                    )
                  }
                >
                  {props.content.listLink22} <RightOutlined />
                </h4>

                <h4
                  onClick={() =>
                    setMobileHeaderOption(
                      'Guinness Storehouse Sections Mobile'
                    )
                  }
                >
                  {props.content.listLink25} <RightOutlined />
                </h4>

              </div>}

              {mobileHeaderOption === "Diageo Ireland Section Mobile" && <div className='mobile-header-links'>
                <div onClick={() => setMobileHeaderOption("Diageo Retirement Savings Plan Mobile")} className='back-button'><ArrowLeftOutlined /> {props.content.header3}</div>
                <p onClick={() => setMobileHeaderOption("Diageo Retirement Savings Plan Mobile")}>{props.content.listLink34}</p>
                <h4
                  onClick={() => {
                    router.push(
                      '/diageo-retirement-savings-plan/diageo-ireland-section'
                    )
                    onClose()
                  }}
                >
                  {props.content.listLinks11}
                </h4>
                <h4
                  onClick={() => {
                    router.push(
                      '/diageo-retirement-savings-plan/diageo-ireland-section/member-information'
                    )
                    onClose()
                  }}
                >
                  {props.content.listLink18}
                </h4>
                <h4
                  onClick={() => {
                    router.push(
                      '/diageo-retirement-savings-plan/diageo-ireland-section/how-do-i-join'
                    )
                    onClose()
                  }}
                >
                  {props.content.listLink14}
                </h4>
                <h4
                  onClick={() => {
                    router.push(
                      '/diageo-retirement-savings-plan/diageo-ireland-section/forms'
                    )
                    onClose()
                  }}
                >
                  {props.content.listLinks}
                </h4>
                <h4
                  onClick={() => {
                    router.push(
                      '/diageo-retirement-savings-plan/diageo-ireland-section/scheme-documentation'
                    )
                    onClose()
                  }}
                >
                  {props.content.listLink19}
                </h4>
                <h4
                  onClick={() => {
                    router.push(
                      '/diageo-retirement-savings-plan/diageo-ireland-section/investment-options'
                    )
                    onClose()
                  }}
                >
                  {props.content.listLink20}
                </h4>
                <h4
                  onClick={() => {
                    router.push(
                      '/diageo-retirement-savings-plan/diageo-ireland-section/annual-reviews'
                    )
                    onClose()
                  }}
                >
                  {props.content.listLink21}
                </h4>

              </div>}

              {mobileHeaderOption === "R & A Bailey Section Mobile" && <div className='mobile-header-links'>
                <div onClick={() => setMobileHeaderOption("Diageo Retirement Savings Plan Mobile")} className='back-button'><ArrowLeftOutlined /> {props.content.header3}</div>
                <p onClick={() => setMobileHeaderOption("Diageo Retirement Savings Plan Mobile")}>{props.content.listLink35}</p>
                <h4
                  onClick={() => {
                    router.push(
                      '/diageo-retirement-savings-plan/r-and-a-bailey-section'
                    )
                    onClose()
                  }}
                >
                  {props.content.listLink23}
                </h4>
                <h4
                  onClick={() => {
                    router.push(
                      '/diageo-retirement-savings-plan/r-and-a-bailey-section/member-information'
                    )
                    onClose()
                  }}
                >
                  {props.content.listLink18}
                </h4>
                <h4
                  onClick={() => {
                    router.push(
                      '/diageo-retirement-savings-plan/r-and-a-bailey-section/how-do-i-join'
                    )
                    onClose()
                  }}
                >
                  {props.content.listLink14}
                </h4>
                <h4
                  onClick={() => {
                    router.push(
                      '/diageo-retirement-savings-plan/r-and-a-bailey-section/forms'
                    )
                    onClose()
                  }}
                >
                  {props.content.listLinks}
                </h4>
                <h4
                  onClick={() => {
                    router.push(
                      '/diageo-retirement-savings-plan/r-and-a-bailey-section/scheme-documentation'
                    )
                    onClose()
                  }}
                >
                  {props.content.listLink19}
                </h4>
                <h4
                  onClick={() => {
                    router.push(
                      '/diageo-retirement-savings-plan/r-and-a-bailey-section/investment-options'
                    )
                    onClose()
                  }}
                >
                  {props.content.listLink20}
                </h4>
                <h4
                  onClick={() => {
                    router.push(
                      '/diageo-retirement-savings-plan/r-and-a-bailey-section/annual-reviews'
                    )
                    onClose()
                  }}
                >
                  {props.content.listLink21}
                </h4>

              </div>}

              {mobileHeaderOption === "Guinness Storehouse Sections Mobile" && <div className='mobile-header-links'>
                <div onClick={() => setMobileHeaderOption("Diageo Retirement Savings Plan Mobile")} className='back-button'><ArrowLeftOutlined /> {props.content.header3}</div>
                <p onClick={() => setMobileHeaderOption("Diageo Retirement Savings Plan Mobile")}>{props.content.listLink25}</p>
                <h4
                  onClick={() => {
                    router.push(
                      '/diageo-retirement-savings-plan/guinness-storehouse-section'
                    )
                    onClose()
                  }}
                >
                  {props.content.listLink26}
                </h4>
                <h4
                  onClick={() => {
                    router.push(
                      '/diageo-retirement-savings-plan/guinness-storehouse-section/member-information'
                    )
                    onClose()
                  }}
                >
                  {props.content.listLink18}
                </h4>
                <h4
                  onClick={() => {
                    router.push(
                      '/diageo-retirement-savings-plan/guinness-storehouse-section/how-do-i-join'
                    )
                    onClose()
                  }}
                >
                  {props.content.listLink14}
                </h4>
                <h4
                  onClick={() => {
                    router.push(
                      '/diageo-retirement-savings-plan/guinness-storehouse-section/forms'
                    )
                    onClose()
                  }}
                >
                  {props.content.listLinks}
                </h4>
                <h4
                  onClick={() => {
                    router.push(
                      '/diageo-retirement-savings-plan/guinness-storehouse-section/scheme-documentation'
                    )
                    onClose()
                  }}
                >
                  {props.content.listLink19}
                </h4>
                <h4
                  onClick={() => {
                    router.push(
                      '/diageo-retirement-savings-plan/guinness-storehouse-section/investment-options'
                    )
                    onClose()
                  }}
                >
                  {props.content.listLink20}
                </h4>
                <h4
                  onClick={() => {
                    router.push(
                      '/diageo-retirement-savings-plan/guinness-storehouse-section/annual-reviews'
                    )
                    onClose()
                  }}
                >
                  {props.content.listLink21}
                </h4>

              </div>}


            </Drawer>
          </div>
        </div>
      </div>
    </>
  )
}
