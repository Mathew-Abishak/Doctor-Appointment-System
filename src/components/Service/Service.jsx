import React from 'react'
import SubHeader from '../Shared/SubHeader'
import Footer from '../Shared/Footer/Footer'
import Header from '../Shared/Header/Header'
import img from '../../images/features/baby.png'
import { Link } from 'react-router-dom'
import doctorBg from '../../images/img/doctors-bg.jpg';
import img1 from '../../images/organ.jpg';
import img2 from '../../images/insurnce.jpg';
import img3 from '../../images/Doctorspeci.jpg'
import img4 from '../../images/Lab.jpg'
import img6 from '../../images/emrgncy.jpeg'
const Service = () => {
  const weArePleaseStyle = {
    backgroundColor: "antiquewhite",
    height: "60vh",
    background: `url(${doctorBg}) no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    padding: "10px",
    position: "relative",
    marginTop: 200,
    marginBottom: 100
  }
  return (
    <>
      <Header />
      <SubHeader title="Service" subtitle="we provide best services that are needed for the people." />

      <div className="container" style={{ marginTop: 200, marginBottom: 100 }}>
        <div className="row">
          {
            Array(1).fill(null).map((_item, id) => (
              <div className="col-lg-4 col-md-6 col-sm-6" key={id + 6}>
                <div className="card shadow border-0 mb-5">
                  <img src={img} alt="" className="img-fluid" style={{ maxHeight: '17rem', objectFit: 'cover' }} />
                  <div className="p-2">
                    <h4 className="mt-4 mb-2">Child care</h4>
                    <p className="mb-4">At Healing Horizon, we understand the unique medical needs of children. Our team of pediatric specialists is dedicated to providing compassionate and expert care for infants, children, and adolescents. Whether your child needs a routine check-up, specialized treatment, or ongoing care for a chronic condition, our pediatricians are here to help</p>
                  </div>
                </div>
              </div>
            ))
          }
          {
            Array(1).fill(null).map((_item, id) => (
              <div className="col-lg-4 col-md-6 col-sm-6" key={id + 6}>
                <div className="card shadow border-0 mb-5">
                  <img src={img2} alt="" className="img-fluid" style={{ maxHeight: '17rem', objectFit: 'cover' }} />
                  <div className="p-2">
                    <h4 className="mt-4 mb-2">Insurance</h4>
                    <p className="mb-4">We strive to make accessing medical care as seamless as possible for our patients. At our clinic, we accept a wide range of insurance plans to accommodate diverse needs, including [List of Accepted Insurance Plans]. If your insurance provider is not listed, our administrative team is available to assist you in understanding your coverage options..</p>
                  </div>
                </div>
              </div>
            ))
          }
          {
            Array(1).fill(null).map((_item, id) => (
              <div className="col-lg-4 col-md-6 col-sm-6" key={id + 6}>
                <div className="card shadow border-0 mb-5">
                  <img src={img1} alt="" className="img-fluid" style={{ maxHeight: '17rem', objectFit: 'cover' }} />
                  <div className="p-2">
                    <h4 className="mt-4 mb-2">Organ Transplantations</h4>
                    <p className="mb-4">At Healing Horizon, our organ transplant program is dedicated to providing exceptional care to patients with organ failure. Our comprehensive services include kidney, liver, heart, lung, and pancreas transplants, offering hope and improved quality of life to those in need</p>
                  </div>
                </div>
              </div>
            ))
          }
          {
            Array(1).fill(null).map((_item, id) => (
              <div className="col-lg-4 col-md-6 col-sm-6" key={id + 6}>
                <div className="card shadow border-0 mb-5">
                  <img src={img3} alt="" className="img-fluid" style={{ maxHeight: '17rem', objectFit: 'cover' }} />
                  <div className="p-2">
                    <h4 className="mt-4 mb-2">Specialized Doctors</h4>
                    <p className="mb-4">our team comprises highly skilled and experienced specialized doctors who excel in various fields of medicine. From cardiology to oncology, neurology to orthopedics, gastroenterology to pediatrics, our specialized doctors offer expertise and compassionate care to patients with diverse medical needs.</p>
                  </div>
                </div>
              </div>
            ))
          }
          {
            Array(1).fill(null).map((_item, id) => (
              <div className="col-lg-4 col-md-6 col-sm-6" key={id + 6}>
                <div className="card shadow border-0 mb-5">
                  <img src={img4} alt="" className="img-fluid" style={{ maxHeight: '17rem', objectFit: 'cover' }} />
                  <div className="p-2">
                    <h4 className="mt-4 mb-2">Laboratories</h4>
                    <p className="mb-4">At Healing Horizon, our laboratories are dedicated to providing accurate and timely diagnostic testing to support your healthcare journey. Equipped with state-of-the-art technology and staffed by skilled professionals, our labs offer a comprehensive range of services, including blood tests, imaging studies, pathology tests, microbiology tests, and molecular diagnostics. We prioritize efficiency and strive to deliver fast turnaround times, often providing results within hours for routine tests.</p>
                  </div>
                </div>
              </div>
            ))
          }
          {
            Array(1).fill(null).map((_item, id) => (
              <div className="col-lg-4 col-md-6 col-sm-6" key={id + 6}>
                <div className="card shadow border-0 mb-5">
                  <img src={img6} alt="" className="img-fluid" style={{ maxHeight: '17rem', objectFit: 'cover' }} />
                  <div className="p-2">
                    <h4 className="mt-4 mb-2">Emergency Services</h4>
                    <p className="mb-4">At Healing Horizon, our emergency services department is committed to providing prompt and compassionate care for patients experiencing medical emergencies. Our team of skilled healthcare professionals is available 24/7 to address urgent medical needs, ranging from injuries and acute illnesses to life-threatening conditions.</p>
                  </div>
                </div>
              </div>
            ))
          }
         
        </div>
      </div>

      <section style={weArePleaseStyle}>
        <div className="container" style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
          <div className="row">
            <div className="col-lg-7">
              <div className="d-flex align-items-center">
                <div className='mb-4 section-title text-center'>
                  <h2 className='text-uppercase'>We are pleased to offer you the</h2>
                  <p className='form-text'>wide range of medical specialties, state-of-the-art facilities, and compassionate care tailored to your individual needs.</p>
                  <Link to={'/doctors'} className="btn-get-started scrollto">Get Started</Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </>
  )
}

export default Service