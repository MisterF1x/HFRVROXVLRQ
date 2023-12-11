import { About } from './layout/About';
import { ContactSection } from './layout/ContactSection';
import { FaqSection } from './layout/FaqSection';
import { Feature } from './layout/Feature';
import { Footer } from './layout/Footer';
import { Header } from './layout/Header';
import { Hero } from './layout/Hero';
import { SliderSection } from './layout/SliderSection';
// import gsap from 'gsap';
// import { useLayoutEffect } from 'react';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);

// const animateAboutSection = () => {
//   const isMobile = window.matchMedia('(max-width: 768px)').matches;

//   const tl = gsap.timeline();

//   tl.from('.about__title', { xPercent: -100, autoAlpha: 0 }).from(
//     '.about__paragraph',
//     { xPercent: 100, autoAlpha: 0 },
//     0
//   );
//   gsap.set('.card-list__item:nth-child(-n+2)', {
//     xPercent: -100,
//     autoAlpha: 0,
//   });
//   gsap.set('.card-list__item:nth-last-child(-n+2)', {
//     xPercent: 100,
//     autoAlpha: 0,
//   });

//   gsap.set('.card-list__item:nth-child(3),.card-list__item:nth-child(4)', {
//     autoAlpha: 1,
//   });

//   if (!isMobile) {
//     tl.from(
//       '.card-list__item:nth-child(3)',
//       {
//         duration: 1.5,
//         xPercent: -100,
//         ease: 'power2.out',
//       },
//       0
//     ).from(
//       '.card-list__item:nth-child(4)',
//       {
//         duration: 1.5,
//         xPercent: 100,
//         ease: 'power2.out',
//       },
//       0
//     );

//     tl.from('.card-list__item:nth-child(3) img', {
//       duration: 1.5,
//       xPercent: 100,
//       scale: 1.3,
//       delay: -1.5,
//       ease: 'power2.out',
//     }).from('.card-list__item:nth-child(4) img', {
//       duration: 1.5,
//       xPercent: -100,
//       scale: 1.3,
//       delay: -1.5,
//       ease: 'power2.out',
//     });
//   }

//   tl.to('.card-list__item:nth-child(2)', {
//     xPercent: 0,
//     autoAlpha: 1,
//     ease: 'power2.out',
//     stagger: 0.3,
//   })
//     .to('.card-list__item:nth-child(1)', {
//       xPercent: 0,
//       autoAlpha: 1,
//       ease: 'power2.out',
//       stagger: 0.3,
//     })
//     .to('.card-list__item:nth-last-child(2)', {
//       xPercent: 0,
//       autoAlpha: 1,
//       ease: 'power2.out',
//       stagger: 0.3,
//     })
//     .to('.card-list__item:nth-last-child(1)', {
//       xPercent: 0,
//       autoAlpha: 1,
//       ease: 'power2.out',
//       stagger: 0.3,
//     });
//   return tl;
// };

// const animateCasesSection = () => {
//   const tl = gsap.timeline();
//   tl.from('.slider-section__title', { xPercent: -100, autoAlpha: 0 })
//     .from('.slider-section__slider-panel', { xPercent: 100, autoAlpha: 0 })
//     .fromTo(
//       '.swiper-initialized',
//       { scale: 0.5, opacity: 0 },
//       { scale: 1, opacity: 1 }
//     );
//   return tl;
// };

// const animateFaqSection = () => {
//   const tl = gsap.timeline();
//   gsap.set('.accordion', { opacity: 0, y: 20 });
//   tl.from('.faq__title', { opacity: 0, yPercent: -100 }).to('.accordion', {
//     opacity: 1,
//     y: 0,
//     ease: 'power2.out',
//     stagger: 0.5,
//   });
//   return tl;
// };

// const animateContactSection = () => {
//   const tl = gsap.timeline();
//   tl.from('.section-contact__title', { yPercent: -100, autoAlpha: 0 })
//     .from('.info-list', { autoAlpha: 0 })
//     .fromTo(
//       '.section-contact__form',
//       { scaleX: 0.001 },
//       { scaleX: 1, ease: 'power1.in' }
//     )
//     .from('.form', { autoAlpha: 0 });
//   return tl;
// };

function App() {
  // useLayoutEffect(() => {
  //   // const casesAnimation = animateCasesSection();
  //   // const contactAnimation = animateContactSection();
  //   // const aboutAnimation = animateAboutSection();
  //   // const faqAnimation = animateFaqSection();

  //   // ScrollTrigger.create({
  //   //   trigger: '#cases',
  //   //   start: 'top center',
  //   //   end: 'bottom center',
  //   //   animation: casesAnimation,
  //   //   // preventOverlaps: true,
  //   //   // fastScrollEnd: true,
  //   //   // markers: true,
  //   // });

  //   // ScrollTrigger.create({
  //   //   trigger: '#contact-us',
  //   //   start: 'top center',
  //   //   end: 'bottom center',
  //   //   animation: contactAnimation,
  //   //   // preventOverlaps: true,
  //   //   // fastScrollEnd: true,
  //   // });

  //   // ScrollTrigger.create({
  //   //   trigger: '#faq',
  //   //   start: 'top center',
  //   //   end: 'bottom center',
  //   //   animation: faqAnimation,
  //   //   // toggleActions: 'play none none none',
  //   //   // preventOverlaps: true,
  //   //   // fastScrollEnd: true,
  //   // });

  //   // ScrollTrigger.create({
  //   //   trigger: '#about',
  //   //   start: 'top center',
  //   //   end: 'bottom center',
  //   //   animation: aboutAnimation,
  //   //   // toggleActions: 'play none none none',
  //   //   // preventOverlaps: true,
  //   //   // fastScrollEnd: true,
  //   // });

  //   // return () => {
  //   //   casesAnimation.kill();
  //   //   contactAnimation.kill();
  //   //   aboutAnimation.kill();
  //   // };
  // }, []);

  return (
    <>
      <Header id="header" />
      <main className="main">
        <Hero />
        <About id="about" />
        <Feature />
        <SliderSection id="cases" />
        <FaqSection id="faq" />
        <ContactSection id="contact-us" />
      </main>
      <Footer />
    </>
  );
}

export default App;
