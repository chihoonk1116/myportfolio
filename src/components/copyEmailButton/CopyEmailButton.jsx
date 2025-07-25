import React, {useState} from 'react'



import './copyEmailButton.scss'
import { AnimatePresence, motion } from 'motion/react'


const CopyEmailButton = () => {

  const [copied, setCopied] = useState(false)
  const email = "chihoonkim1116@gmail.com"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <motion.button
      onClick = {copyToClipboard}
      whileHover = {{y:-5}}
      whileTap = {{scale:1.05}}
      className = 'copy-button'
    >
      <AnimatePresence mode='wait'>
        {copied ? (
          <motion.p
            key="copied"
            initial={{opacity : 0, y : -10}}
            animate={{opacity : 1, y : 0}}
            exit={{opacity : 0, y : -10}}
            transition={{duration: 0.1, ease: "easeInOut"}}
            className="copy-button_context"
          >
            <img src="assets/copy-done.svg" alt="copydone" className="w-5" />
            Email has copied
          </motion.p>
        ) :
        (
          <motion.p
            key="copy"
            initial={{opacity : 0}}
            animate={{opacity : 1}}
            exit={{opacity : 0}}
            transition={{duration: 0.1, ease: "easeInOut"}}
            className="copy-button_context"
          >
            <img src="assets/copy.svg" className="w-5" alt="copyicon" />
            Copy Email Address
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  )
}

export default CopyEmailButton
