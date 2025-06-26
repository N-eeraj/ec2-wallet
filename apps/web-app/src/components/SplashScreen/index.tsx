import Card from "@components/SplashScreen/Card"
import {
  CARD_ANIMATIONS,
} from "@constants/splashScreen"

function SplashScreen() {
  return (
    <main className="grid place-content-center w-screen h-svh bg-background-primary">
      <div className="relative w-48 aspect-video">
        {CARD_ANIMATIONS.map((animations, index) => (
          <Card
            key={index}
            {...animations} />
        ))}
      </div>
    </main>
  )
}

export default SplashScreen
