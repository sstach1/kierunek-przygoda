import type {Metadata} from "next";import "./globals.css";
export const metadata:Metadata={title:"Kierunek Przygoda | E-booki na dobry wyjazd",description:"Odkrywaj Polskę we własnym tempie. E-booki turystyczne, inspiracje i gotowe plany wycieczek."};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="pl"><body>{children}</body></html>}
