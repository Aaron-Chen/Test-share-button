"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"

export default function ShareButton3D() {
  const [isHovered, setIsHovered] = useState(false)

  // Common border radius for consistency
  const borderRadius = "24px"

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div
        className="relative w-64 h-24 perspective-500 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          borderRadius,
          // Enhanced blur effect for 3D creased appearance
          boxShadow: "0 4px 20px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.05)",
          background: "white",
        }}
      >
        {/* Share button - slides completely out of view */}
        <div
          className={`absolute inset-x-0 mx-auto w-56 h-16 top-4 flex items-center justify-center bg-white transition-transform duration-300 ease-out z-10`}
          style={{
            borderRadius,
            // Enhanced white drop shadow on top-left, outside the button
            boxShadow:
              "2px 2px 8px rgba(0,0,0,0.1), 4px 4px 12px rgba(0,0,0,0.05), -8px -8px 15px rgba(255,255,255,1), inset 1px 1px 3px rgba(255,255,255,0.8)",
            border: "1px solid rgba(230,230,230,0.3)", // Barely visible border
            transform: isHovered ? "translateY(-70px)" : "translateY(0)",
          }}
        >
          <span
            className="flex items-center justify-center"
            style={{
              fontSize: "18px",
              color: "#475569", // Slate-600 - closer to the blue-gray in the image
              fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontWeight: "500",
              letterSpacing: "0.3px",
            }}
          >
            Share
          </span>
        </div>

        {/* Social media icons - contained within the outer frame */}
        <div
          className="absolute inset-0 flex items-center justify-center z-0 transition-transform duration-300"
          style={{
            // Common transform origin for all icons
            transformOrigin: "center top",
          }}
        >
          {/* This wrapper div will handle the unified scaling and z-translation for all icons */}
          <div
            className="flex items-center justify-between w-56 px-8 transition-all duration-300"
            style={{
              // Apply the 3D transform to the entire group
              transform: isHovered ? "scale(1.2) translateZ(30px)" : "scale(0.7) translateZ(0px)",
            }}
          >
            {/* WhatsApp icon */}
            <SocialIcon href="#">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.5 3.5C18.25 1.25 15.2 0 12 0C5.4 0 0 5.4 0 12C0 14.1 0.6 16.1 1.7 17.9L0 24L6.3 22.3C8 23.3 10 23.9 12 23.9C18.6 23.9 24 18.5 24 11.9C24 8.7 22.75 5.75 20.5 3.5ZM12 21.9C10.2 21.9 8.5 21.3 7 20.4L6.7 20.2L2.9 21.2L3.9 17.5L3.7 17.2C2.7 15.6 2.1 13.8 2.1 12C2.1 6.5 6.5 2.1 12 2.1C14.7 2.1 17.2 3.1 19.1 5C21 6.9 22 9.4 22 12.1C22 17.5 17.5 21.9 12 21.9ZM17.4 14.3C17.1 14.2 15.6 13.4 15.3 13.4C15 13.3 14.8 13.3 14.6 13.6C14.4 13.9 13.8 14.6 13.6 14.8C13.4 15 13.2 15 12.9 14.9C12.6 14.8 11.6 14.5 10.5 13.5C9.6 12.7 9 11.7 8.8 11.4C8.6 11.1 8.8 10.9 9 10.7C9.2 10.5 9.4 10.3 9.5 10.1C9.6 9.9 9.7 9.7 9.6 9.5C9.5 9.3 9 7.8 8.8 7.2C8.6 6.6 8.3 6.7 8.1 6.7C7.9 6.7 7.7 6.7 7.5 6.7C7.3 6.7 6.9 6.8 6.6 7.1C6.3 7.4 5.5 8.2 5.5 9.7C5.5 11.2 6.6 12.7 6.7 12.9C6.8 13.1 9 16.3 12.2 17.6C13 17.9 13.6 18.1 14.1 18.2C14.8 18.4 15.5 18.4 16 18.3C16.6 18.2 17.8 17.5 18 16.8C18.2 16.1 18.2 15.5 18.1 15.4C18 15.3 17.8 15.2 17.5 15.1L17.4 14.3Z"
                  fill="url(#whatsapp-gradient)"
                />
                <defs>
                  <linearGradient id="whatsapp-gradient" x1="12" y1="0" x2="12" y2="24" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#60a5fa" />
                    <stop offset="1" stopColor="#2563eb" />
                  </linearGradient>
                </defs>
              </svg>
            </SocialIcon>

            {/* Instagram icon */}
            <SocialIcon href="#">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07-3.2 0-3.58-.01-4.85-.07-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85 0-3.2.01-3.58.07-4.85.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.78.3-1.44.71-2.1 1.37-.66.66-1.07 1.32-1.37 2.1-.3.76-.5 1.64-.56 2.91C.05 8.33.04 8.74.04 12c0 3.26.01 3.67.07 4.95.06 1.27.26 2.15.56 2.91.3.78.71 1.44 1.37 2.1.66.66 1.32 1.07 2.1 1.37.76.3 1.64.5 2.91.56 1.28.06 1.69.07 4.95.07 3.26 0 3.67-.01 4.95-.07 1.27-.06 2.15-.26 2.91-.56.78-.3 1.44-.71 2.1-1.37.66-.66 1.07-1.32 1.37-2.1.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95 0-3.26-.01-3.67-.07-4.95-.06-1.27-.26-2.15-.56-2.91-.3-.78-.71-1.44-1.37-2.1-.66-.66-1.32-1.07-2.1-1.37-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84c-3.4 0-6.16 2.76-6.16 6.16 0 3.4 2.76 6.16 6.16 6.16 3.4 0 6.16-2.76 6.16-6.16 0-3.4-2.76-6.16-6.16-6.16zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.84-10.4c0 .79-.64 1.44-1.44 1.44-.79 0-1.44-.65-1.44-1.44 0-.79.65-1.44 1.44-1.44.8 0 1.44.65 1.44 1.44z"
                  fill="url(#instagram-gradient)"
                />
                <defs>
                  <linearGradient id="instagram-gradient" x1="12" y1="0" x2="12" y2="24" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#60a5fa" />
                    <stop offset="1" stopColor="#2563eb" />
                  </linearGradient>
                </defs>
              </svg>
            </SocialIcon>

            {/* X (Twitter) icon */}
            <SocialIcon href="#">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                  fill="url(#twitter-gradient)"
                />
                <defs>
                  <linearGradient
                    id="twitter-gradient"
                    x1="12"
                    y1="2.25"
                    x2="12"
                    y2="21.75"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#60a5fa" />
                    <stop offset="1" stopColor="#2563eb" />
                  </linearGradient>
                </defs>
              </svg>
            </SocialIcon>

            {/* Facebook icon */}
            <SocialIcon href="#">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                  fill="url(#facebook-gradient)"
                />
                <defs>
                  <linearGradient
                    id="facebook-gradient"
                    x1="12"
                    y1="0"
                    x2="12"
                    y2="23.8542"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#60a5fa" />
                    <stop offset="1" stopColor="#2563eb" />
                  </linearGradient>
                </defs>
              </svg>
            </SocialIcon>
          </div>
        </div>
      </div>
    </div>
  )
}

interface SocialIconProps {
  href: string
  children: React.ReactNode
}

function SocialIcon({ href, children }: SocialIconProps) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center transition-all duration-300"
      style={{
        filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
      }}
    >
      <div
        className="transition-all duration-300"
        style={{
          // Light effect from above
          filter: "drop-shadow(0 -2px 2px rgba(255,255,255,0.8)) drop-shadow(0 4px 4px rgba(0,0,0,0.2))",
        }}
      >
        {children}
      </div>
    </Link>
  )
}
