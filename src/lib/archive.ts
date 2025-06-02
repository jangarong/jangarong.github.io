import fs from 'fs'
import path from 'path'

export function archiveExists() {
    try {
        const filePath = path.join(process.cwd(), 'public', 'b', 'archive.html')
        const encodedContent = fs.readFileSync(filePath, 'utf-8')
        return encodedContent != null
    } catch (_) {
        return false
    }
}
