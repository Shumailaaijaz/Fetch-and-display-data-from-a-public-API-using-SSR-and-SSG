"use client"
import Image from "next/image"

export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
      <div className="w-64 h-64 relative">
        <Image
          src="/hero-image.png"
          alt="Profile picture"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="mb-4">
          Hello! I'm a web developer with a passion for creating beautiful and functional websites. I specialize in
          front-end development using technologies like React, Next.js, and Tailwind CSS.
        </p>
        <p className="mb-4">
          I am new in the field, I've worked on a variety of projects ranging from small
          business websites to large-scale web applications. I'm always eager to learn new technologies and improve my
          skills.
        </p>
        <p>
          When I'm not coding, you can find me hiking in the mountains, reading sci-fi novels, or experimenting with new
          recipes in the kitchen.
        </p>
      </div>
    </div>
  )
}

