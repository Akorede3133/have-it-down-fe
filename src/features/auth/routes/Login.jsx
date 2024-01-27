import AuthHeader from "../components/AuthHeader"
import LoginForm from "../components/LoginForm"

const Login = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <AuthHeader text='welcome back' />
      <LoginForm />
    </div>
  )
}

export default Login