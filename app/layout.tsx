import type {Metadata} from "next";import "./globals.css";import "lenis/dist/lenis.css";import {Navbar,Footer,WhatsAppFloat} from "@/components/shell";import {SmoothScroll} from "@/components/smooth-scroll";import {PageTransition} from "@/components/page-transition";
export const metadata:Metadata={metadataBase:new URL("https://gracengrow.in"),title:{default:"Grace N Grow Marketing | Ideas that move brands forward",template:"%s | Grace N Grow Marketing"},description:"Creative marketing solutions for thoughtful brands. Strategy, branding, content and digital experiences designed to help businesses grow.",openGraph:{title:"Grace N Grow Marketing",description:"We build brands. We create impact.",type:"website",images:["/images/logo.webp"]}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><SmoothScroll><Navbar/><main><PageTransition>{children}</PageTransition></main><Footer/><WhatsAppFloat/></SmoothScroll></body></html>}


