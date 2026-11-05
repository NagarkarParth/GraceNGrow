import {Camera,Palette,Clapperboard,ChartNoAxesCombined,PanelsTopLeft} from "lucide-react";
export const links=[["Home","/"],["About","/about"],["Services","/services"],["Portfolio","/portfolio"],["Clients","/clients"],["Contact","/contact"]];
export const contact={phone:"917276151522",email:"grace.n.grow01@gmail.com",instagram:"https://www.instagram.com/grace_n_grow/",location:"India",message:"Hi Grace N Grow Marketing! I'm interested in your marketing services. I would like to discuss my project."};
export const wa=`https://wa.me/${contact.phone}?text=${encodeURIComponent(contact.message)}`;export const mail=`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contact.email)}&su=${encodeURIComponent("Marketing Inquiry")}&body=${encodeURIComponent(contact.message)}`;
export const services=[{title:"Social Media Marketing",desc:"Build a community your audience wants to be part of.",icon:Camera,image:"photo-1522202176988-66273c2fd55f",items:["Instagram management","Content planning","Social media strategy","Audience engagement"]},{title:"Branding & Design",desc:"Create a distinct identity people remember and trust.",icon:Palette,image:"photo-1541701494587-cb58502866ab",items:["Logo design","Brand identity","Posters and banners","Social media creatives"]},{title:"Video Production",desc:"Turn your story into motion that earns attention.",icon:Clapperboard,image:"photo-1574717024653-61fd2cf4d44d",items:["Reels editing","Promotional videos","Product videos","Event videos"]},{title:"Performance Marketing",desc:"Reach the right people with purposeful campaigns.",icon:ChartNoAxesCombined,image:"photo-1551288049-bebda4e38f71",items:["Meta advertising","Google advertising","Lead generation","SEO optimization","Campaign optimization"]},{title:"Website Development",desc:"Give your business a digital home made to convert.",icon:PanelsTopLeft,image:"photo-1681408969415-34cb37122508",items:["Business websites","Landing pages","Portfolio websites"]},{title:"Content Creation",desc:"Make useful, original content with a clear point of view.",icon:Camera,image:"photo-1516035069371-29a1b244cc32",items:["Photography","Creative content","Marketing campaigns","Content strategy"]}];
export const images=["photo-1445116572660-236099ec97a0","photo-1490312278390-ab64016e0aa9","photo-1494438639946-1ebd1d20bf85"];
export const projects=[["A considered café identity","Branding","A warm visual direction for an independent neighbourhood café."],["Objects with a story","Campaigns","Product storytelling built around material, craft and detail."],["Form meets function","Branding","A minimal identity exploration for a contemporary design studio."],];
export type ClientEntry={name:string;logo?:string};
export const clients:ClientEntry[]=[
{name:"Westhill Hospital",logo:"/images/clients/westhill-hospital.png"},{name:"Bhujbal Bandhu",logo:"/images/clients/bhujbal-bandhu-updated.png"},{name:"Ashwattha Architects",logo:"/images/clients/ashwattha-architects.png"},
{name:"Gopal Foods",logo:"/images/clients/gopal-foods.png"},{name:"Ashwattha Ethnics",logo:"/images/clients/ashwattha-ethnics.png"},{name:"Shreeram Textiles",logo:"/images/clients/shreeram-textiles.png"},

];export const img=(id:string,w=1100)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=82`;




















export const darshanSareesGrowth={title:"Darshan Saree & Dresses",category:"Social Media",description:"Instagram account growth documented in the supplied before-and-after screenshots.",beforeFollowers:"2,020",afterFollowers:"24K",beforeImage:"/images/portfolio/darshan-sarees-before.jpeg",afterImage:"/images/portfolio/darshan-sarees-after.jpeg",instagram:"https://www.instagram.com/darshan_saree_dresses_/"};
export const pratibhaJewellersGrowth={title:"Shri Pratibha Jewellers",category:"Social Media",description:"Instagram followers grew from 992 to 19.8K, and sales increased by 70–80%.",beforeFollowers:"992",afterFollowers:"19.8K",salesGrowth:"70–80%",beforeImage:"/images/portfolio/shri-pratibha-before.jpeg",afterImage:"/images/portfolio/shri-pratibha-after.jpeg",instagram:"https://www.instagram.com/shri_pratibha_jewellers/"};
export const gopalFoodsGrowth={title:"Gopal Foods",category:"Social Media",description:"Built the Instagram page from scratch with fully organic content, helping increase sales.",gallery:[{src:"/images/portfolio/gopal-foods-profile.jpeg",label:"Instagram profile"},{src:"/images/portfolio/gopal-foods-reels.jpeg",label:"Reel views"}],reelViews:["1.1M","46.4K","43.4K","31.8K","29.9K","29.1K","23.8K","17.5K","16.7K"],instagram:"https://www.instagram.com/gopal_foodss/"};
export const videoReels=[{title:"Gopal Foods Must Try Shevpuri",category:"Video Production",description:"Watch the original Reel on Instagram.",externalUrl:"https://www.instagram.com/reel/DXt9D9oIfxL/",thumbnail:"/images/portfolio/gopal-foods-reel-01.jpeg"},{title:"Basket Chaat From Gopal Foods",category:"Video Production",description:"Watch the original Reel on Instagram.",externalUrl:"https://www.instagram.com/reel/DeHUHwEqW9t/",thumbnail:"/images/portfolio/gopal-foods-reel-02.jpeg"},{title:"Bhujbal Bandhu Mutton Thali",category:"Video Production",description:"Watch the original Reel on Instagram.",externalUrl:"https://www.instagram.com/reel/DSfXrZbE_hb/?vrfl=dG40NXp3eTFncWpt",thumbnail:"/images/portfolio/bhujbal-bandhu-reel-03.jpeg"},{title:"Shri Pratibha Jewellers Jodvi Offer",category:"Video Production",description:"Watch the original Reel on Instagram.",externalUrl:"https://www.instagram.com/reel/DYhmFIHsmTj/",thumbnail:"/images/portfolio/shri-pratibha-reel-04.jpeg"},{title:"Ashwattha Ethnics - Collection",category:"Video Production",description:"Watch the original Reel on Instagram.",externalUrl:"https://www.instagram.com/reel/De8YYqBoDeK/",thumbnail:"/images/portfolio/ashwattha-ethnics-reel-05.png"}];
