interface LoadingScreenProps {}

export default function LoadingScreen({}: LoadingScreenProps) {
    return (
        <div className="font-raleway text-white text-2xl w-full text-center animate-pulse">
            Loading...
        </div>
    )
}
