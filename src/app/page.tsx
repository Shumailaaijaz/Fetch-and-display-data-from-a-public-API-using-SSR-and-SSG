import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-[100vh] bg-[#b43a85] dark:bg-[#f3aece] flex flex-raw gap-8 items-center justify-center">
     
      <Button size={"lg"} variant={"outline"} className="flex shadow-md shadow-blue-500 dark:shadow-slate-100 hover:scale-105 rounded-3xl">
        <Link href="/coincsr" >
        <strong>CSR</strong>
        </Link>
      </Button>
      <Button size={"lg"} variant={"outline"} className="flex shadow-md shadow-blue-500 dark:shadow-slate-100 hover:scale-105 rounded-3xl ">
         <Link href="/coinssr" >
         <strong>SSR</strong>
        </Link>
      </Button>
      <Button size={"lg"} variant={"outline"} className="flex shadow-md shadow-blue-500 dark:shadow-slate-100 hover:scale-105 rounded-3xl">
        <Link href="/coin-ssg" >
        <strong>SSG</strong>
        </Link> 
      </Button>
      <Button size={"lg"} variant={"outline"} className="flex shadow-md shadow-blue-500 dark:shadow-slate-100 hover:scale-105 rounded-3xl">
         <Link href="/coin-isr" >
         <strong>ISR</strong>
        </Link>
      </Button>
      
    </div>
      );
}