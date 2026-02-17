import type { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'

type FadeInProps = PropsWithChildren<{
  delay?: number
  className?: string
}>

export function FadeIn({ delay = 0, className, children }: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

