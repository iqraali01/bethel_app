// import React from "react";
import Image from "next/image";
// import React, { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import compassionImg from "../source/compassionnrelief-hero-image-new.png"; // replace if needed
import img1 from "@/source/whatwedo_img1.jpeg"
import img2 from "@/source/whatwedo_img2.jpeg"
import img3 from "@/source/whatwedo_img3.jpeg"
import img4 from "@/source/whatwedo_img4.jpeg"
import ImageSlider from "@/components/General/ImageSlider";

import floodimg1 from "@/source/floodrelief/1.jpg"
import floodimg2 from "@/source/floodrelief/2.jpg"
import floodimg3 from "@/source/floodrelief/3.jpg"
import floodimg4 from "@/source/floodrelief/4.jpg"
import floodimg5 from "@/source/floodrelief/5.jpg"
import floodimg6 from "@/source/floodrelief/6.jpg"
import floodimg7 from "@/source/floodrelief/7.jpg"


import covidimg1 from "@/source/covid19/1.jpg"
import covidimg2 from "@/source/covid19/2.jpg"
import covidimg3 from "@/source/covid19/3.jpg"
import covidimg4 from "@/source/covid19/4.jpg"

import persecutionimg1 from "@/source/persecution/1.jpg"
import persecutionimg2 from "@/source/persecution/2.jpg"
import persecutionimg3 from "@/source/persecution/3.jpg"

import dengueimg1 from "@/source/dengue/1.jpg"
import dengueimg2 from "@/source/dengue/2.jpg"
import dengueimg3 from "@/source/dengue/3.jpg"
import dengueimg4 from "@/source/dengue/4.jpg"

import practicalimg1 from "@/source/practicalsupport/1.jpg"
import practicalimg2 from "@/source/practicalsupport/2.jpg"
import practicalimg3 from "@/source/practicalsupport/3.jpg"
import practicalimg4 from "@/source/practicalsupport/4.jpg"
import practicalimg5 from "@/source/practicalsupport/5.jpg"
import practicalimg6 from "@/source/practicalsupport/6.jpg"
import practicalimg7 from "@/source/practicalsupport/7.jpg"
import practicalimg8 from "@/source/practicalsupport/8.jpg"
import practicalimg9 from "@/source/practicalsupport/9.jpg"
import practicalimg10 from "@/source/practicalsupport/10.jpg"

import getinvolvedimg1 from "@/source/getinvolved/1.jpg"
import getinvolvedimg2 from "@/source/getinvolved/2.jpg"
import getinvolvedimg3 from "@/source/getinvolved/3.jpeg"
import getinvolvedimg4 from "@/source/getinvolved/4.jpeg"
import getinvolvedimg5 from "@/source/getinvolved/5.jpeg"

// import { useEffect, useState } from "react";




