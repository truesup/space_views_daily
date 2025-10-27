import { NextRequest, NextResponse } from 'next/server'

const NASA_API_KEY = process.env.NASA_API_KEY
const NASA_API_URL = process.env.NASA_API_URL

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const date = searchParams.get('date')

    if (!date) {
        return NextResponse.json(
            { error: 'Date parameter is required' },
            { status: 400 }
        )
    }

    try {
        const response = await fetch(
            `${NASA_API_URL}?api_key=${NASA_API_KEY}&date=${date}`
        )

        if (!response.ok) {
            console.error(`NASA API returned ${response.status}`)
        }

        const data = await response.json()

        return NextResponse.json(data)
    } catch (error) {
        console.error('NASA API Error:', error)
        return NextResponse.json(
            { error: 'Failed to fetch from NASA API' },
            { status: 500 }
        )
    }
}
