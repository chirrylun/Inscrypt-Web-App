import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'

interface AccordionProps {
  items: {
    id: string
    title: React.ReactNode
    content: React.ReactNode
  }[]
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  return (
    <div className="space-y-6">
      {items.map(item => (
        <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <button
            className="flex justify-between items-center w-full px-6 py-4 text-left bg-gradient-to-r from-blue-500 to-blue-600 text-white"
            onClick={() => toggleItem(item.id)}
          >
            <span className="text-xl font-semibold">{item.title}</span>
            <motion.div
              animate={{ rotate: openItems.includes(item.id) ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaChevronDown className="w-5 h-5" />
            </motion.div>
          </button>
          <AnimatePresence>
            {openItems.includes(item.id) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-6 py-4">{item.content}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}