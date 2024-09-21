import styled from "styled-components"
import arrowUrl from "../assets/arrow.png"
import portraitUrl from "../assets/portrait.png"
import reactUrl from "../assets/logo-react.png"
import typeScrUrl from "../assets/logo-typescript.png"
import javaScrUrl from "../assets/logo-javascript.png"
import nodeUrl from "../assets/logo-node.png"
import htmlUrl from "../assets/logo-html5.png"
import mongoUrl from "../assets/logo-mongo.png"
import gitUrl from "../assets/logo-git.png"
import canvasUrl from "../assets/logo-canvas.png"
import CoolPopup from "./CoolPopup"



import { useEffect, useState, useRef } from "react"
import { projects } from "../data/dataProjects"

import ProjectWithDesc from "./ProjectWithDesc"

const About = () => {

    const [popup,setPopup] = useState([false,0,0,<></>]); 
    const [anim,setAnim] = useState(false);

    const imgRef = useRef();
     
    const popupHandler = (elemento,target) =>{   
        const _pos = target.getBoundingClientRect(); 
        setPopup([true,`${Math.floor(_pos.left+_pos.width/2)}px`,`${Math.floor(_pos.bottom+15+ window.scrollY)}px`,elemento]);
    }

    const popupOut = () =>{
        setPopup([false,0,0,<></>]);
    }

    useEffect(
        ()=>{setAnim(true);
        setTimeout(()=>{
            setAnim(false);
        },2000)
        }
        ,[])

    return (
 
        <AboutDiv> 
                   
                        <AboutMainTitle>ABOUT</AboutMainTitle> 
                        <AboutFlexDiv>
                            <AboutText>
                                <AboutParagraph> 
                                    Renaud is a game designer with years of experience making games.
                                 </AboutParagraph>
                                 <AboutParagraph>
                                Battling the concept of randomness, especially "random results", he avoids dice rolls and % critical hits. Yet despite it all he can't help but go back to fun group boardgames.
                                </AboutParagraph>
                                <AboutParagraph>
                                He likes to play old fighting games with robots in them. Those usually aren't random.
                                </AboutParagraph>
                            </AboutText>
                            <AboutPortrait/>   
                        </AboutFlexDiv>
                          
            <CoolPopup popup={popup} />
        </AboutDiv> 
    )
}  

/*          one day we will fix The Arrow

         
                <OneBigDivDeco {...(anim ?{className:"anim"}:{})}>
                     <AbsoluteRelative> 
                         <ArrowDecoSide/> 
                         <ArrowDecoSecond/>
                        <ArrowDecoSideTwo/>
                        <ArrowDeco> 
                            <ArrowImg/>
                         </ArrowDeco>
                    </AbsoluteRelative> 
                 </OneBigDivDeco>

*/

//styling starts----------------------------------------
const GoodOrange = "rgb(255,110,0)"
 


  
const AboutDiv = styled.div`  
font-size: 1.6rem;
width: 100%;  
max-width: 1400px; 
margin-top:2rem;  
color:white; 
min-height: calc(100vh - 60px - 4.1rem);
`
const AbsoluteRelative = styled.div`
z-index:40;
position: sticky;
max-width:1px;
max-height: 1px;
`

const OneBigDivDeco = styled.div`
pointer-events: none;
position: absolute; 
height:0px; 
opacity: 0; 
transition: 2000ms opacity ease-in-out;
filter: drop-shadow(4px 0 0 black) 
        drop-shadow(0 4px 0 black)
        drop-shadow(-4px 0 0 black)
        drop-shadow(0 -4px 0 black); 
&.anim{
    opacity: 1;
}
z-index:50;
`

 
const ArrowDecoSide = styled.div`

z-index:40;
position: relative;
left:11.6rem;
top:-4.6rem;
width: 1.5em;
height: 3rem;
background-color: white;
`

const ArrowDecoSecond = styled.div`
z-index:40;
    position: relative;
    left:11.6rem;
    top:-4.6rem;
    width:42rem;
    height:1.5rem;
    background-color: white;  

`
const ArrowDecoSideTwo = styled.div`
z-index:40;

position: relative;
left:53.6rem;
top:-6.1rem;
width: 1.5rem;
height: 9rem;
background-color: white;
`


const ArrowDeco = styled.div`
z-index:40;
    position: relative;
    left: 53.6rem;
    top: -6.1rem;
    width:7.5rem;
    height:1.5rem;
    background-color: white; 

`
const ArrowImg = styled.div` 
z-index:40;
background-image: url(${arrowUrl});
background-size:contain;
background-repeat: no-repeat;
image-rendering: pixelated; 
min-width: 4rem;
max-width: 4rem;
min-height: 4rem;
max-width: 4rem;
position: relative;
 top: -1.1rem;
 left:92%; 
`

const AboutFlexDiv = styled.div`
display: flex;
gap:2rem;
flex-direction: column;

@media only screen and (min-device-width: 1000px) { 
    flex-direction: row;
}

`

const AboutText = styled.div`
margin-top:1rem;

`

const AboutParagraph = styled.div`
margin-bottom: 1rem; 
`

const AboutPortrait = styled.img`  
    float:right;
    position: sticky;
    margin-top: 0.5rem;
    background-image: url(${portraitUrl});
    background-size:contain;
    background-repeat: no-repeat;  
    border-radius: 10px; 
    box-shadow: rgba(255, 60, 33,0.5) 0.5rem 0.5rem, rgba(255, 60, 33,0.4) 1rem 1rem, rgba(255, 60, 33,0.3) 1.5rem 1.5rem, rgba(255, 60, 33,0.2) 2rem 2rem, rgba(255, 60, 33,0.1) 2.5rem 2.5rem,
    rgba(255, 60, 33,0.5) -0.2rem -0.2rem, rgba(255, 60, 33,0.4) -0.4rem -0.4rem, rgba(255, 60, 33,0.3) -0.6rem -0.6rem, rgba(255, 60, 33,0.2) -0.8rem -0.8rem, rgba(255, 60, 33,0.1) -1.0rem -1.0rem;
     
        min-width: 30rem;
        min-height:45rem;
        max-width: 30rem;
        margin-left:auto;
        margin-right:auto;
    @media only screen and (min-device-width: 1000px) {  
        min-width: 20rem;
        min-height:30rem;
    } 

`

const AboutMainTitle = styled.div` 
width: 100%;
font-family:  zero4B, 'Courier New', Courier, monospace; 
border-bottom:0.4rem solid white ;
color:white;
font-size:4rem; 
margin-bottom: 0.75rem;
filter: drop-shadow(0.1rem 0rem 0 ${GoodOrange}) drop-shadow(0.25rem 0.25rem 0 ${GoodOrange});
`  


export default About