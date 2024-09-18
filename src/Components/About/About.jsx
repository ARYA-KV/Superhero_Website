import React, { useEffect } from 'react'
import cover from '../../assets/img/women2.gif'
import doctor from '../../assets/img/dr..gif'
import exp from '../../assets/img/experiment.gif'
import hero from '../../assets/img/women.gif'
import crime from '../../assets/img/crime.gif'
import './About.css'
import Header from '../../pages/Header'

const About = () => {
  useEffect(() => {

    let books = document.querySelectorAll('.book');
    for (let book of books) {
      let pages = book.getElementsByClassName('bookpage');
      let size = pages.length;
      for (let i = 0, page; page = pages[i]; ++i) {
        if (i % 2 === 0) page.style.zIndex = (size - i);
      }
      book.onclick = function (e) {
        if (e.target === e.currentTarget) {
          e.target.classList.toggle('unrolled');
        } else {
          e.currentTarget.classList.remove('unrolled');
          let pageArray = [...e.target.parentElement.children];
          let pageNum = pageArray.indexOf(e.target);
          e.target.classList.remove('clickable');

          if (pageNum % 2 === 1) { 
            e.target.classList.remove('flipped');
            e.target.previousElementSibling.classList.remove('flipped');
            e.target.nextElementSibling.classList.remove('clickable');

            if (pageNum > 1) {
              e.target.previousElementSibling.classList.add('clickable');
              e.target.previousElementSibling.previousElementSibling.classList.add('clickable');
            } else {
              e.target.parentElement.classList.remove('opened');
            }
          } else if (pageNum === (pageArray.length - 1)) {
            for (let i = pageNum; i >= 0; --i) {
              pageArray[i].classList.remove('flipped');
            }
            e.target.parentElement.classList.remove('opened');
          } else { 
            if (pageNum === 0) {
              e.target.parentElement.classList.add('opened');
            } else {
              e.target.previousElementSibling.classList.remove('clickable');
            }
            e.target.classList.add('flipped');
            e.target.nextElementSibling.classList.add('flipped');
            e.target.nextElementSibling.classList.add('clickable');
            e.target.nextElementSibling.nextElementSibling.classList.add('clickable');
          }
        }
        e.stopPropagation();
      };
    }


  }, []);


  return (
    <>
      <Header />
     


       <main className='main-div'>
        <div className="bookmat">
          <div className="book">

            <div className="front cover bookpage">

              <div className='img1'>

                <h1 style={{
                  textAlign: 'center',
                  fontSize: '50px'
                }}>Adhira</h1>
                <h6 style={{ fontSize: '30px' }}>The Protector of the <br /> <span style={{ marginLeft: '25px' }}> Neighborhood</span></h6>


              </div>
            </div>
            <div className="back cover bookpage"></div>
            <div className="front bookpage">
              <div className='img2'>

                <img height={'80%'} width={'80%'} src={cover} alt="" />
                <p style={{ textAlign: 'center', color: 'white' }}>Adhira always dreamed of becoming a police officer. She wanted to protect her community and bring justice to those in need.</p>


              </div>

            </div>
            <div className="back bookpage">

              <div className='img3'>
                <img style={{ marginLeft: '30px' }} width={'90%'} height={'80%'} src="https://img1.picmix.com/output/stamp/normal/9/1/2/7/1197219_794f8.gif" alt="" />
                <p style={{ textAlign: 'center', color: 'white' }}>Adhira’s dream came true when she was accepted as a police trainee.Adhira and her fellow trainees are selected for a top-secret camp, known for transforming potential recruits into elite protectors with extraordinary abilities.</p>
              </div>

            </div>
            <div className="front bookpage">
              <div className="img3">
                <img height={'85%'} width={'100%'} src={doctor} alt="" />
                <p style={{ textAlign: 'center', color: 'white' }}>Dr. Vespera, a rogue scientist with a hidden agenda, infiltrated the training camp under the guise of a researcher. Secretly, he conducted experiments on the trainees, manipulating their powers to serve his own dark purposes.</p>
              </div>

            </div>
            <div className="back bookpage">
              <div className="img3">
                <img height={'85%'} width={'100%'} src={exp} alt="" />
                <p style={{ textAlign: 'center', color: 'white' }}>In a secret experiment, Adhira and the trainees were exposed to a powerful chemical, causing dramatic changes and unlocking their latent powers—far beyond their expectations.</p>
              </div>
            </div>
            <div className="front bookpage">
              <div className="img3">
                <img height={'85%'} width={'100%'} src={crime} alt="" />
                <p style={{ textAlign: 'center', color: 'white' }}>In a brutal confrontation, Dr. Vespera turned his deadly technology against the rebellious trainees. Despite their powers, they were overpowered and met a tragic fate, unable to escape the scientist’s ruthless wrath.</p>
              </div>
            </div>
            <div className="back bookpage">
              <div className="img3">
                <img height={'85%'} width={'100%'} src={hero} alt="" />
                <p style={{ textAlign: 'center', color: 'white' }}>Survivor of the tragedy, Adhira dedicated herself to building a platform to help her community. Driven by the memory of her fallen comrades, she vowed to use her powers for good, ensuring their sacrifice would lead to a better future.</p>
              </div>
            </div>
            <div style={{ backgroundColor: 'white' }} className="front lastpage bookpage">

            </div>
          </div>
        </div>
      </main> 
    </>
  )
}

export default About