const CompassionAndRelief = () => {
  // for the slider section
  const [sliderIndex, setSliderIndex] = useState(0);
  const slides = [
  covidimg1,
  covidimg2,
  covidimg3,
  dengueimg1,
  dengueimg2,
  dengueimg3,
  floodimg1,
  floodimg2,
  floodimg3,
  getinvolvedimg1,
  getinvolvedimg2,
  getinvolvedimg3,
];

const visibleSlides = 3;
const extendedSlides = [...slides, ...slides.slice(0, visibleSlides)];


// useEffect(() => {
//   const interval = setInterval(() => {
//     setSliderIndex((prev) =>
//       prev === 6 - 3 ? 0 : prev + 1
//     );
//   }, 3000);

//   return () => clearInterval(interval);
// }, []);
useEffect(() => {
  const interval = setInterval(() => {
    setSliderIndex((prev) => prev + 1);
  }, 3500);

  return () => clearInterval(interval);
}, []);

useEffect(() => {
  const track = document.querySelector(".cr-auto-slider-track");

  if (!track) return;

  if (sliderIndex === slides.length) {
    // wait for animation to finish
    setTimeout(() => {
      track.style.transition = "none";
      setSliderIndex(0);

      requestAnimationFrame(() => {
        track.style.transition = "transform 0.8s ease-in-out";
      });
    }, 800);
  }
}, [sliderIndex]);


  return (
    <>
      {/* PAGE WRAPPER — REQUIRED */}
      <div className="page-content">

        {/* SECTION */}
        <section className="compassion-hero">
          <div className="compassion-inner">

            {/* IMAGE — LEFT */}
            <div className="compassion-image">
              <Image
                src={compassionImg}
                alt="Compassion and Relief"
                fill
                className="img-cover"
                priority
              />
            </div>

            {/* TEXT — RIGHT */}
            <div className="compassion-content">
              <h1 className="compassion-title">
                Standing With The Vulnerable, <br/>
                Serving With Christ&apos;s <br/>Love.
              </h1>

              <p className="compassion-subtitle">
                Compassion is not an option - it is our calling
              </p>
            </div>

          </div>
        </section>

        {/* ================= NEXT SECTION ================= */}
        <section className="compassion-about">
          <div className="compassion-about-inner">
            <h2 className="about-title">
              Pakistan: A Land of Beauty and Vulnerability
            </h2>

            <p className="about-paragraph">
              Pakistan is a land of resilience, faith, and strength - but also one
              of deep vulnerability.  Every year, <br/>communities across the country face:
            </p>

            

            <div className="about-highlights">
              <p>Heavy rains and devastating floods </p>
              <p>Earthquakes that destroy homes and livelihoods</p>
              <p>Extreme weather that displaces families and children</p>
            </div>

            <p className="about-paragraph">
              In moments of crisis, the most vulnerable suffer first and often the
              longest. But <b>BETHEL</b> stands <br/>alongside affected communities, offering relief,
              restoration, and hope where it is needed most.
            </p>

            
          </div>
        </section>

       
       {/* ================= NEXT SECTION ================= */}

        <section className="compassion-about2">
          <div className="compassion-about-inner2">
            <h2 className="about-title2">
              The Christian Community in Pakistan
            </h2>

            <p className="about-paragraph2">
              Christians in Pakistan face unique and ongoing challenges. Many live under the weight of:
             
 
            </p>

            

            <div className="about-highlights2">
              
              <p>Poverty and unemployment</p>
              <p>Persecution and discrimination </p>
              <p>Social marginalization during national crises</p>
              <p>Social marginalization during national crises</p>
              <p>Limited access to food, clothing, and medical care</p>
            </div>

            <p className="about-paragraph2">
              Despite these hardships, the Christian community continues to serve faithfully, trust boldly, <br/>
              and hope deeply. Our mission is to stand with them - not only in prayer, but in practical, life-
              <br/> giving support.
            </p>

            
          </div>
        </section>

          {/* ================= COMPASSION STORY SECTION ================= */}
        <section className="compassion-story-section">
          <div className="compassion-story-image"></div>

          <div className="compassion-story-content">
            <p className="compassion-story-text">
              Compassion and Relief Ministry was not part of our original vision when we
              founded Bethel Evangelistic Organization in September 2009. Our focus was
              missions, evangelism, church planting, leadership training, and
              strengthening Christian families. But just a few months later, severe persecution in Gojra and Korian Village
              left over 250 Christian homes burned and seven lives lost. At our mother
              organization&apos;s request, we provided urgent support to the affected
              families - marking the beginning of our Compassion and Relief Ministry.
            </p>
          </div>
        </section>


        {/* ================= AUTO IMAGE SLIDER SECTION ================= */}
        <section className="cr-auto-slider-section">
          <div
            className="cr-auto-slider-track"
            style={{
              // transform: `translateX(-${sliderIndex * (100 / 3)}%)`,
              // transform: `translateX(-${sliderIndex * (100 / visibleSlides)}%)`,
              transform: `translateX(-${sliderIndex * (100 / visibleSlides)}vw)`,

            }}
          >
           

            {extendedSlides.map((img, index) => (
            <div className="cr-auto-slide" key={index}>
              <img src={img.src} alt={`compassion-slide-${index}`} />
            </div>
          ))}

          </div>
        </section>



        {/* ================= HEART BEHIND THE WORK SECTION ================= */}
        <section className="heart-section">
        {/* Decorative Lines */}
        <svg
            className="heart-lines"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
        >
            <path
            d="M0,160 C150,120 660,200 540,380 720,160 700,80 1080,100 1960,120 1440,60 1440,60"
            fill="none"
            stroke="#ff9f1c"
            strokeWidth="3"
            opacity="0.8"
            />
            <path
            d="M0,120 C100,360 420,200 820,220 820,240 1040,180 1240,200 1360,210 1440,80 1440,180"
            fill="none"
            stroke="#ff9f1c"
            strokeWidth="2"
            opacity="0.6"
            />
        </svg>

        {/* Content */}
        <div className="heart-content">
            <h2 className="heart-title">&ldquo; Our Heart Behind the Work</h2>
            <p className="heart-subtitle">
            We do not offer aid alone - we offer HOPE &rdquo;
            </p>
        </div>
        </section>

        {/* ================= AREAS OF COMPASSION & RELIEF ================= */}
        <section className="areas-section">
          <div className="areas-inner">

            {/* Section Heading */}
            <h2 className="areas-heading">
              &ldquo;Our Areas of Compassion &amp; Relief&rdquo;
            </h2>

            {/* ---------- ROW 1 : IMAGE LEFT / TEXT RIGHT ---------- */}
            <div className="areas-row">

              <div className="areas-image">
                <ImageSlider time={3500} transitionDuration={"1s"}>
                  <img src={floodimg1.src} alt="Flood Relief 1" />
                  <img src={floodimg2.src} alt="Flood Relief 2" />
                  <img src={floodimg3.src} alt="Flood Relief 3" />
                  <img src={floodimg4.src} alt="Flood Relief 4" />
                  <img src={floodimg5.src} alt="Flood Relief 5" />
                  <img src={floodimg6.src} alt="Flood Relief 6" />
                  <img src={floodimg7.src} alt="Flood Relief 7" />
                </ImageSlider>
              </div>

              <div className="areas-text">
                <h3 className="areas-title">Flood Relief</h3>

                <p className="areas-description">
                  When floods devastate homes and villages, we respond with:
                </p>

                <ul className="areas-list">
                  <li>Emergency food supplies</li>
                  <li>Clean drinking water</li>
                  <li>Clothing and bedding</li>
                  <li>Immediate relief for displaced families</li>
                </ul>
              </div>

            </div>

            {/* ---------- ROW 2 : TEXT LEFT / IMAGE RIGHT ---------- */}
            <div className="areas-row-wrapper dark">
            <div className="areas-row reverse">

              <div className="areas-text2">
                <h3 className="areas-title">COVID-19 Response</h3>

                <p className="areas-description">
                  During the pandemic, Bethel supported vulnerable families through:
                </p>

                <ul className="areas-list">
                  <li>Food ration distribution</li>
                  <li>Hygiene and safety supplies</li>
                  <li>Support for daily-wage earners affected by lockdowns</li>
    
                </ul>
              </div>

              <div className="areas-image2">
                <ImageSlider time={3500} transitionDuration={"1s"}>
                  <img src={covidimg1.src} alt="covid 1" />
                  <img src={covidimg2.src} alt="covid 2" />
                  <img src={covidimg3.src} alt="covid 3" />
                  <img src={covidimg4.src} alt="covid 4" />
                </ImageSlider>
              </div>

            </div>
            </div>

             {/* ---------- ROW 3 : IMAGE LEFT / TEXT RIGHT ---------- */}
            <div className="areas-row">

              <div className="areas-image">
                <ImageSlider time={3500} transitionDuration={"1s"}>
                  <img src={persecutionimg1.src} alt="persecution 1" />
                  <img src={persecutionimg2.src} alt="persecution 2" />
                  <img src={persecutionimg3.src} alt="persecution 3" />
                 
                </ImageSlider>
              </div>

              <div className="areas-text">
                <h3 className="areas-title">Persecution Support</h3>

                <p className="areas-description">
                  We walk alongside persecuted believers by providing:
                </p>

                <ul className="areas-list">
                  <li>Emergency assistance</li>
                  <li>Basic needs support</li>
                  <li>Encouragement, prayer, and pastoral care</li>
             
                </ul>
              </div>

            </div>

            {/* ---------- ROW 4 : TEXT LEFT / IMAGE RIGHT ---------- */}
            <div className="areas-row-wrapper dark">
            <div className="areas-row reverse">

              <div className="areas-text2">
                <h3 className="areas-title">Dengue & Medical Aid</h3>

                <p className="areas-description">
                  In times of illness and outbreaks, we assist families with:
                </p>

                <ul className="areas-list">
                  <li>Medical support and referrals</li>
                  <li>Help with treatment costs</li>
                  <li>Care for those unable to afford basic healthcare</li>
    
                </ul>
              </div>

              <div className="areas-image2">
                <ImageSlider time={3500} transitionDuration={"1s"}>
                  <img src={dengueimg1.src} alt="dengue 1" />
                  <img src={dengueimg2.src} alt="dengue 2" />
                  <img src={dengueimg3.src} alt="dengue 3" />
                  <img src={dengueimg4.src} alt="dengue 4" />
                </ImageSlider>
              </div>

            </div>
            </div>

            {/* ---------- ROW 5 : IMAGE LEFT / TEXT RIGHT ---------- */}
            <div className="areas-row">

              <div className="areas-image">
                <ImageSlider time={3500} transitionDuration={"1s"}>
                  <img src={practicalimg1.src} alt="practical 1" />
                  <img src={practicalimg2.src} alt="practical 2" />
                  <img src={practicalimg3.src} alt="practical 3" />
                  <img src={practicalimg4.src} alt="practical 4" />
                  <img src={practicalimg5.src} alt="practical 5" />
                  <img src={practicalimg6.src} alt="practical 6" />
                  <img src={practicalimg7.src} alt="practical 7" />
                  <img src={practicalimg8.src} alt="practical 8" />
                  <img src={practicalimg9.src} alt="practical 9" />
                  <img src={practicalimg10.src} alt="practical 10" />
                  
                </ImageSlider>
              </div>

              <div className="areas-text">
                <h3 className="areas-title">Seasonal & Practical Support</h3>

                <p className="areas-description">
                 Sometimes compassion looks simple - but changes lives. We provide: 
                </p>

                <ul className="areas-list">
                  <li>Fans during extreme summer heat</li>
                  <li>Thermos flasks for warmth in winter</li>
                  <li>Daily-use essentials that protect dignity and health</li>
                  
                </ul>
                 <p className="areas-description">
                These small acts become powerful reminders that people are seen, valued, and loved.
                </p>
              </div>

            </div>

            


          </div>
        </section>

          {/* ================= OVER THE YEARS SECTION ================= */}
        <section className="over-the-year-section">
          <div className="over-the-year-image"></div>

          <div className="over-the-year-content">
            <h5 className="over-the-year-title">Over the Years</h5>
            <p className="over-the-year-text">
              This ministry has grown out of necessity and obedience.
              Pakistan&apos;s frequent floods, earthquakes, and global crises
              like COVID-19 created a rising need for practical help.
              During these times, we provided essential support
              including food, clothing, bedding, Medical aid, and
              seasonal supplies.
            </p>
          </div>
        </section>

        {/* ================= HIGHLIGHT MESSAGE SECTION ================= */}
        <section className="highlight-message-section">
          <div className="highlight-message-box">
            <span className="corner corner-left"></span>

            <p className="highlight-message-text">
              Another key reason for our ministry is the severe persecution of
              Christians in Pakistan. Many believers have lost homes, possessions,
              and churches. Through our Compassion and Relief Ministry, we provide
              trauma care, counseling, prayer, and practical support, including
              rebuilding homes and churches and supplying essential household needs.
            </p>

            <span className="corner corner-right"></span>
          </div>
        </section>

        {/* ================= WE SERVE SECTION ================= */}
        <section className="serve-section">
          <div className="serve-inner">

            {/* LEFT CONTENT */}
            <div className="serve-content">
                <span className="serve-line"></span>
              

              <div className="serve-text-wrapper">
                <h2 className="serve-title">WE ALSO SERVE</h2>
                

                <p className="serve-text">
                Refugee communities, mainly Afghan Refugees,
                providing daily needs and support in times of
                uncertainty. Today, Compassion and Relief
                Ministry is a vital part of Bethel Evangelistic
                Organization, standing with the suffering Church
                and vulnerable communities during disasters and
                persecution.
                </p>
              </div>
            </div>

            {/* RIGHT DESIGN IMAGE */}
            {/* <div className="partner-image"></div> */}
             <div className="serve-image2">
                <ImageSlider time={3500} transitionDuration={"1s"}>
                  <img src={dengueimg1.src} alt="dengue 1" />
                  <img src={dengueimg2.src} alt="dengue 2" />
                  <img src={dengueimg3.src} alt="dengue 3" />
                  <img src={dengueimg4.src} alt="dengue 4" />
                </ImageSlider>
              </div>

          </div>
        </section>


        {/* Pakistan Wave Section */}
        <section className="pakistanWaveSection">
          <img
            src="../Images/pakistan-wave.jpg"
            alt="Pakistan Flag Wave"
            className="pakistanWaveImage"
          />
        </section>





        {/* ================= SCRIPTURE BACKGROUND SECTION ================= */}
        <section className="scripture-section" 
        //  style={{
        //     backgroundImage: "url('/images/C2.jpg')",
        // }}
        style={{
          backgroundImage: `url(/Images/C2.jpg)`
        }}

        >
        <div className="scripture-overlay">
            <div className="scripture-content">
            <p className="scripture-quote">
                &ldquo;Whatever you did for one of the least of these brothers and sisters
                of mine, you did for Me.&rdquo;
            </p>

            <p className="scripture-reference">
                <b>(Matthew 25:40)</b>
            </p>

            <p className="scripture-text">
                Through Compassion & Relief, we seek to reflect the hands and heart of
                Jesus - bringing light into places of pain and restoration into
                brokenness.
            </p>
            </div>
        </div>
        </section>

                {/* ================= GET INVOLVED SECTION ================= */}
        <section className="get-involved-section">
         {/* Centered background slider */}
        <div className="get-involved-slider">
          <ImageSlider time={3500} transitionDuration={"1s"}>
            <img src={getinvolvedimg1.src} alt="getinvolved 2" />
            <img src={getinvolvedimg2.src} alt="getinvolved 2" />
            <img src={getinvolvedimg3.src} alt="getinvolved 3" />
            <img src={getinvolvedimg4.src} alt="getinvolved 4" />
            <img src={getinvolvedimg5.src} alt="getinvolved 5" />
        
            
          </ImageSlider>
        </div>
        <div className="get-involved-inner">

            <p className="get-involved-label">
            Get Involved
            </p>

            <h2 className="get-involved-title">
            Together, we serve<br />
            Together, we restore<br />
            Together, we reflect <br />Christ&apos;s compassion
            </h2>

            <p className="get-involved-text">
            Whether through prayer, partnership, or support, you can be part of this mission.
            </p>

            <a className="btn-paddings theme-bg-dark to-light-bg border1-light smooth-transition no-outline pointer square-btn get-involved-donate">
            Donate  →
            </a>

        </div>
        </section>

      



      </div>
    </>
  );
};

export default CompassionAndRelief;
