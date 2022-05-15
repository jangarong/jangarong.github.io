import type { NextComponentType } from 'next'
import { Card } from 'antd'

const BaseCard: NextComponentType = () => {
    return (
        <Card title="Default size card" className="card">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
    )
}

export default BaseCard
