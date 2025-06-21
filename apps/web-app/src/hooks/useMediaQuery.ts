import {
  useMediaQuery,
} from "@uidotdev/usehooks"

export default function useCustomMediaQuery() {
  const isXs = useMediaQuery("only screen and (max-width: 639px)")
  const isSm = useMediaQuery("only screen and (min-width: 640px)")
  const isLandscape = useMediaQuery("only screen and (orientation: landscape)")

  return {
    isXs,
    isSm,
    isLandscape,
  }
}
