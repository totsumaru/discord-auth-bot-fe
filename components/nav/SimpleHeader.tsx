export default function SimpleHeader() {
  return (
    <header className="inset-x-0 top-0">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="/logo.svg"
              alt=""
            />
          </a>
        </div>
      </nav>
    </header>
  )
}