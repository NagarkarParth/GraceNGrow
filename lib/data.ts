import {Camera,Palette,Clapperboard,ChartNoAxesCombined,PanelsTopLeft} from "lucide-react";
export const links=[["Home","/"],["About","/about"],["Services","/services"],["Portfolio","/portfolio"],["Clients","/clients"],["Contact","/contact"]];
export const contact={phone:"917276151522",email:"grace.n.grow01@gmail.com",instagram:"https://www.instagram.com/grace_n_grow/",location:"India",message:"Hi Grace N Grow Marketing! I'm interested in your marketing services. I would like to discuss my project."};
export const wa=`https://wa.me/${contact.phone}?text=${encodeURIComponent(contact.message)}`;export const mail=`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contact.email)}&su=${encodeURIComponent("Marketing Inquiry")}&body=${encodeURIComponent(contact.message)}`;
export const services=[{title:"Social Media Marketing",desc:"Build a community your audience wants to be part of.",icon:Camera,image:"photo-1522202176988-66273c2fd55f",items:["Instagram management","Content planning","Social media strategy","Audience engagement"]},{title:"Branding & Design",desc:"Create a distinct identity people remember and trust.",icon:Palette,image:"photo-1541701494587-cb58502866ab",items:["Logo design","Brand identity","Posters and banners","Social media creatives"]},{title:"Video Production",desc:"Turn your story into motion that earns attention.",icon:Clapperboard,image:"photo-1574717024653-61fd2cf4d44d",items:["Reels editing","Promotional videos","Product videos","Event videos"]},{title:"Performance Marketing",desc:"Reach the right people with purposeful campaigns.",icon:ChartNoAxesCombined,image:"photo-1551288049-bebda4e38f71",items:["Meta advertising","Google advertising","Lead generation","SEO optimization","Campaign optimization"]},{title:"Website Development",desc:"Give your business a digital home made to convert.",icon:PanelsTopLeft,image:"photo-1681408969415-34cb37122508",items:["Business websites","Landing pages","Portfolio websites"]},{title:"Content Creation",desc:"Make useful, original content with a clear point of view.",icon:Camera,image:"photo-1516035069371-29a1b244cc32",items:["Photography","Creative content","Marketing campaigns","Content strategy"]}];
export const images=["photo-1445116572660-236099ec97a0","photo-1608248543803-ba4f8c70ae0b","photo-1490312278390-ab64016e0aa9","photo-1441986300917-64674bd600d8","photo-1542291026-7eec264c27ff","photo-1547592180-85f173990554","photo-1494438639946-1ebd1d20bf85","photo-1483985988355-763728e1935b"];
export const projects=[["A considered café identity","Branding","A warm visual direction for an independent neighbourhood café."],["Everyday ritual, reimagined","Social Media","A social-first content system for a modern self-care brand."],["Objects with a story","Campaigns","Product storytelling built around material, craft and detail."],["A place to pause","Video Production","A short-form visual treatment for a hospitality launch."],["A more human digital shop","Websites","An e-commerce art direction concept with product at its heart."],["Good food, shared","Social Media","Editorial food imagery and a flexible campaign direction."],["Form meets function","Branding","A minimal identity exploration for a contemporary design studio."],["The weekend edit","Video Production","A visual moodboard for a seasonal fashion story."]];
export type ClientEntry={name:string;logo?:string};
export const clients:ClientEntry[]=[
{name:"Bhujbal Bandhu",logo:"/images/clients/bhujbal-bandhu-updated.png"},{name:"Ashwattha Architects",logo:"/images/clients/ashwattha-architects.png"},{name:"Gopal Foods",logo:"/images/clients/gopal-foods.png"},
{name:"Ashwattha Ethnics",logo:"/images/clients/ashwattha-ethnics.png"},{name:"Shreeram Textiles",logo:"/images/clients/shreeram-textiles.png"},{name:"Westhill Hospital",logo:"/images/clients/westhill-hospital.png"},

];export const img=(id:string,w=1100)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=82`;




















