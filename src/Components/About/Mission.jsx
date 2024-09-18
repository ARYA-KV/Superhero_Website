import React from 'react';
import './Mission.css';
import Header from '../../pages/Header';
import ChatBot from 'react-simple-chatbot';

const steps = [
  { id: '0', message: 'Welcome! I am here to assist you.', trigger: '1' },
  { id: '1', message: 'What would you like to know about our superhero’s mission?', trigger: '2' },
  { id: '2', options: [
    { value: 1, label: 'How does the superhero prevent crimes?', trigger: '3' },
    { value: 2, label: 'What actions are taken against drug abuse?', trigger: '4' },
    { value: 3, label: 'How is the superhero helping the elderly?', trigger: '5' },
    { value: 4, label: 'Can I report an issue or crime?', trigger: '6' }
  ]},
  { id: '3', message: 'Our superhero works day and night to prevent crime by patrolling the city, responding to emergencies, and collaborating with local authorities.', trigger: '2' },
  { id: '4', message: 'We tackle drug abuse by raising awareness, supporting recovery programs, and directly intervening when needed to reduce drug-related crimes.', trigger: '2' },
  { id: '5', message: 'Our hero assists the elderly by ensuring their safety, providing support for emergencies, and protecting them from potential threats in the city.', trigger: '2' },
  { id: '6', message: 'Yes! You can report any issue or crime directly on our website. Just click on the "Report Issue" button.', trigger: '2' }
];


const Mission = () => {
  return (
    <>
      <Header />
      <div className='first-container'>
        <div className="comic-container">
          <article className="comic">
            <div className="panel">
              <img width={'100%'} height={'100%'} src="https://img.freepik.com/free-vector/flat-design-comic-book-city-background_23-2151122084.jpg" alt="" />
              <p className="text top-left">Crime in the city...</p>
              <p className="text bottom-right">......a superhero's duty!</p>
            </div>
            <div className="panel">
              <img width={'100%'} height={'100%'} src="https://english.mathrubhumi.com/image/contentid/policy:1.7933370:1665037110/drug%20abuse%20(1).jpg?$p=8989323&f=16x10&w=856&q=0.8" alt="" />
              <p className="text top-left">Drug abuse......</p>
              <p className="text bottom-right">...a hero’s fight!</p>
            </div>
            <div className="panel">
              <p className="speech">I will protect you...</p>
              <img width={'100%'} height={'100%'} src="https://png.pngtree.com/png-vector/20240327/ourlarge/pngtree-a-dynamic-female-character-in-a-comic-book-png-image_12224036.png" alt="" />
            </div>
            <div className="panel">
              <p className="text top-left"> I protect our elderly and ensure their safety in the city.</p>
              <img width={'100%'} height={'100%'} src="https://as2.ftcdn.net/v2/jpg/03/75/51/59/1000_F_375515998_tINS1Uzrx7ct69xEuOgSCdV2UzDoDtvw.jpg" alt="" />
            </div>
            <div className="panel">
              <img width={'100%'} height={'100%'} src="https://www.shutterstock.com/image-vector/wow-female-face-sexy-surprised-600nw-727749916.jpg" alt="" />
              <p className="text bottom-right">I will  make our city a safer place for all!</p>
            </div>
            <div className="panel">
              <p className="text top-left">Making our neighborhood safe and friendly.</p>
              <img width={'100%'} height={'100%'} src="https://png.pngtree.com/png-vector/20220707/ourmid/pngtree-neighbors-looking-out-window-and-talk-to-each-other-png-image_5783029.png" alt="" />
            </div>
            <div className="panel">
              <img width={'100%'} height={'100%'} src="https://previews.123rf.com/images/alexpokusay/alexpokusay1511/alexpokusay151100024/47420694-gangster-with-gun-robbery-pop-art-retro-style-vector-illustration-comic-book-imitation.jpg" alt="" />
              <p className="text bottom-right">Stopping robbery and keeping everyone safe!</p>
            </div>
            <div className="panel">
              <p className="text top-left">Quick action saves lives...</p>
              <img width={'100%'} height={'100%'} src="https://clipart-library.com/images/Lcd5BM9ri.jpg" alt="" />
            </div>
            <div className="panel">
              <p className="text top-left">Submit your complaint on the site for help...</p>
              <img width={'100%'} height={'100%'} src="https://www.shutterstock.com/image-vector/open-laptop-notebook-computer-pinup-600nw-2207067587.jpg" alt="" />
              <p className="text bottom-right">THE END</p>
            </div>
          </article>
        </div>

        
       <div style={{ position: 'fixed', bottom: '10px', right: '10px', zIndex: 1000 }}>
          <ChatBot steps={steps} floating={true} />
        </div>
      </div>

    </>
  );
}
export default Mission;  