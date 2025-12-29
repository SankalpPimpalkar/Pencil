'use client';
import { useParams } from 'next/navigation'
import React from 'react'

export default function BlogDetails() {

  const { slug } = useParams()

  return (
    <div className='px-3'>
      {slug}
    </div>
  )
}
