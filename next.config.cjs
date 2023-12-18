/** @type {import('next').NextConfig} */
const nextConfig = {}

import { join } from 'path'
 
export const sassOptions = {
    includePaths: [join(__dirname, 'styles')],
}

export default nextConfig
