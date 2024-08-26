import Image from 'next/image'
import React from 'react'
import Brand1 from '../../public/Assets/Images/homepage/Brand1.svg'
import Brand2 from '../../public/Assets/Images/homepage/Brand2.svg'
import Brand3 from '../../public/Assets/Images/homepage/Brand3.svg'
import Brand4 from '../../public/Assets/Images/homepage/Brand4.svg'
import Brand5 from '../../public/Assets/Images/homepage/Brand5.svg'
import Brand6 from '../../public/Assets/Images/homepage/Brand6.svg'
import Brand7 from '../../public/Assets/Images/homepage/Brand7.svg'
import Brand8 from '../../public/Assets/Images/homepage/Brand8.svg'
import Brand9 from '../../public/Assets/Images/homepage/Brand9.svg'
import Brand10 from '../../public/Assets/Images/homepage/Brand10.svg'
import Brand11 from '../../public/Assets/Images/homepage/Brand11.svg'
import Brand12 from '../../public/Assets/Images/homepage/Brand12.svg'
import Brand13 from '../../public/Assets/Images/homepage/Brand13.svg'
 
 
export  default function App( props){
    return (
       
        (props.content) && <div>
            <div className='diageo-container'>
 
                <div className='brand-section'>
                    <div className='first-row'>
                 
                    <Image alt="image" loader={()=>'https:' + props.content.image1.fields.file.url} src={'https:' +props.content.image1.fields.file.url}  width={130} height={100}  />
                    <Image alt="image" loader={()=>'https:' + props.content.image2.fields.file.url} src={'https:' +props.content.image2.fields.file.url}  width={130} height={100} />
                        {/* <Image src={Brand1} width={130} /> */}
                        {/* <Image src={Brand2} width={130} /> */}
                       
                        {/* <Image src={Brand3} width={130} /> */}
                        <Image alt="image" loader={()=>'https:' + props.content.image3.fields.file.url} src={'https:' +props.content.image3.fields.file.url}  width={130} height={100} />
                        <Image alt="image" loader={()=>'https:' + props.content.image4.fields.file.url} src={'https:' +props.content.image4.fields.file.url}  width={130} height={100} />
                        <Image alt="image" loader={()=>'https:' + props.content.image5.fields.file.url} src={'https:' +props.content.image5.fields.file.url}  width={130} height={100} />
                        <Image alt="image" loader={()=>'https:' + props.content.image6.fields.file.url} src={'https:' +props.content.image6.fields.file.url}  width={130} height={100} />
                    </div>
                    <div className='second-row'>
                    <Image alt="image" loader={()=>'https:' + props.content.image7.fields.file.url} src={'https:' +props.content.image7.fields.file.url}  width={130} height={100} />
                    <Image alt="image" loader={()=>'https:' + props.content.image8.fields.file.url} src={'https:' +props.content.image8.fields.file.url}  width={130} height={100} />
                    <Image alt="image" loader={()=>'https:' + props.content.image9.fields.file.url} src={'https:' +props.content.image9.fields.file.url}  width={130} height={100} />
                    <Image alt="image" loader={()=>'https:' + props.content.image10.fields.file.url} src={'https:' +props.content.image10.fields.file.url}  width={130} height={100} />
                    <Image alt="image" loader={()=>'https:' + props.content.image11.fields.file.url} src={'https:' +props.content.image11.fields.file.url}  width={130} height={100} />
                    <Image alt="image" loader={()=>'https:' + props.content.image12.fields.file.url} src={'https:' +props.content.image12.fields.file.url}  width={130} height={100} />
                    <Image alt="image" loader={()=>'https:' + props.content.image13.fields.file.url} src={'https:' +props.content.image13.fields.file.url}  width={130} height={100} />
                    </div>
                </div>
            </div>
        </div>
      
                )
            
}
 