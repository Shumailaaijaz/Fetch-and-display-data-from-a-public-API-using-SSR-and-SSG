"use client"

import Link from "next/link"
import { useAuth } from "@/app/context/AuthContext"

const Header = () => {
  const { user, logout } = useAuth()

  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          My Portfolio
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/posts" className="hover:text-gray-300">
              Posts (SSR)
            </Link>
          </li>
          <li>
            <Link href="/users" className="hover:text-gray-300">
              Users (SSG)
            </Link>
          </li>
          {user ? (
            <li>
              <button onClick={logout} className="hover:text-gray-300">
                Logout
              </button>
            </li>
          ) : (
            <li>
              <Link href="/login" className="hover:text-gray-300">
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header

