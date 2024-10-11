'use client'

import { useEffect, useRef } from 'react'
import Image from "next/image"
import Link from "next/link"
import { motion, useAnimation, AnimationControls } from 'framer-motion'
import { CiCircleChevRight } from "react-icons/ci"
import { IconType } from "react-icons";
import { FaLightbulb, FaRocket, FaUsers } from 'react-icons/fa'
import { Service } from '../types/Service'
import { services } from '../data/services'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const languages = [
  { name: "Javascript", image: "/images/js_5968292.png" },
  { name: "HTML", image: "/images/html-5_5968267.png" },
  { name: "React", image: "/images/physics_753244.png" },
  { name: "Figma", image: "/images/figma_5968705.png" },
  { name: "Wordpress", image: "/images/social_16021409.png" },
  { name: "Ai Proficiency", image: "/images/neural_11772943.png" },
]

interface CreativeContent {
  icon: IconType;
  title: string;
  description: string;
}

const creativeContent: CreativeContent[] = [
  { icon: FaLightbulb, title: 'Innovative Solutions', description: 'We bring fresh ideas to every project' },
  { icon: FaRocket, title: 'Rapid Development', description: 'Fast-paced, efficient project delivery' },
  { icon: FaUsers, title: 'Client-Centric Approach', description: 'Your vision, our expertise' },
]

export default function Services() {
  const servicesRef = useRef<HTMLDivElement>(null)
  const seamlessRef = useRef<HTMLDivElement>(null)
  const controls: AnimationControls = useAnimation()
  const { ref: intersectionRef, inView } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            entry.target.classList.add('animate-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (servicesRef.current) {
      Array.from(servicesRef.current.children).forEach((child) => {
        if (child instanceof HTMLElement) {
          observer.observe(child)
        }
      })
    }

    if (seamlessRef.current) {
      observer.observe(seamlessRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <div className="font-sans bg-gradient-to-b from-gray-50 to-white py-20 relative overflow-hidden">
      {/* ... (rest of the JSX remains unchanged) ... */}
    </div>
  )
}