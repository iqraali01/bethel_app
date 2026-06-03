import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import ImageSlider from "@/components/General/ImageSlider";
import { useRouter } from "next/router";
import AnimatedText from "./animated";

import thirdecumenical1 from "@/source/Local/thirdecumenicalconference/1.jpeg";
import thirdecumenical2 from "@/source/Local/thirdecumenicalconference/2.jpeg";
import thirdecumenical3 from "@/source/Local/thirdecumenicalconference/3.jpeg";

// import baptism1 from "@/source/Local/Baptism/BAPTISM/1.jpg";
import baptism2 from "@/source/Local/Baptism/BAPTISM/2.jpg";
import baptism3 from "@/source/Local/Baptism/BAPTISM/3new.jpg";
import baptism4 from "@/source/Local/Baptism/BAPTISM/4.jpg";
import baptism5 from "@/source/Local/Baptism/BAPTISM/5.jpg";
import baptism6 from "@/source/Local/Baptism/BAPTISM/6.jpg";
import baptism7 from "@/source/Local/Baptism/BAPTISM/7.jpg";
import baptism8 from "@/source/Local/Baptism/BAPTISM/8.jpg";
import baptism9 from "@/source/Local/Baptism/BAPTISM/9.jpg";
import baptism10 from "@/source/Local/Baptism/BAPTISM/10.jpg";
import baptism11 from "@/source/Local/Baptism/BAPTISM/11.jpg";
import baptism12 from "@/source/Local/Baptism/BAPTISM/12.jpg";
import baptism13 from "@/source/Local/Baptism/BAPTISM/13.jpg";
import baptism14 from "@/source/Local/Baptism/BAPTISM/baptism14.jpg";
import baptism15 from "@/source/Local/Baptism/BAPTISM/baptism15.jpg";
import baptism16 from "@/source/Local/Baptism/BAPTISM/baptism16.jpg";
import baptism17 from "@/source/Local/Baptism/BAPTISM/baptism17.jpg";
import baptism18 from "@/source/Local/Baptism/BAPTISM/baptism18.jpg";
import baptism19 from "@/source/Local/Baptism/BAPTISM/baptism19.jpg";
import baptism20 from "@/source/Local/Baptism/BAPTISM/baptism20.jpg";
import baptism21 from "@/source/Local/Baptism/BAPTISM/baptism21.jpg";

import marwari1 from "@/source/Local/Marwari/MARWARI/1.jpeg";
import marwari2 from "@/source/Local/Marwari/MARWARI/2.jpg";
import marwari3 from "@/source/Local/Marwari/MARWARI/3.jpg";
import marwari4 from "@/source/Local/Marwari/MARWARI/4.jpg";
import marwari5 from "@/source/Local/Marwari/MARWARI/5.jpg";
// import marwari6 from "@/source/Local/Marwari/MARWARI/6.jpg";
import marwari7 from "@/source/Local/Marwari/MARWARI/7.jpg";
import marwari8 from "@/source/Local/Marwari/MARWARI/8.jpg";
import marwari9 from "@/source/Local/Marwari/MARWARI/9.jpg";
import marwari10 from "@/source/Local/Marwari/MARWARI/10.jpg";
import marwari11 from "@/source/Local/Marwari/MARWARI/11.jpg";
import marwari12 from "@/source/Local/Marwari/MARWARI/12.jpeg";
import marwari13 from "@/source/Local/Marwari/MARWARI/13.jpeg";
import marwari14 from "@/source/Local/Marwari/MARWARI/14.jpeg";
import marwari15 from "@/source/Local/Marwari/MARWARI/15.jpeg";
import marwari16 from "@/source/Local/Marwari/MARWARI/16.jpeg";
import marwari17 from "@/source/Local/Marwari/MARWARI/17.jpeg";
import marwari18 from "@/source/Local/Marwari/MARWARI/18.jpeg";
import marwari19 from "@/source/Local/Marwari/MARWARI/19.jpeg";
import marwari20 from "@/source/Local/Marwari/MARWARI/20.jpeg";
import marwari21 from "@/source/Local/Marwari/MARWARI/21.jpeg";
import marwari22 from "@/source/Local/Marwari/MARWARI/22.jpeg";
import marwari23 from "@/source/Local/Marwari/MARWARI/23.jpeg";
import marwari24 from "@/source/Local/Marwari/MARWARI/24.jpeg";
import marwari25 from "@/source/Local/Marwari/MARWARI/25.jpeg";

import kelash1 from "@/source/Local/Kelash/kelash/1.jpg";
import kelash2 from "@/source/Local/Kelash/kelash/2.jpg";
import kelash3 from "@/source/Local/Kelash/kelash/3.jpg";
import kelash4 from "@/source/Local/Kelash/kelash/4.jpg";
import kelash5 from "@/source/Local/Kelash/kelash/5.jpg";
import kelash6 from "@/source/Local/Kelash/kelash/6.jpg";
import kelash7 from "@/source/Local/Kelash/kelash/7.jpg";
import kelash8 from "@/source/Local/Kelash/kelash/8.jpg";
import kelash9 from "@/source/Local/Kelash/kelash/9.jpg";
import kelash10 from "@/source/Local/Kelash/kelash/10.jpg";
import kelash11 from "@/source/Local/Kelash/kelash/11.jpg";
import kelash12 from "@/source/Local/Kelash/kelash/12.jpg";
import kelash13 from "@/source/Local/Kelash/kelash/13.jpg";
import kelash14 from "@/source/Local/Kelash/kelash/14.jpg";
import kelash15 from "@/source/Local/Kelash/kelash/15.jpg";
import kelash16 from "@/source/Local/Kelash/kelash/16.jpg";
// import kelash17 from "@/source/Local/Kelash/kelash/17.jpg";
import kelash18 from "@/source/Local/Kelash/kelash/kelash18.jpeg";
import kelash19 from "@/source/Local/Kelash/kelash/kelash19.jpeg";
import kelash20 from "@/source/Local/Kelash/kelash/20.jpeg";
import kelash21 from "@/source/Local/Kelash/kelash/21.jpeg";

import kiln1 from "@/source/Local/Lahore_Brick_Kilns/1.jpeg";
import kiln2 from "@/source/Local/Lahore_Brick_Kilns/2.jpeg";
import kiln3 from "@/source/Local/Lahore_Brick_Kilns/3.jpeg";
import kiln4 from "@/source/Local/Lahore_Brick_Kilns/4.jpeg";
import kiln5 from "@/source/Local/Lahore_Brick_Kilns/5.jpeg";
import kiln6 from "@/source/Local/Lahore_Brick_Kilns/6.jpeg";
import kiln7 from "@/source/Local/Lahore_Brick_Kilns/7.jpeg";
import kiln8 from "@/source/Local/Lahore_Brick_Kilns/8.jpeg";
import kiln9 from "@/source/Local/Lahore_Brick_Kilns/9.jpeg";
import kiln10 from "@/source/Local/Lahore_Brick_Kilns/10.jpeg";
import kiln11 from "@/source/Local/Lahore_Brick_Kilns/11.jpeg";

