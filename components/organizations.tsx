import type { NextComponentType } from 'next'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Organizations: NextComponentType = () => {

    const [orgs, setOrgs] = useState<Organization[]>([])

    const fetchOrgs = async () => {
        const data = await fetch('/api/orgs')
        setOrgs(await data.json())
    }

    useEffect(() => {
        fetchOrgs()
    }, [])

    return (
        <div className="section">
            <div className="title">
                BUILDING BETTER SOFTWARE WITH
            </div>
            <div id="org-logos">
                {orgs.map(org => (
                    <Link href={org.url}>
                        <Image
                            src={org.imgUrl}
                            height="150px"
                            width="300px"
                            className="logo"
                        />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Organizations
