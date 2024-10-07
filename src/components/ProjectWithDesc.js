
import { useEffect, useState } from "react"
import styled from "styled-components"
 
const ProjectWithDesc = ({project,selected}) =>{
    const [anim,setAnim] = useState(false);
    //<LoaderImg  src={_pngUrl} style={anim? {opacity:0}:{}}
    ///>
  
    const pngUrl = require("../assets/"+project.src); 
    const vidUrl = require("../assets/"+project.vid); 



 
    return (  

        
        <BigProjectDiv className={selected? "mouse-over":""}
         > 

                <ProjectTitle> 
                {project.name}   
                </ProjectTitle>

                {project.special != "" ?
                    
                    <ProjectSpecial>
                         {project.special}
                    </ProjectSpecial> 
                    
                    :<></>}
                <ProjectDiv >
                        <LoaderDiv style={{backgroundImage:"url("+pngUrl+")"}} > 

                            {selected? 
                                <LoaderVideo preload="metadata" loop muted autoPlay={selected? "true":""} className={selected? "":"hidden"}>
                                        <source src={vidUrl} type="video/mp4" />
                                </LoaderVideo>       
                                :
                                <LoaderVideo loop muted autoPlay className={selected? "":"hidden"}>
                                    <source src={vidUrl} type="video/mp4" />
                                </LoaderVideo>
                            } 
                        </LoaderDiv>
                         
                    <ProjectDesc > 
                        <ProjectPadding>
                            <ProjectShortDesc>
                                {project.desc} 
                            </ProjectShortDesc>

                            <ProjectFeatures dangerouslySetInnerHTML={{__html:project.longDesc}}> 

                            </ProjectFeatures>
                        </ProjectPadding>
                    
                    </ProjectDesc> 
                    
                </ProjectDiv> 
         </BigProjectDiv>
            
    )
}
 
const GoodOrange = "rgb(255,110,0)";

const BigProjectDiv = styled.div`    
 
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
    &.mouse-over{ 
        scale: 1.08;
        z-index: 99;
         background-color: #444444; 
    } 
    &:hover{
        scale: 1.10;
        filter: drop-shadow(-0.25rem 0 0 ${GoodOrange}) drop-shadow(0 0.25rem 0 ${GoodOrange}) drop-shadow(0.25rem -0.25rem 0 ${GoodOrange});
    }
    
`


const ProjectDiv = styled.div` 
min-width: 100%;
text-align: center;
vertical-align: top;
font-size: 2.5rem;  
display: flex;   
justify-content: space-between;
align-items: center;
` 

const ProjectTitle = styled.div`
position: absolute;
text-align: center;  
top:0px;
font-family: superstar;
text-align: center;   
user-select: none;
font-size: 4rem;
margin-top:-2.5rem;  
filter: drop-shadow(-0.15rem 0 0 black) drop-shadow(0 0.15rem 0 black) drop-shadow(0.15rem -0.25rem 0 black) 
drop-shadow(-0.35rem 0 0 rgba(0,0,0,0.35)) drop-shadow(0 0.35rem 0 rgba(0,0,0,0.35)) drop-shadow(0.1rem 0.15rem 0 rgba(0,0,0,0.35));

@media (width > 1200px)
{
    font-size: 3rem;
    margin-top:-2rem;  
}

 
`

const ProjectSpecial = styled.div`
position: absolute;
color:${GoodOrange};
text-align: left;  
bottom:0px;
left:1rem;
font-family: superstar;
text-align: center;   
user-select: none;
font-size: 2.8rem;  
    filter: drop-shadow(-0.15rem 0 0 white) drop-shadow(0 0.15rem 0 white) drop-shadow(0.15rem -0.25rem 0 white) drop-shadow(-0.15rem 0 0 black) drop-shadow(0 0.15rem 0 black) drop-shadow(0.15rem -0.25rem 0 black); 

`

const ProjectPadding = styled.div` 
margin:0rem 0rem 1.5rem 2rem;
border-radius: 5%;
 
`

const ProjectDesc = styled.div` 
font-family: 'roboto'; 
height: 17.5rem;
min-width: calc((50%) - (0.5rem) - (2px)); 
padding:0.25rem;  
border-radius: 20px;
max-width: calc((50%) - (0.5rem));  
`

const ProjectShortDesc = styled.div`
    width:100%;
    color:${GoodOrange};
    font-family: 'roboto-bold';  
    margin-bottom:0.5rem;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top:-0.6rem;
    @media (width > 1200px)
    {
        margin-top:1.5rem;
        font-size: 1.9rem;
    }
`
const ProjectFeatures = styled.div` 
    text-align: left;    
    font-size:1.7rem;
    margin-right:0.75rem;
    @media (width > 1200px)
    {
        font-size:1.3rem;
    }

&::marker {
        color:${GoodOrange};
    }
& p{
    margin-bottom: 0.25rem;
}
 
`
 


const LoaderDiv = styled.div`    
margin:0;
border:0;
padding:0;   
background-size: cover;
border-top-left-radius: 6%;
border-end-start-radius: 6%;
box-shadow: rgba(0, 0, 0,0.25) 5px 0px, rgba(0, 0, 0,0.20) 10px 0px, rgba(0, 0, 0,0.15) 15px 0px, rgba(0, 0, 0,0.10) 20px 0px, rgba(0, 0, 0,0.05) 25px 0px;

min-width:50%;

min-height:22rem;
@media (width > 1200px)
{ 
    max-height: 18rem;
}
` 


const LoaderVideo = styled.video`   
border-top-left-radius: 6%;
border-end-start-radius: 6%;   
object-fit:cover;

&.hidden{
    opacity: 0;
}
min-width:50%; 
max-width:100%;
@media (width > 1200px)
{ 
    max-height: 18rem;
}
` 


export default ProjectWithDesc

