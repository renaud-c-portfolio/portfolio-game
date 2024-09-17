
import { useEffect, useState } from "react"
import styled from "styled-components"
 
const ProjectWithDesc = ({project}) =>{
    const [anim,setAnim] = useState(false);
     
  
    const _pngUrl = require("../assets/"+project.src);
    const _gifUrl = require("../assets/"+project.gif); 

    return (  

        
        <BigProjectDiv id="bigId" onMouseOver={()=>{
           setAnim(true); }}
           onMouseOut={()=>{
            setAnim(false); }}
         > 

                <ProjectTitle> {project.name} </ProjectTitle>

                <ProjectDiv >
                        <LoaderImg 
                        src={anim? _gifUrl:_pngUrl}
                        /> 
                    <ProjectDesc >
                        {project.desc} 

                        <ProjectTechs>
                        {project.tech.map((tech,techIndex)=>{

                                let dash = "";
                                if (techIndex > 0) {dash = " - ";}
                                return(
                                     <>{dash}{tech}</>
                                )
                                })}
                            
                        </ProjectTechs>

                        <ProjectFeatures>
                            <ul>
                             {project.features.map((feature,featureIndex) => {
                                            return(
                                                <li>{feature}</li>
                                            )
                                        })}
                            </ul>
                        </ProjectFeatures>
                    
                    </ProjectDesc> 
                </ProjectDiv> 

         </BigProjectDiv>
            
    )
}
// {...(anim ?{src:{_pngUrl}}:{src:{_gifUrl}} )}
//<LoaderImg {...anim ?{src:{_pngUrl}}:{src:{_gifUrl}}} />
//<Loader  {...(anim ?{src:{...{"backgroundImage":`url(${_gifUrl})`}}}:{src:{...{"backgroundImage":`url(${_pngUrl})`}}  }  ) }   />

const GoodOrange = "rgb(255,110,0)";

const BigProjectDiv = styled.div`    
    cursor: pointer;
 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    pointer-events: all;
    background-color: #333333;
    border-radius: 1.2rem;
    position: relative;    
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 1rem;
    transition: 200ms ease-out; 
    border: 2px white solid;
    z-index: 1; 
    margin-bottom:1rem; 
    width: 100%;  
    max-width: 88vw; 
    
    &:hover{ 
        scale: 1.10;
        z-index: 99;
         background-color: #444444; 
        filter: drop-shadow(-0.25rem 0 0 ${GoodOrange}) drop-shadow(0 0.25rem 0 ${GoodOrange}) drop-shadow(0.25rem -0.25rem 0 ${GoodOrange});
    } 
    
`

const ProjectTitle = styled.div`
position: absolute;
text-align: center;
width: 100%; 
top:0px;
font-family: superstar;
font-size: 3rem;
text-align: center;   
margin-top:-2rem; 
user-select: none;
filter: drop-shadow(-0.15rem 0 0 black) drop-shadow(0 0.15rem 0 black) drop-shadow(0.15rem -0.25rem 0 black);
`

const ProjectDesc = styled.div` 
background: rgba(0, 0, 0,0.20);
font-family: tinos;
display: inline-block; 
font-size: 1.2rem;
vertical-align: top;    
min-height:100%;
min-width: calc((50%) - (0.5rem) - (2px)); 
padding:0.25rem; 
padding-top:1.5rem;
border-radius: 20px;
max-width: calc((50%) - (0.5rem)); 
`
const ProjectTechs = styled.div`
font-size: 1rem;
color:${GoodOrange};
font-family: sans-serif;
margin-top:0.3rem;
margin-bottom:0.3rem;
font-weight: bold;
`
const ProjectFeatures = styled.div`
    margin-left:1.5rem;
    font-size:1.2rem;
    text-align: left;
&li{ 
}

&::marker {
        color:${GoodOrange};
    }
 
`
 
const ProjectDiv = styled.div` 
display: inline-block;
text-align: center;
vertical-align: top;
font-size: 2.5rem; 
border-radius: 10px;   
display: flex; 
`
const Loader = styled.div` 
background-repeat: no-repeat;
background-size: cover; 
min-width: 20rem;  
min-height: 20rem; 
`

const ProjectImgDiv = styled.div`
min-width: 50%;
min-height: 50%;
`

const LoaderImg = styled.img` 
min-width: 50%;
max-width: 50%; 
border-top-left-radius: 6%;
border-end-start-radius: 6%;
border-left: 2px white solid; 
box-shadow: rgba(0, 0, 0,0.25) 5px 0px, rgba(0, 0, 0,0.20) 10px 0px, rgba(0, 0, 0,0.15) 15px 0px, rgba(0, 0, 0,0.10) 20px 0px, rgba(0, 0, 0,0.05) 25px 0px;


`

export default ProjectWithDesc

