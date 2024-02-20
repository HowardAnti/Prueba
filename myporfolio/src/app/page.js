"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Contact from "./components/Contact";
import Info from "./components/Info";
import Project from "./components/Project";
import { useState } from "react";

export default function Home() {

  

  const pages=[
    {id: 1,name:'Home'},
    {id: 2,name:'About'},
    {id: 3,name:'Skills'},
    {id: 4,name:'Services'},
    {id: 5,name:'Portfolio'},
    {id: 6,name:'Contact'},
  ]

  const contacts=[
    {id: 1,name:'Email',image: '/assets/email.gif',user:'user@gmail.com'},
    {id: 2,name:'Whatsapp',image: '/assets/whatsapp.gif',user:'998-888-777'},
    {id: 3,name:'Messenger',image: '/assets/messenger.gif',user:'userfb123'}
  ]

  const infocontacts=[
    {id: 1,name:'Name',placeholder: 'Insert your name',min: 40},
    {id: 2,name:'Mail',placeholder: 'Inser your emaili',min: 40},
    {id: 3,name:'Project',placeholder: 'Write your project',min: 80}
  ]

  const buttons=[
    {id: 1,name:'all'},
    {id: 2,name:'web'},
    {id: 3,name:'app'},
    {id: 4,name:'design'},
  ]

  const projects=[
    {id: 1, type: 'app', name:'App movil'},
    {id: 2, type: 'app', name:'App movil'},
    {id: 3, type: 'web', name:'Web design'},
    {id: 4, type: 'web', name:'App movil'},
    {id: 5, type: 'design', name:'Brand design'}
  ]

  const[newprojects,setNewProjects]=useState(projects);

  const click=(type)=>{
     type==='all'? setNewProjects(projects): setNewProjects(projects.filter(project=>project.type===type));
  }



  /*<Link className={styles.headlink} href={'/'}>Home</Link>*/ 
  return (
    <main className={styles.main}>
        <div id="Home" className={styles.home} >
            <div className={styles.head} >
                <span className={styles.namebox}>Ruiz</span>
                <div className={styles.links} >
                    {pages.map(page=>{
                      return(
                        <a key={page.id} className={styles.headlink} href={`#${page.name}`}>{page.name}</a>
                      )
                    })}
                    
                </div>
            </div>
            <div className={styles.body} >
                <div className={styles.social}>
                    <a href={''}><img src={'/images/github.svg'} /> </a>
                    <a href={''}><img src={'/images/linkedin.svg'} /></a>
                    <a href={''}><img src={'/images/twitter.svg'} /></a>
                    <a href={''}><img src={'/images/youtube.svg'} /></a>
                </div>
                <div className={styles.infoBox} >
                    <div className={styles.info} >
                        <div className={styles.infotext} >
                            <div className={styles.name} >
                                <span className={styles.title} >John Smith</span>
                                <img src={'/assets/hand.svg'} />
                            </div>
                            <div className={styles.sub}>
                                <div className={styles.horizontal} ></div>
                                <span className={styles.subtitle} >Data Scientist</span>
                            </div>
                            <span className={styles.paragraph}>I'm creative designer based in New York and I'm very passionate and dedicated to my work</span>
                            <button>
                              <span>Say Hello</span>
                              <img src={'/assets/send2.png'} />
                            </button>
                        </div>
                        <div>
                            <figure  >
                                <img className={styles.imageAbout} src={'/assets/about.jpg'} />
                            </figure>
                        </div>
                    </div>
                    
                </div>
                <div></div>
                <div className={styles.scrollDown} >
                      <img className={styles.imageDown1} src={'/assets/scroll.svg'}/>
                      <span>Scroll down</span>
                      <img className={styles.imageDown2} src={'/assets/arrow-down.png'}/>
                </div>
                

            </div>
        </div>
        <div id="About">
            
        </div>
        <div id="Services">
            
        </div>
        <div id="Portfolio" className={styles.portfolio} >
            <div className={styles.titles} >
                  <span className={styles.title} >Portfolio</span>
                  <span className={styles.subtitle}>Most recent work</span>
            </div>

            <div className={styles.btns} >
                {buttons.map(button=>{
                  return(
                    <button onClick={()=>click(button.name)} >{button.name}</button>
                  )
                })}
            </div>
            <div className={styles.projects}>
                {
                   newprojects.map(newproject=>{
                      return(
                          <Project key={newproject.id} image={`/assets/work${newproject.id}.jpg`} nameProject={newproject.name} />
                      )
                   })
                }
            </div>
        </div>
        
        <div id="Contact" className={styles.contact} >
            <div className={styles.titles} >
                  <span className={styles.title} >Contact Me</span>
                  <span className={styles.subtitle}>Get in touch</span>
            </div>
            <div className={styles.contactBody} >
                  
                 <div className={styles.writeMe} >
                      <span className={styles.subsubtitle} >Talk to me</span>
                      {contacts.map(contact=>{
                          return(
                            <Contact key={Date()} image={contact.image} text1={contact.name} text2={contact.user} />
                          )
                        })}
                 </div>
                 <div className={styles.writeMe} >
                      <span className={styles.subsubtitle} >Write me your project</span>
                      <div className={styles.box}  >
                        {infocontacts.map(infocontact=>{
                                return(
                                  <Info key={infocontact.id} text1={infocontact.name} text2={infocontact.placeholder} min={infocontact.min} />
                                )
                            })}
                        <button>
                            <span>Send message</span>
                            <img src={'/assets/send2.png'} />
                      </button>
                      </div>
                 </div>
                 
                 
            </div>
            

        </div>
    </main>
  );
}
