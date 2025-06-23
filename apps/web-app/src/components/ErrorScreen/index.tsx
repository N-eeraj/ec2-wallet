import {
  USER_FETCH_FAILED_MESSAGE,
} from "@constants/messages"

function ErrorScreen() {
  return (
    <div>
      {USER_FETCH_FAILED_MESSAGE}
    </div>
  )
}

export default ErrorScreen