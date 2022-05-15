import type { NextComponentType } from 'next'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Projects: NextComponentType = () => {

    const [projects, setProjects] = useState<Project[]>([])

    const fetchProjects = async () => {
        // TODO: Add pagination if applicable
        const data = await fetch('/api/projects/1')
        setProjects(await data.json())
    }

    useEffect(() => {
        fetchProjects()
    }, [])

    return (
        <div className="stripe">
            <div className="section-stripe">

            </div>
        </div>
    )
}

export default Projects
