import { PropsWithChildren } from 'react'
import { NavLink } from 'react-router-dom'
import Heading from '../components/Heading'
import Page from '../layouts/Page'
import Link from '../components/Link'
import { ArrowLeft } from 'lucide-react'

const BlogPost = ({ title, subTitle, children }: PropsWithChildren<BlogPostProps>) => {
  return (
    <Page>
      <NavLink to="/blog" className="text-sm">
        <Link Icon={ArrowLeft}>Blog</Link>
      </NavLink>
      <div>
        <Heading size={1}>{title}</Heading>
        <Heading size={2}>{subTitle}</Heading>
        {children}
      </div>
    </Page>
  )
}

export interface BlogPostProps {
  title: string
  subTitle: string
  children: PropsWithChildren
}

export default BlogPost
