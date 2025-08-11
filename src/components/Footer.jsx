import React from 'react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-300 mb-4 md:mb-0">
            © {currentYear} getdegree.online. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link 
              href="/privacy-policy" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms-conditions" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer