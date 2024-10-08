/** @format */

import { Card, Typography, Box } from '@mui/material';
import React from 'react';
import AOS from 'aos';
// import { saveAs } from 'file-saver';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import PDF from '../../../public/images/pdf.png';
// ..
AOS.init();
function CardCourseStruture() {
  const [opennormal, setOpennormal] = React.useState(true);
  // const [openspecific, setspecific] = React.useState(false);

  const handleOpen = () => {
    setOpennormal(!opennormal);
  };
  // const handleopenspecific = () => {
  //   setspecific(!openspecific);
  // };

  const Submit = () => {
    const pdfURL = '/images/pdf/SE-REV30_10-4-2566_V3.pdf';
    const link = document.createElement('a');
    link.href = pdfURL;
    link.download = 'มคอ.2_ปี66_วศ.บ.วิศวกรรมซอฟต์แวร์_REV30_10-4-2566_V3.pdf'; // Specify the desired file name for the downloaded file.
    link.target = '_blank'; // Optional: Opens the link in a new tab/window.

    // Append the link to the document and programmatically click it to trigger the download.
    document.body.appendChild(link);
    link.click();

    // Clean up by removing the link element from the document.
    document.body.removeChild(link);
  };

  return (
    <>
      <Card
        sx={{
          padding: '1.5%',
          width: '100%',
          marginTop: '1%',
          display: 'flex',
          flexDirection: 'column',
          // justifyContent: 'space-between',
          borderRadius: 4,
        }}>
        <div className='TextCredits'>
          <Typography fontWeight={500}>
            จำนวนหน่วยกิตตลอดหลักสูตร / Total Credits
          </Typography>
          <Typography fontWeight={500}>130 หน่วยกิต / Credits</Typography>
        </div>
        {/* Open Subject */}
        <div className='TextCredits'>
          <Typography fontWeight={500} onClick={handleOpen}>
            หมวดวิชาศึกษาทั่วไป
          </Typography>
          <Typography fontWeight={500}>24 หน่วยกิต / Credits</Typography>
        </div>
        {opennormal ? (
          <div
            data-aos='fade-up'
            data-aos-duration='2000'
            data-aos-anchor-placement='top-bottom'>
            <div className='subTextCreadit'>
              {/* <div className='style'>
                <Typography fontWeight={500}>วิชาศึกษาทั่วไปบังคับ</Typography>
                <Typography fontWeight={500}>24 หน่วยกิต / Credits</Typography>
              </div> */}
              <div className='styleSub'>
                <Typography>กลุ่มวิชาภาษาและการสื่อสาร</Typography>
                <Typography>9 หน่วยกิต / Credits</Typography>
              </div>
              <div className='styleSub'>
                <Typography>กลุ่มวิชาสุขภาพ</Typography>
                <Typography>3 หน่วยกิต / Credits</Typography>
              </div>
              <div className='styleSub'>
                <Typography>กลุ่มวิชาบูรณาการ</Typography>
                <Typography>6 หน่วยกิต / Credits</Typography>
              </div>
              {/* <div className='style'>
                <Typography fontWeight={500}>วิชาศึกษาทั่วไปเลือก</Typography>
                <Typography fontWeight={500}>6 หน่วยกิต / Credits</Typography>
              </div> */}
              <div className='styleSub'>
                <Typography>กลุ่มวิชาสังคมศาสตร์และมนุยศาสตร์</Typography>
                <Typography>3 หน่วยกิต / Credits</Typography>
              </div>
              <div className='styleSub'>
                <Typography>กลุ่มวิชาวิทยาศาสตร์และคณิตศาสตร์</Typography>
                <Typography>3 หน่วยกิต / Credits</Typography>
              </div>
            </div>
          </div>
        ) : null}
        {/* Open specific */}
        <div className='TextCredits'>
          <Typography fontWeight={500} onClick={handleOpen}>
            หมวดวิชาเฉพาะ
          </Typography>
          <Typography fontWeight={500}>100 หน่วยกิต / Credits</Typography>
        </div>
        {opennormal ? (
          <div
            data-aos='fade-up'
            data-aos-duration='2000'
            data-aos-anchor-placement='top-bottom'>
            <div className='subTextCreadit'>
              {/* heading */}
              <div className='style'>
                <Typography fontWeight={500}>
                กลุ่มวิชาพื้นฐานวิชาชีพ
                </Typography>
                <Typography fontWeight={500}>24 หน่วยกิต / Credits</Typography>
              </div>
              {/* subtitle */}
              <div className='styleSub'>
                <Typography>วิชาพื้นฐานทางคณิตศาสตร์และวิศวกรรมศาสตร์</Typography>
                <Typography>12 หน่วยกิต / Credits</Typography>
              </div>
              <div className='styleSub'>
                <Typography>วิชาฝึกประสบการณ์ภาคสนาม</Typography>
                <Typography>12 หน่วยกิต / Credits</Typography>
              </div>
              <div className='style' style={{ marginTop: '1%' }}>
                <Typography fontWeight={500}>
                  วิชาชีพบังคับ
                </Typography>
                <Typography fontWeight={500}>55 หน่วยกิต / Credits</Typography>
              </div>
              {/* <div className='styleSub'>
                <Typography>กลุ่มฮาร์ดและสถาปัตยกรรมคอมพิวเตอร์</Typography>
                <Typography>14 หน่วยกิต / Credits</Typography>
              </div>
              <div className='styleSub'>
                <Typography>กลุ่มโครงสร้างพื้นฐานระบบ</Typography>
                <Typography>18 หน่วยกิต / Credits</Typography>
              </div>
              <div className='styleSub'>
                <Typography>กลุ่มเทคโนโลยีและวิธีการทางซอฟต์แวร์</Typography>
                <Typography>9 หน่วยกิต / Credits</Typography>
              </div>
              <div className='styleSub'>
                <Typography>กลุ่มเทคโนโลยีเพื่อประยุกต์</Typography>
                <Typography>3 หน่วยกิต / Credits</Typography>
              </div>
              <div className='styleSub'>
                <Typography>กลุ่มฝึกวิชาชีพและโครงงาน</Typography>
                <Typography>11 หน่วยกิต / Credits</Typography>
              </div> */}
              <div className='style' style={{ marginTop: '1%' }}>
                <Typography fontWeight={500}>
                  วิชาเลือก
                </Typography>
                <Typography fontWeight={500}>21 หน่วยกิต / Credits</Typography>
              </div>
            </div>
          </div>
        ) : null}
        <div className='TextCredits'>
          <Typography fontWeight={500}>หมวดวิชาเลือกเสรี</Typography>
          <Typography fontWeight={500}>6 หน่วยกิต / Credits</Typography>
        </div>
      </Card>
      <Box style={{ marginTop: '2%' }}>
        <Card className='Card'>
          <div className='Cardpart1'>
            <img src={PDF} style={{ padding: '20px' }} />
          </div>
          <div className='Cardpart2'>
            <Typography>เล่มหลักสูตร วศบ.ซอฟต์แวร์</Typography>
            <button onClick={() => Submit()}>Download file</button>
          </div>
        </Card>
      </Box>
    </>
  );
}

export default CardCourseStruture;
