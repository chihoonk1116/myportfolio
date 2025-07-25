import React, { useEffect, useState, useRef } from 'react'
import { IoIosCloseCircleOutline, IoIosRemoveCircleOutline } from "react-icons/io"
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import javascript from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import gsap from 'gsap';

import './codeEditor.scss'

SyntaxHighlighter.registerLanguage('javascript', javascript);

const codeSnippet = [`import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
      <div className="hero-container">
        <h1>Hello, World!</h1>
        <p>I build elegant web experiences.</p>
        <button onClick={() => 
          console.log('Learn More')}>Explore Projects
        </button>
      </div>
    );
};

export default HeroSection;`,

`// utils/math.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

function multiply(a, b) {
  return a * b;
}

export { add, subtract, multiply };`,

`body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background-color: #1e1e1e;
  color: #d4d4d4;
}

.button {
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #007acc;
  color: white;
  cursor: pointer;
}`

]

const CodeEditorArea = () => {

  const [displayedCode, setDisplayedCode] = useState('')
  const [animationComplete, setAnimationComplete] = useState(false)
  const [currentSnippentInd, setCurrentSnippetInd] = useState(0)

  const tl = useRef(null)
  const codeAreaRef = useRef(null)

  useEffect(() => {

    if(tl.current){
      tl.current.kill()
      const existingCursor = codeAreaRef.current?.querySelector('.typing-cursor')
      if(existingCursor){
        existingCursor.remove()
      }
    }

    tl.current = gsap.timeline({
      onComplete: () => setAnimationComplete(true)
    })

    for(let i = 0; i<=codeSnippet[currentSnippentInd].length; i++){
      tl.current.to({} , {
        duration: 0.03,
        onUpdate: () => {
          setDisplayedCode(codeSnippet[currentSnippentInd].substring(0, i))
        }
      }, i * 0.03)
    }

    tl.current.play()


    return () => {
      if(tl.current){
        tl.current.kill()
      }

      const existingCursor = codeAreaRef.current?.querySelector('.typing-cursor')
      if(existingCursor){
        existingCursor.remove()
      }

    }

  }, [currentSnippentInd])

  useEffect(() => {
    if(!animationComplete){
      return
    }

    const codeAreaEl = codeAreaRef.current?.querySelector('code')
    if(!codeAreaEl) return

    const cursorSpanEl = document.createElement('span')
    cursorSpanEl.className = 'typing-cursor'
    cursorSpanEl.textContent = '|'

    codeAreaEl.appendChild(cursorSpanEl)

    setTimeout(() => {
      setAnimationComplete(false)
      setCurrentSnippetInd(currentSnippentInd+1 === codeSnippet.length ? 0 : currentSnippentInd+1)
      setDisplayedCode('')
    }, 5000);

  }, [animationComplete])



  return (
    <div className='code-window_container'>
      <div className="code-window_title">
        <span>DummyComponent.jsx</span>
        <div className="code-window_title_icons">
          <IoIosRemoveCircleOutline style={{ color: '#cc6033' }} />
          <IoIosCloseCircleOutline style={{ color: '#ff6159' }} />

        </div>
      </div>
      <div className="code-window_editor-area" ref={codeAreaRef}>
        <SyntaxHighlighter
          language="javascript" 
          style={vs2015}  
          showLineNumbers={true} 
          wrapLines={true}     
          customStyle={{       
            backgroundColor: 'transparent', 
            margin: 0,
            overflow: 'auto', // 내용이 길면 스크롤바 표시
            fontSize: '0.9em',
            fontFamily: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace', // macOS 코드 폰트 스택
          }}
          codeTagProps={{      
            style: {
                fontFamily: 'inherit', 
            }
          }}
        >
          {displayedCode} 
        </SyntaxHighlighter>
      </div>
      <div className="code-window_footer">
        <span>Thank you for your visiting</span>
      </div>
    </div>
  )
}

export default CodeEditorArea
