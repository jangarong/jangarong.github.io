import type { NextComponentType } from 'next'
import { Card } from 'antd'

const HomeCard: NextComponentType = () => {
    return (
        <Card title="Default size card" className="moveUp">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
    )
}

export default HomeCard
