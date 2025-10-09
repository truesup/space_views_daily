export interface APODResponse {
    date: string
    explanation: string
    hdurl?: string
    media_type: 'image' | 'video'
    title: string
    url: string
    copyright?: string
}

export async function fetchAPOD(date: string): Promise<APODResponse> {
    const response = await fetch(`/api/apod?date=${date}`)

    if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to fetch APOD')
    }

    return response.json()
}
