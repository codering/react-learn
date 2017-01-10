import React from 'react'
import Link from 'react-router/lib/Link'

export default function IndexPage({children}) {

    return (
        <div>
            <div>
                <Link to="customFormItem" >FormItem</Link>
            </div>
            <div>{children}</div>
        </div>
    )

}