import React from 'react'
import PageMeta from '../../components/common/PageMeta'
import AuthLayout from './AuthLayout'
import SignInForm from '../../components/auth/SignInForm'

function SignIn() {
  return (
    <>
      <PageMeta
        title="React.js SignIn Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js SignIn Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <AuthLayout>
        <SignInForm />
      </AuthLayout>
    </>
  )
}

export default SignIn