export default function LocalPage() {
  const router = useRouter();

  const navigateToReadMore = () => {
    // window.location.href = '/read-more';
    router.push("/read-more");
  };

  return (
    <Container fluid className="local-main-wrapper">
      <div className="local-wrapper1">
        <h3 className="lazy-appear3 local-heading">
          <span className="lazy-appear1">Story </span>
          <span className="lazy-appear2">Telling </span>
          <span className="lazy-appear3"> With</span>
          <br />
          <i className="lazy-appear4">Creative</i>
          <i className="lazy-appear4"> Courage</i>
        </h3>

        <div className="local-main-txt lazy-appear5">
          Courage is what led us to our name and it&apos;s what will lead you to
          winning ideas that fuel your creative juices, inspire your team, and
          move your audiences. Consider us your partner in crime on the journey
          to find your fascinating.
        </div>
        <br />
        <button
          className="lazy-appear6 local-simple-btn"
          onClick={navigateToReadMore}
        >

          Learn More.. <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Section 2 */}
      <Container fluid className="local-wrapper2">
        {/* <div className="section2-heading lazy-appear3">
          <h2>Third Ecumenical Conference for Theologically Trained Women 2024 </h2>
        </div> */}

        <Row className="lazy-appear5">
          <Col md={6} className="local-col1 lazy-appear1">

            <ImageSlider time={3500} transitionDuration={"1s"}>
              <img src={thirdecumenical1.src} alt="" />
              <img src={thirdecumenical2.src} alt="" />
              <img src={thirdecumenical3.src} alt="" />
              
              
            </ImageSlider>{" "}
            <p className="baptism-txt-src text-center">
              <i>Baptism Sources</i>
            </p>
          </Col>
          <Col md={6} className="baptism-text-container lazy-appear2 local-col">
           <h2 className="inline-section-heading right lazy-appear3">
              Third Ecumenical Conference for Theologically Trained Women 2024
            </h2>
            <p className="baptism-txt">
              The Third Ecumenical Conference for Theologically Trained Women was held in 2024 
              under the theme “Building the Church.” The session reflected on the biblical account
              of Deborah and Barak, highlighting how men and women are called to work together in
              obedience, leadership, and faith for the building of Christ’s Church.

            </p>
            {/* <br />

            <p className="baptism-txt">
              Baptism is a significant rite of passage in many Christian
              traditions, symbolizing the washing away of sin and the
              individual&apos;s admission into the faith community. It can be
              performed through sprinkling, pouring, or immersion, and is often
              considered a sacrament—a visible sign of an inward grace.
            </p> */}
            {/* <button
              className="baptism-btn lazy-appear6"
              onClick={navigateToReadMore}
            >
              Read More.. <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button> */}
          </Col>
        </Row>
      </Container>

      

      {/* Section 3 MARWARI TRIBE */}
      <Container fluid className="local-wrapper3">
        {/* <div className="section2-heading lazy-appear3 text-white">
          <h2>MARWARI TRIBE</h2>
        </div> */}

        <Row className="lazy-appear5">
          <Col
            md={6}
            className="baptism-text-container lazy-appear2 text-white local-col"
          >
            <h2 className="inline-section-heading left white lazy-appear3">
              MARWARI TRIBE
            </h2>
            <p className="baptism-txt">
              The Marwari tribe is an ethnolinguistic group primarily from the
              Rajasthan region in India, known for their rich cultural heritage,
              business acumen, and traditional values. They are influential in
              trade, commerce, and have a distinct language, attire, and cuisine
              that set them apart.
            </p>
            <br />

            <p className="baptism-txt">
              In this section, visitors can immerse themselves in the Marwari
              way of life, learning about their contributions to Indian culture
              and the global business landscape. Explore their festive
              traditions, family structures, and the intricacies of Marwari
              cuisine. Profiles on prominent Marwari personalities, their
              folklore, and the challenges faced by the Marwari community in
              modern times will also be featured.
            </p>
            {/* <button className=" lazy-appear6" onClick={navigateToReadMore}>
              Read More.. <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button> */}
          </Col>
          <Col md={6} className="local-col1 lazy-appear1">
            <ImageSlider time={3500} transitionDuration={"1s"}>
              <img src={marwari1.src} alt="" />
              <img src={marwari2.src} alt="" />
              <img src={marwari3.src} alt="" />
              <img src={marwari4.src} alt="" />
              <img src={marwari5.src} alt="" />
              {/* <img src={marwari6.src} alt="" /> */}
              <img src={marwari7.src} alt="" />
              <img src={marwari8.src} alt="" />
              <img src={marwari9.src} alt="" />
              <img src={marwari10.src} alt="" />
              <img src={marwari11.src} alt="" />
              <img src={marwari12.src} alt="" />
              <img src={marwari13.src} alt="" />
              <img src={marwari14.src} alt="" />
              <img src={marwari15.src} alt="" />
              <img src={marwari16.src} alt="" />
              <img src={marwari17.src} alt="" />
              <img src={marwari18.src} alt="" />
              <img src={marwari19.src} alt="" />
              <img src={marwari20.src} alt="" />
              <img src={marwari21.src} alt="" />
              <img src={marwari22.src} alt="" />
              <img src={marwari23.src} alt="" />
              <img src={marwari24.src} alt="" />
              <img src={marwari25.src} alt="" />
            </ImageSlider>{" "}
            <p className="baptism-txt-src text-white text-center">
              <i>Marwari Tribe Sources*</i>
            </p>
          </Col>
        </Row>
      </Container>

      

      {/* Section 4 KELASH TRIBE
       */}
      <Container fluid className="local-wrapper2">
        {/* <div className="section2-heading lazy-appear3">
          <h2> KELASH TRIBE</h2>
        </div> */}

        <Row className="lazy-appear5">
          <Col md={6} className="local-col1 lazy-appear1">
            <ImageSlider time={3500} transitionDuration={"1s"}>
              <img src={kelash1.src} alt="" />
              <img src={kelash2.src} alt="" />
              <img src={kelash3.src} alt="" />
              <img src={kelash4.src} alt="" />
              <img src={kelash5.src} alt="" />
              <img src={kelash6.src} alt="" />
              <img src={kelash7.src} alt="" />
              <img src={kelash8.src} alt="" />
              <img src={kelash9.src} alt="" />
              <img src={kelash10.src} alt="" />
              <img src={kelash11.src} alt="" />
              <img src={kelash12.src} alt="" />
              <img src={kelash13.src} alt="" />
              <img src={kelash14.src} alt="" />
              <img src={kelash15.src} alt="" />
              <img src={kelash16.src} alt="" />
              {/* <img src={kelash17.src} alt="" /> */}
              <img src={kelash18.src} alt="" />
              <img src={kelash19.src} alt="" />
              <img src={kelash20.src} alt="" />
              <img src={kelash21.src} alt="" />
            </ImageSlider>{" "}
            <p className="baptism-txt-src text-center">
              <i>Baptism Sources</i>
            </p>
          </Col>
          <Col md={6} className="baptism-text-container lazy-appear2 local-col">
          <h2 className="inline-section-heading right lazy-appear3">
            KELASH TRIBE
          </h2>
            <p className="baptism-txt">
              The Kalash or Kalasha, are a unique indigenous people residing in
              the Chitral district of Pakistan. They are known for their
              distinctive cultural rituals, colorful attire, and polytheistic
              religion. This tribe is famed for their vibrant festivals and a
              strong sense of identity that stands out in the predominantly
              Muslim region of Pakistan.
            </p>
            <br />

            <p className="baptism-txt">
              Discover the Kelash tribe&apos;s way of life, their beliefs, and their
              social structures in this section. Understand the significance of
              their festivals like Joshi and Chaumos, their ancient customs, and
              the challenges they face preserving their heritage. We also
              examine the impact of tourism on their society and the steps being
              taken to protect their culture.
            </p>
            {/* <button
              className="baptism-btn lazy-appear6"
              onClick={navigateToReadMore}
            >
              Read More.. <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button> */}
          </Col>
        </Row>
      </Container>


       <Container fluid className="local-wrapper3">
        {/* <div className="section2-heading lazy-appear3 text-white">
          <h2>BAPTISM</h2>
        </div> */}

        <Row className="lazy-appear5">
          <Col
            md={6}
            className="baptism-text-container lazy-appear2 text-white local-col"
          >
             <h2 className="inline-section-heading left white lazy-appear3">
                BAPTISM
            </h2>
            <p className="baptism-txt">
              This section offers insight into the practice of baptism across
              different denominations, it&apos;s historical origins, and its
              significance in contemporary worship. Learn about the theological
              differences between infant baptism and believers baptism, the
              preparation processes involved for candidates and their families,
              and the various customs and celebrations associated with this
              sacred ceremony.
            </p>
            <br />

            <p className="baptism-txt">
              Baptism is a significant rite of passage in many Christian
              traditions, symbolizing the washing away of sin and the
              individual&apos;s admission into the faith community. It can be
              performed through sprinkling, pouring, or immersion, and is often
              considered a sacrament—a visible sign of an inward grace.
            </p>
            {/* <button className=" lazy-appear6" onClick={navigateToReadMore}>
              Read More.. <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button> */}
          </Col>
          <Col md={6} className="local-col1 lazy-appear1">
            <ImageSlider time={3500} transitionDuration={"1s"}>
              {/* <img src={baptism1.src} alt="" /> */}
              <img src={baptism2.src} alt="" />
              <img src={baptism3.src} alt="" />
              <img src={baptism4.src} alt="" />
              <img src={baptism5.src} alt="" />
              <img src={baptism6.src} alt="" />

              <img src={baptism7.src} alt="" />
              <img src={baptism8.src} alt="" />
              <img src={baptism9.src} alt="" />
              <img src={baptism10.src} alt="" />
              <img src={baptism11.src} alt="" />
              <img src={baptism12.src} alt="" />
              <img src={baptism13.src} alt="" />
              <img src={baptism14.src} alt="" />
              <img src={baptism15.src} alt="" />
              <img src={baptism16.src} alt="" />
              <img src={baptism17.src} alt="" />
              <img src={baptism18.src} alt="" />
              <img src={baptism19.src} alt="" />
              <img src={baptism20.src} alt="" />
              <img src={baptism21.src} alt="" />
            </ImageSlider>{" "}
            <p className="baptism-txt-src text-white text-center">
              <i>Baptism Sources</i>
            </p>
          </Col>
        </Row>
      </Container>


      {/* Section 5 BRICK KILNS
       */}
      

      <Container fluid className="local-wrapper2">
        {/* <div className="section2-heading lazy-appear3">
          <h2> BRICK KILNS</h2>
        </div> */}

        <Row className="lazy-appear5">
          <Col md={6} className="local-col1 lazy-appear1">
            <ImageSlider time={3500} transitionDuration={"1s"}>
              <img src={kiln1.src} alt="" />
              <img src={kiln2.src} alt="" />
              <img src={kiln3.src} alt="" />
              <img src={kiln4.src} alt="" />
              <img src={kiln5.src} alt="" />
              <img src={kiln6.src} alt="" />
              <img src={kiln7.src} alt="" />
              <img src={kiln8.src} alt="" />
              <img src={kiln9.src} alt="" />
              <img src={kiln10.src} alt="" />
              <img src={kiln11.src} alt="" />
            </ImageSlider>{" "}
            <p className="baptism-txt-src text-center">
              <i>Marwari Tribe Sources*</i>
            </p>
          </Col>
          <Col md={6} className="baptism-text-container lazy-appear2 local-col">
           <h2 className="inline-section-heading right lazy-appear3">
               BRICK KILNS
            </h2>
            <p className="baptism-txt">
              Brick kilns are one of the oldest manufacturing facilities that
              produce bricks, a fundamental building material. They operate
              through firing clay at high temperatures, which historically
              involved manual labor and traditional techniques. Today, they vary
              from small-scale operations to large industrial complexes,
              employing different technologies like Clamp Kilns, Bull&apos;s Trench
              Kilns, Hoffmann Kilns, and Tunnel Kilns.
            </p>
            <br />

            <p className="baptism-txt">
              This section delves into the history of brick-making, the
              evolution of kiln technology, and the environmental and social
              issues surrounding the industry. It will highlight advancements in
              sustainable practices, the life of workers in the kilns, and the
              global distribution and economics of brick production. We also
              address the advocacy for fair labor practices and the future of
              brick manufacturing in an eco-conscious world.
            </p>
            {/* <button
              className="baptism-btn lazy-appear6"
              onClick={navigateToReadMore}
            >
              Read More.. <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button> */}
          </Col>
        </Row>
      </Container>

      

      
      

      

      <AnimatedText />
    </Container>
  );
}
