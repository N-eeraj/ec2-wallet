import "@/main.css"

function App() {
  return (
    <>
      <div>
        <div className="bg-background-page p-10">
          <div className="text-foreground-primary">foreground-primary</div>
          <div className="text-foreground-secondary">foreground-secondary</div>
          <div className="text-foreground-faded">foreground-faded</div>
          <div className="text-foreground-disabled">foreground-disabled</div>
          <a className="block text-link-default hover:text-link-hover">
            Link
          </a>
          <button className="px-5 py-1 bg-button-default hover:bg-button-hover rounded-xs">
            Button
          </button>
        </div>
        <div className="bg-background-card p-10">
          <div className="text-foreground-primary">foreground-primary</div>
          <div className="text-foreground-secondary">foreground-secondary</div>
          <div className="text-foreground-faded">foreground-faded</div>
          <div className="text-foreground-disabled">foreground-disabled</div>
          <a className="block text-link-default hover:text-link-hover">
            Link
          </a>
          <button className="px-5 py-1 bg-button-default hover:bg-button-hover rounded-xs">
            Button
          </button>
        </div>

        <div className="bg-foreground-primary px-10 py-8">
          <div className="text-foreground-primary-inverted">foreground-primary-inverted</div>
          <div className="text-foreground-secondary-inverted">foreground-secondary-inverted</div>
          <div className="text-foreground-faded-inverted">foreground-faded-inverted</div>
          <div className="text-foreground-disabled-inverted">foreground-disabled-inverted</div>
          <a className="block text-link-default-inverted hover:text-link-hover-inverted">
            Link
          </a>
          <button className="px-5 py-1 bg-button-default hover:bg-button-hover rounded-xs">
            Button
          </button>
        </div>

        <div className="bg-background-success px-10 py-4">
          <span className="text-foreground-success">
            success status
          </span>
        </div>
        <div className="bg-background-info px-10 py-4">
          <span className="text-foreground-info">
            info status
          </span>
        </div>
        <div className="bg-background-warn px-10 py-4">
          <span className="text-foreground-warn">
            warn status
          </span>
        </div>
        <div className="bg-background-error px-10 py-4">
          <span className="text-foreground-error">
            error status
          </span>
        </div>
      </div>
    </>
  )
}

export default App
