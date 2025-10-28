// rfce
import React from 'react'
import { Link } from 'react-router-dom'
function LandingPage() {
  return (
    <div>
      {/* LandingPage */}
      <section style={{ width: '100%', height: '100vh', backgroundImage: "url('https://www.cpasitesolutions.com/cpa-websites/wp-content/uploads/2024/06/local-seo-for-bookeepers-1.png')", backgroundAttachment: 'fixed', backgroundPosition: 'top', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className="container-fluid row align-items-center">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 shadow border py-5 rounded mt-5 text-center" style={{ backgroundColor: "rgba(255, 255, 255, 0.5) " }}>
            <h3>Designed to get hired.
              Your skills, your story, your next job - all in one.
            </h3>
            <Link to={'/resume'} className='btn text-white' style={{ backgroundColor: 'purple' }}>Make Your Resume</Link>
          </div>
          <div className="col-md-4"></div>
        </div>

      </section>
      {/* tools */}
      <section className='m-5 '>
        <h1 className='fw-bolder d-flex justify-content-center'>Tools</h1>
        <div className="container row align-items-center">
          <div className="col-md-6 ">
            <div className='my-3'>
              <h4>Resume</h4>
              <p>Create unlimited new resumes and easily edit them afterwards.</p>
            </div>
            <div className='my-3'>
              <h4>
                Cover Letters
              </h4>
              <p>Easily write professional cover letters.
              </p>
            </div>
            <div className='my-3'>
              <h4>
                Jobs
              </h4>
              <p>Automatically receive new and relevant job postings.
              </p>
            </div>
            <div className='my-3'>
              <h4>Applications</h4>
              <p>Effortlessly manage and track your job applications in an organized manner.</p>
            </div>
          </div>
          <div className="col-md-6 ">
            <img className='container img-fluid ' src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png " alt="resume" />
          </div>
        </div>

      </section>
      {/* image */}
      <section style={{ height: '500px', width: '100%', backgroundImage: "url('https://www.icu.ac.jp/en/assets/img/academics/ph_gs_ma_01.jpg')", backgroundPosition: 'top', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>

      </section>
      {/* testimony */}
      <section className='m-5'>
        <h1 className='text-center my-5'>Testimonal</h1>
        <div className='container row'>
          <div className='col-md-5'>
            <h3>Trusted by professionals worldwide.
            </h3>
            <p className='fs-5' style={{ textAlign: 'justify' }}>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.
            </p>
            <p className='fs-5' style={{ textAlign: 'justify' }}>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.
            </p>
            <p className='fs-5' style={{ textAlign: 'justify' }} >Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6 col-12">
            <div className="row">
              <div className="col-3">
                <img className='w-100 h-100' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png" alt="person" />
              </div>
              <div className="col-3">
                <img className='w-100 h-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRExrGzPIdL2YHhEapdqN4ZjunwaYOUNv4qRQ&s" alt="person" />
              </div>
              <div className="col-3">
                <img className='w-100 h-100' src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740&q=80" alt="person" />
              </div>
              <div className="col-3">
                <img className='w-100 h-100' src="https://img.freepik.com/free-photo/selfie-portrait-videocall_23-2149186122.jpg?semt=ais_hybrid&w=740&q=80" alt="person" />
              </div>
            </div>
            <div className="row my-3">
              <div className="col-3">
                <img className='w-100 h-100' src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY=" alt="person" />
              </div>
              <div className="col-3">
                <img className='w-100 h-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREO17hg6KvLlweeZWN0LCEdi-OXM9qGpbQ9w&s" alt="person" />
              </div>
              <div className="col-3">
                <img className='w-100 h-100' src="https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80" alt="person" />
              </div>
              <div className="col-3">
                <img className='w-100 h-100' src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=" alt="person" />
              </div>
            </div>
             <div className="row my-3">
              <div className="col-3">
                <img className='w-100 h-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRCEA-EgV4ocW1dEvqPyYwau7oDdeZSXzKkw&s" alt="person" />
              </div>
              <div className="col-3">
                <img className='w-100 h-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjX3SOTIfrK1Kt1czaejkmTg6i93_WjzivjdnJPNLO2dttISoDQ3KrFEzrOhCTelV00mY&usqp=CAU" alt="person" />
              </div>
              <div className="col-3">
                <img className='w-100 h-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDjaC6oZSfhcbXLqWlOFkCNEAE8TINxnPl6g&s" alt="person" />
              </div>
              <div className="col-3">
                <img className='w-100 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTQLDneZM4Ymoi7mRUgZD5OF0Y9rDJkpyhOg&s" alt="person" />
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default LandingPage