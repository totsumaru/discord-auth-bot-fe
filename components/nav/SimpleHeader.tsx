import LoginButton from "@/components/button/LoginButton";

type Props = {
  displayLoginButton?: boolean
}

export default function SimpleHeader({displayLoginButton}: Props) {
  return (
    <header className="inset-x-0 top-0">
      <nav className="flex justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1 justify-between items-center">
          <a href="/" className="-m-1.5 p-1.5">
            <img
              className="h-8 w-auto"
              src="/logo.svg"
              alt=""
            />
          </a>
          {displayLoginButton && <LoginButton/>}
        </div>
      </nav>
    </header>
  )
}