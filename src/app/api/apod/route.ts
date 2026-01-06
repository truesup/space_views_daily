import { NextRequest, NextResponse } from 'next/server'

const NASA_API_KEY = process.env.NASA_API_KEY
const NASA_API_URL = process.env.NASA_API_URL
const USE_MOCK = process.env.USE_MOCK === 'true'

const MOCK_DATA = {
    date: '2012-12-12',
    title: 'Milky Way Over Quiver Tree Forest',
    explanation: 'In front of a famous background of stars and galaxies lies some of Earth\'s more unusual trees. Known as quiver trees, they are actually succulents -- desert plants that store water -- but look like trees because they can grow to about 9 meters high. Quiver trees are indigenous to southern Africa and are so named because local San people used to use their bark to make arrow quivers. Pictured above, a few of the unusual trees stand in Quiver Tree Forest in southern Namibia. This 16-exposure composite shows the Milky Way Galaxy arching across the sky. On the left is the Large Magellanic Cloud, a satellite galaxy of our Milky Way.',
    url: 'https://apod.nasa.gov/apod/image/1212/quivertrees_breuer_960.jpg',
    hdurl: 'https://apod.nasa.gov/apod/image/1212/quivertrees_breuer_3000.jpg',
    media_type: 'image',
    copyright: 'Florian Breuer',
}

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const date = searchParams.get('date')

    if (!date) {
        return NextResponse.json(
            { error: 'Date parameter is required' },
            { status: 400 }
        )
    }

    if (USE_MOCK) {
        return NextResponse.json({ ...MOCK_DATA, date })
    }

    if (!NASA_API_KEY || !NASA_API_URL) {
        console.error('Missing env variables:', { NASA_API_KEY: !!NASA_API_KEY, NASA_API_URL: !!NASA_API_URL })
        return NextResponse.json(
            { error: 'Server configuration error' },
            { status: 500 }
        )
    }

    try {
        const response = await fetch(
            `${NASA_API_URL}?api_key=${NASA_API_KEY}&date=${date}`
        )

        if (!response.ok) {
            const errorText = await response.text()
            console.error(`NASA API returned ${response.status}:`, errorText)
            return NextResponse.json(
                { error: `NASA API error: ${response.status}` },
                { status: response.status }
            )
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
