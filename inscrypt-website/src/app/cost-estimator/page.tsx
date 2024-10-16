'use client'
import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projectData } from '../data/projectData'
import { Checkbox } from '../components/Checkbox'
import { Card, CardContent, CardHeader, CardTitle } from '../components/Card'
import { IoReturnUpBackOutline } from "react-icons/io5";
import ExportPDFButton from '../components/ExportPDFButton'
import { Accordion } from '../components/Accordion'
import { Progress } from '../components/Progress'
import Link from 'next/link'
import { Button } from '../components/Button'
import { FaListUl, FaChartBar, FaInfoCircle, FaCheck, FaTimes } from 'react-icons/fa'

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(amount)
}

const ProjectEstimator: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set())
  const [viewMode, setViewMode] = useState<'list' | 'summary'>('list')
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

  const toggleItem = (itemId: string) => {
    setSelectedItems((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(itemId)) {
        newSet.delete(itemId)
      } else {
        newSet.add(itemId)
      }
      return newSet
    })
  }

  const toggleExpanded = (itemId: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(itemId)) {
        newSet.delete(itemId)
      } else {
        newSet.add(itemId)
      }
      return newSet
    })
  }

  const { groupTotals, grandTotal, maxGroupTotal } = useMemo(() => {
    const groupTotals = projectData.reduce((acc, group) => {
      acc[group.id] = group.items.reduce(
        (sum, item) => (selectedItems.has(item.id) ? sum + item.cost : sum),
        0
      )
      return acc
    }, {} as Record<string, number>)

    const grandTotal = Object.values(groupTotals).reduce((sum, groupTotal) => sum + groupTotal, 0)
    const maxGroupTotal = Math.max(...Object.values(groupTotals))

    return { groupTotals, grandTotal, maxGroupTotal }
  }, [selectedItems])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="mb-12 "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
            <Link href={"/"}>
            <IoReturnUpBackOutline size={30} color='black'/> 
            </Link>
            
          
        </motion.div>
        <motion.div
          className="mb-12 flex justify-center space-x-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button
            variant={viewMode === 'list' ? 'primary' : 'outline'}
            onClick={() => setViewMode('list')}
            className="flex items-center space-x-2 px-6 py-3 text-lg"
          >
            <FaListUl />
            <span>List View</span>
          </Button>
          <Button
            variant={viewMode === 'summary' ? 'primary' : 'outline'}
            onClick={() => setViewMode('summary')}
            className="flex items-center space-x-2 px-6 py-3 text-lg"
          >
            <FaChartBar />
            <span>Summary View</span>
          </Button>
        </motion.div>
        <AnimatePresence mode="wait">
          {viewMode === 'list' ? (
            <motion.div
              key="list"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <Accordion
                items={projectData.map((group) => ({
                  id: group.id,
                  title: (
                    <div className="flex flex-col justify-between gap-4 w-full">
                      <span>Section name: {group.name}</span>
                      <span className='bg-white text-gray-600 text-sm md:text-md px-3 py-2 rounded-md shadow-md max-w-fit'>Section cost: {formatCurrency(groupTotals[group.id])}</span>
                    </div>
                  ),
                  content: (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {group.items.map((item) => (
                        <Card key={item.id} className={`transition-all duration-300 ${selectedItems.has(item.id) ? 'ring-4 ring-blue-500 shadow-xl' : 'shadow-md'}`}>
                          <CardHeader className="flex justify-between items-center">
                            <CardTitle>{item.name}</CardTitle>
                            <Checkbox
                              id={item.id}
                              checked={selectedItems.has(item.id)}
                              onChange={() => toggleItem(item.id)}
                            />
                          </CardHeader>
                          <CardContent>
                            <div className="flex justify-between items-center mb-4">
                              <span className="text-3xl font-bold text-gray-700">{formatCurrency(item.cost)}</span>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => toggleExpanded(item.id)}
                                className="flex items-center space-x-1"
                              >
                                <FaInfoCircle />
                                <span>{expandedItems.has(item.id) ? 'Less' : 'More'}</span>
                              </Button>
                            </div>
                            <AnimatePresence>
                              {expandedItems.has(item.id) && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="text-sm text-gray-600 mt-2"
                                >
                                  {item.description}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ),
                }))}
              />
            </motion.div>
          ) : (
            <motion.div
              key="summary"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl">Cost Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  {projectData.map((group) => (
                    <div key={group.id} className="mb-8">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-xl">{group.name}</span>
                        <span className="text-blue-600 font-bold text-2xl">{formatCurrency(groupTotals[group.id])}</span>
                      </div>
                      <Progress
                        value={groupTotals[group.id]}
                        max={maxGroupTotal}
                        className="h-6"
                      />
                      <div className="mt-2 text-sm text-gray-600 flex justify-between">
                        <span>{group.items.filter(item => selectedItems.has(item.id)).length} / {group.items.length} items selected</span>
                        <span>{((groupTotals[group.id] / maxGroupTotal) * 100).toFixed(2)}% of max group cost</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex justify-between items-center ">
            <span className="text-2xl md:text-4xl font-bold">Grand Total:</span>
            <span className="text-4xl md:text-4xl font-bold">{formatCurrency(grandTotal)}</span>
          </div>
          {grandTotal > 0 && (
          <div className='mt-6'>
            <ExportPDFButton selectedItems={selectedItems} groupTotals={groupTotals} grandTotal={grandTotal} />
          </div>
        )}
          <div></div>
          <div className="flex items-center justify-between">
            
            <div className="hidden items-center space-x-6">
              <div className="flex items-center space-x-2">
                <FaCheck className="text-green-400 h-6 w-6" />
                <span className="text-xl">{selectedItems.size} selected</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaTimes className="text-red-400 h-6 w-6" />
                <span className="text-xl">{projectData.reduce((sum, group) => sum + group.items.length, 0) - selectedItems.size} unselected</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="inline-block px-6 py-3 bg-black mt-4 rounded-full">
            <span className="text-xl font-semibold text-white">Built by </span>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              inscrypt.tech
            </span>
          </div>
      </div>
    </div>
  )
}

export default  ProjectEstimator