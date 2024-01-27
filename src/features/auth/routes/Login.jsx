import AuthHeader from "../components/AuthHeader"
import LoginForm from "../components/LoginForm"

const Login = () => {
  return (
    <div className="flex items-center flex-col min-h-screen justify-center">
      <AuthHeader text='welcome back' />
      <LoginForm />
    </div>
  )
}

export default Login