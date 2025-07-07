import {
  toast,
} from "sonner"

interface ShareData {
  title: string
  text: string
  url: string
}
export default async function share(data: ShareData, fallbackToastText = "Copied Link Successfully") {
  try {
    if (navigator.share) {
      await navigator.share(data)
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(location.origin + data.url)
      toast.success(fallbackToastText)
    } else {
      const dummy = document.createElement("textarea")
      document.body.appendChild(dummy)
      dummy.value = location.origin + data.url
      dummy.select()
      document.execCommand("copy")
      document.body.removeChild(dummy)
      toast.success(fallbackToastText)
    }
  } catch {} // prevents any unwanted console errors
}
