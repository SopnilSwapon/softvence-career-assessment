'use client';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface ExpandableItem {
  id: string;
  question: string;
  answer: string;
  isExpanded?: boolean;
}

interface ExpandableListProps {
  items: ExpandableItem[];
  className?: string;
  allowMultiple?: boolean;
}

const ExpandableList = ({ 
  items, 
  className,
  allowMultiple = false 
}: ExpandableListProps) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(
    new Set(items.filter(item => item.isExpanded).map(item => item.id))
  )

  const toggleItem = (itemId: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev)
      
      if (newSet.has(itemId)) {
        newSet.delete(itemId)
      } else {
        if (!allowMultiple) {
          newSet.clear()
        }
        newSet.add(itemId)
      }
      
      return newSet
    })
  }

  return (
    <div className={twMerge('space-y-4', className)}>
      {items.map((item) => {
        const isExpanded = expandedItems.has(item.id)
        
        return (
          <div
            key={item.id}
            className="border border-expandHeader-border rounded-lg overflow-hidden"
          >
            {/* Header */}
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-6 py-6 flex items-center justify-between text-left hover:bg-primary-light transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-background focus:ring-inset"
              aria-expanded={isExpanded}
              aria-controls={`content-${item.id}`}
            >
              <span className="text-md font-semibold text-text-secondary leading-md">
                {item.question}
              </span>
              <div className="flex-shrink-0 ml-4">
                {isExpanded ? (
                  <img 
                    src="/images/img_icon.svg" 
                    alt="Collapse" 
                    className="w-4 h-4 transform rotate-180 transition-transform duration-200"
                  />
                ) : (
                  <img 
                    src="/images/img_icon_blue_gray_900.svg" 
                    alt="Expand" 
                    className="w-4 h-4 transition-transform duration-200"
                  />
                )}
              </div>
            </button>
            
            {/* Content */}
            {isExpanded && (
              <div
                id={`content-${item.id}`}
                className="px-10 pb-6 border-t border-expandHeader-border"
              >
                <p className="text-base text-text-muted leading-base">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default ExpandableList