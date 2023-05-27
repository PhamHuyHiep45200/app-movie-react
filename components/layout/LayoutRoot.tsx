import React from 'react'

function LayoutRoot({children}:{children: React.ReactNode}) {
  return (
    <div>
        header
        {children}
        foooter
    </div>
  )
}

export default LayoutRoot