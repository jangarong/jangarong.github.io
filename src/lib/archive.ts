import fs from 'fs'
import path from 'path'

export function archiveExists() {
    try {
        const filePath = path.join(process.cwd(), 'public', 'b', 'archive', '0.html')
        const encodedContent = fs.readFileSync(filePath, 'utf-8')
        return encodedContent != null
    // eslint-disable-next-line 
    } catch (_) {
        return false
    }
}
