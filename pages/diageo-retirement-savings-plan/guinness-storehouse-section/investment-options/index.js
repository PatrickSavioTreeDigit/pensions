import Brand from '@/components/Brands/Brand'
import { Col, Row } from 'antd'
import { useRouter } from 'next/router'
import React from 'react'
import { DownloadOutlined } from '@ant-design/icons'
import {createClient} from "contentful"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
 
export default function Home({investmentContent,investmentDetails,investmentHome}) {
  const router = useRouter()
  return (
    <div className='diageo-retirement-savings-plan-container'>
      <div className='blue-color-container'>
        <div className='diageo-container'>
          <span
            className='cp'
            onClick={() => router.push('/diageo-retirement-savings-plan')}
          >
             {investmentDetails.text6}
          </span>{' '}
          /{' '}
          <span
            className='cp'
            onClick={() =>
              router.push(
                '/diageo-retirement-savings-plan/guinness-storehouse-section'
              )
            }
          >
            {investmentContent.listLinks9}
          </span>{' '}
          / <span>{investmentContent.listLinks6}</span>{' '}
          <Row justify={'center'}>
            <Col span={24}>
              <span className='heading'>
                <h2 style={{marginRight:'6rem'}}>{investmentContent.listLinks6}</h2>
                <p>
                {investmentHome.description}
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
                  router.push(
                    '/diageo-retirement-savings-plan/guinness-storehouse-section'
                  )
                }}
              >
                 {investmentContent.listLinks9}
              </h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/guinness-storehouse-section/member-information'
                  )
                }}
              >
                {investmentContent.listLinks2}
              </h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/guinness-storehouse-section/how-do-i-join'
                  )
                }}
              >
                {investmentContent.listLinks3}
              </h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/guinness-storehouse-section/forms'
                  )
                }}
              >
                {investmentContent.listLinks4}
              </h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/guinness-storehouse-section/scheme-documentation'
                  )
                }}
              >
                {investmentContent.listLink5}
              </h4>
              <h4 className='active-page-name'>Investment options</h4>
              <h4
                onClick={() => {
                  router.push(
                    '/diageo-retirement-savings-plan/guinness-storehouse-section/annual-reviews'
                  )
                }}
              >
                {investmentContent.listLinks7}
              </h4>
            </Col>
            <Col xl={1} lg={1} md={1} sm={0} xs={0}></Col>
            <Col xl={14} lg={14} md={14} sm={24} xs={24} className='right-col'>
              <h2>{investmentDetails.text1}</h2>
              {documentToReactComponents(investmentDetails.richText)}
              {/* <p>Do it for me is designed for those who:</p>
              <ul>
                <li>
                  Do not feel comfortable making regular investment decisions.
                </li>
                <li>
                  Do not want to review their investment selection regularly as
                  they approach retirement.
                </li>
                <li>
                  Would prefer to select an automated approach that switches
                  their funds for them into less risky funds (like bonds and
                  cash) as they approach retirement as follows:
                </li>
              </ul> */}
              <div className='investment-table'>
                 <Row
                  justify={'space-between'}
                  
                >
              {/*  {documentToReactComponents(investmentDetails.richText1)}*/}
              </Row>
                 <Row
                  justify={'space-between'}
                  className='investment-table-row border'
                >
                  <Col span={7}>
                    <p>
                      <b> {investmentDetails.textr}</b>
                    </p>
                  </Col>
                  <Col span={7}>
                    <p>
                      <b>{investmentDetails.texta}</b>
                    </p>
                  </Col>
                  <Col span={7}>
                    <p>
                      <b>{investmentDetails.textd}</b>
                    </p>
                  </Col>
                </Row>
                <Row justify={'space-between'} className='investment-table-row'>
                  <Col span={7}>
                    <p>{investmentDetails.textb}</p>
                  </Col>
                  <Col span={7}>
                    <p>{investmentDetails.textc}</p>
                  </Col>
                  <Col span={7}>
                  <a target='_blank' href='https://media.diageo.com/diageo-corporate-media/media/xcvfqjfl/diageo_high_risk_return_strategy-feb-23.pdf'>
                    <u>  {documentToReactComponents(investmentDetails.link1)}</u>
                    </a>

                  </Col>
                </Row>
                <Row justify={'space-between'} className='investment-table-row'>
                  <Col span={7}>
                    <p>{investmentDetails.texte}</p>
                  </Col>
                  <Col span={7}>
                    <p>{investmentDetails.textf}</p>
                  </Col>
                  <Col span={7}>
                  <a target='_blank' href='https://media.diageo.com/diageo-corporate-media/media/g2tbxbqw/diageo_medium_risk_return_growth_strategy-feb-23.pdf'>
                    <u>{documentToReactComponents(investmentDetails.link2)}</u>
                    </a>
                  </Col>
                </Row> 




                <Row justify={'space-between'} className='investment-table-row'>
                  <Col span={7}>
                    <p></p>
                  </Col>
                  <Col span={7}>
                    <p></p>
                  </Col>
                  <Col span={7}>
                  <a target='_blank' href='https://www.irishlifecorporatebusiness.ie/fund?TLA'>
                    <u>{documentToReactComponents(investmentDetails.link3)}</u>
                    </a>
                  </Col>
                </Row> 






                <Row
                  justify={'space-between'}
                  className='investment-table-row'
                >
                  <Col span={7}>
                    <p>{investmentDetails.textg}</p>
                  </Col>
                  <Col span={7}>
                    <p>{investmentDetails.texth}</p>
                  </Col>
                  <Col span={7}>
                  <a target='_blank' href='https://www.irishlifecorporatebusiness.ie/fund?RIP'>
                    <p>{documentToReactComponents(investmentDetails.link4)}</p>
                    </a>
                  </Col>
                </Row> 

                

                <Row justify={'space-between'} className='investment-table-row border'>
                  <Col span={7}>
                    <p></p>
                  </Col>
                  <Col span={7}>
                    <p></p>
                  </Col>
                  <Col span={7}>
                  <a target='_blank' href='https://media.diageo.com/diageo-corporate-media/media/40bhbvbf/diageo_low_risk_return_growth_strategy-feb-23.pdf'>
                    <u>{documentToReactComponents(investmentDetails.link5)}</u>
                    </a>
                  </Col>
                </Row> 






              </div>
              <h1>{(investmentDetails.text2)}</h1>
              <h1>
              {investmentDetails.text3}
                {/* “Do It Myself” which allows you to take control of your
                investment choices */}
              </h1>
              {documentToReactComponents(investmentDetails.richText2)}
              {/* <p>Do it myself is designed for those who:</p>
              <ul>
                <li>Want greater control over their pension investments.</li>
                <li>
                  Understand investment decision making and are comfortable with
                  the idea of selecting investment funds.
                </li>
                <li>
                  Are happy to review their investment approach regularly,
                  taking particular care as they approach retirement.
                </li>
                <li>Want access to specific investments.</li>
                <li>
                  Know how they would like to take their benefits at retirement
                  (cash, pension, ARF).
                </li>
              </ul> */}
              <h2>
              {investmentDetails.text4}
                {/* Links to the factsheets for the different funds are provided
                below: */}
              </h2>
              <p className='border-top' > {investmentDetails.text5}</p>
              <div className='yellow-links1'>


              <a target='_blank' href='https://media.diageo.com/diageo-corporate-media/media/xcvfqjfl/diageo_high_risk_return_strategy-feb-23.pdf' >
             <p style={{marginTop:'1.5rem'}}> {documentToReactComponents(investmentDetails.link6)} </p>
              </a><br/>
        
          

           <a target='_blank' href='https://media.diageo.com/diageo-corporate-media/media/g2tbxbqw/diageo_medium_risk_return_growth_strategy-feb-23.pdf'>
              {documentToReactComponents(investmentDetails.link7)}
              </a> <br/>
              
              <a target='_blank' href='https://www.irishlifecorporatebusiness.ie/fund?TLA'>
              {documentToReactComponents(investmentDetails.link8)}
              </a><br/>

              <a target='_blank' href='https://media.diageo.com/diageo-corporate-media/media/2hzmyszd/euro_government_bond_fund-feb-23.pdf#CBL'>
              {documentToReactComponents(investmentDetails.link9)}
              </a><br/>

              <a target='_blank' href='https://www.irishlifecorporatebusiness.ie/fund?CBL'>
              {documentToReactComponents(investmentDetails.link10)}
              </a><br/>

              <a target='_blank' href='https://media.diageo.com/diageo-corporate-media/media/z2pj5icp/diageo_indexed_world_equity_fund_partially_hedged-feb-23.pdf'>
              {documentToReactComponents(investmentDetails.link11)}
              </a>

              
                {/* <p>High Risk/Return Growth Strategy (PDF 127KB)</p>
                <p>Medium Risk/Return Growth Strategy (PDF 131KB)</p>
                <p>EMPOWER Cash Fund</p>
                <p>Indexed Eurozone Over 5 Year Bond Fund (PDF 130KB)</p>
                <p>Indexed Corporate Bond Fund</p>
                <p>Indexed World Equity Fund (partially hedged) (PDF 131KB)</p> */}
              </div>
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
    const inv = await client.getEntries({ content_type: "sectionLinks","fields.title":"Diageo Retirement Savings Plan1"})
    const inv1 = await client.getEntries({ content_type: "investmentOptions"})
    const inv2 = await client.getEntries({ content_type: "homeBannerWithoutImage", "fields.text": "Investment options"})
    console.log(inv.items)
    console.log(inv1.items[0].fields)
    console.log(inv2.items)
   
    // 'fields.title': "tv"
    return {
      props: {
        investmentContent:inv.items[0].fields,
        investmentDetails:inv1.items[0].fields,
        investmentHome:inv2.items[0].fields,
       
      },
      
    }
  }