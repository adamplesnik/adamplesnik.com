import CodeBlock from '../components/CodeBlock'
import DemoWrapper from '../components/DemoWrapper'
import Paragraph from '../components/Paragraph'
import BlogPost from '../pages/BlogPost'

const exampleKeyframes = `@keyframes appear {
  to {
    width: auto;
  }
}

.animate-appear {
  animation: appear 0s linear forwards;
}`

const exampleDelay = `const text = Array.from('Knock, knock, Neo.')

{text.map((letter, index) => (
  <span 
    className="w-0 animate-appear overflow-hidden ease-custom"
    style={{
      animationDelay: ((index + 5) * 100).toString() + 'ms',
    }}
    key={index}
  >
    {letter === ' ' ? '\u00A0' : letter}
  </span>
))}`

const text = Array.from('Knock, knock, Neo.')
const textLength = text.length

const TextAppearBlogPost = () => {
  return (
    <BlogPost
      title="Text Appear Animation in CSS"
      subTitle="Tackle impressive text appear animation just by CSS and teeny-tiny piece of JS code."
    >
      <Paragraph>
        Do you remember that scene, where Neo slept on his keyboard and suddenly text magically
        appeared on the screen of his CRT? Magic by 1998's standards indeed, but very easily done
        with today's CSS.
      </Paragraph>
      <DemoWrapper actionButton>
        <div className="flex h-full w-full p-6 font-mono text-xl sm:p-12 sm:text-3xl">
          {text.map((letter, index) => (
            <span
              className="inline-block w-0 animate-appear overflow-hidden ease-custom"
              style={{
                animationDelay: ((index + 5) * 100).toString() + 'ms',
              }}
              key={index}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </div>
      </DemoWrapper>
      <CodeBlock language="css" children={exampleKeyframes} />
      <CodeBlock language="tsx" children={exampleDelay} />
    </BlogPost>
  )
}

export default TextAppearBlogPost
