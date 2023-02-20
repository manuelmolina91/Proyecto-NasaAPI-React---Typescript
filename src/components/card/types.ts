export type Props = {
    nasaId: number
    sol?: number
    image?: string
    type?: 'list' | 'details'
     onClick?: (id:string) => void
     id?:string
     onRemove: (id: number) => void
}