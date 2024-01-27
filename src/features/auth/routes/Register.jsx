import AuthHeader from "../components/AuthHeader"
import RegistrationForm from "../components/RegistrationForm"

const Register = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <AuthHeader text='join us today' />
      <RegistrationForm />
    </div>
  )
}

export default Register