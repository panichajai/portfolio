import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment'
import './App.css'

function App() {
  const [hide, setHide] = useState(false)

  return (
    
    <main id="main">
      <div className='leftPort'>
        <ImageProfile image="/src/assets/react.svg"/>
       <Title title="panicha panicha">
            <h3>ตำแหน่ง Font end</h3>
       </Title>

       <Title title="Contact">
        <p>วันเกิด {moment("2003/07/01").format("D MMM YYYY")}</p>
          <p style={{display:hide? 'none':'block'}} >Tel : 0652639642</p>
          <button onClick={()=> setHide(!hide)} >{hide? 'Show':'Hide'}</button>

          <p>Email : panichaboomjail262@gmail.com</p>
          <p>www.panicha.coom</p>
       </Title>
       
       <Title title="Eduction">
          <p>
            ปริญาตรี .....
          </p>
          <p>
            มหาลัยราชภัฏสวนสุนันทา
          </p>
       </Title>
        
      </div>
      <div className='rightPort'>
        <Title title="profile">
        <p>มนุษยสัมพันธ์ดี มีความรับผิดชอบ มีความตั้งใจที่จะพัฒนาตัวเองอยู่ตลอดเวลา พร้อมเรียนรู้และเปิดรับสิ่งใหม่ๆอยู่เสมอ</p>
       </Title>
       <Title title="profile">
        <p>มนุษยสัมพันธ์ดี มีความรับผิดชอบ มีความตั้งใจที่จะพัฒนาตัวเองอยู่ตลอดเวลา พร้อมเรียนรู้และเปิดรับสิ่งใหม่ๆอยู่เสมอ</p>
       </Title>
       <Title title="Work Experience">
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quis aliquid expedita maxime alias. Tempora voluptates aliquid deleniti sed accusamus!</p>
       </Title>
       <Title title="skills">
          <p>HTML</p>
          <p>CSS</p>
          <p>React.Js</p>
          <p>Next.Js</p>       
        </Title>
      </div>
    </main>
    
  )
}

export default App
