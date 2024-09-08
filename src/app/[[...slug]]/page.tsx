import { ClientOnly } from './client'

export function generateStaticParams() {
    return [{ slug: ['/product/2343242333'] }]
}

export default function Page() {
    return <ClientOnly />
}