'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []
  
  // Default nav items if none are present in CMS
  const defaultNavItems = [
    { link: { label: 'Home', url: '/' } },
    { link: { label: 'About', url: '/about' } },
    { link: { label: 'Contact', url: '/contact' } },
    { link: { label: 'Demo', url: '/demo' } },
    { link: { label: 'Blog', url: '/posts' } },
  ]

  const itemsToShow = navItems.length > 0 ? navItems : defaultNavItems

  return (
    <nav className="flex gap-8 items-center">
      {itemsToShow.map(({ link }, i) => {
        return <CMSLink key={i} {...link} appearance="link" className="text-lg font-medium" />
      })}
      {/* <Link href="/search">
        <span className="sr-only">Search</span>
        <SearchIcon className="w-5 text-primary" />
      </Link> */}
    </nav>
  )
}
