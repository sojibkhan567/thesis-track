import React from 'react'
import PageMeta from '../../components/common/PageMeta'
import PageBreadcrumb from '../../components/common/PageBreadCrumb'

const StudentDashboard = () => {
  return (
    <>
      <PageMeta
        title="React.js Ecommerce Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Ecommerce Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Student Dashboard Page" />
      <h1 className='text-6xl text-center text-gray-800 dark:text-white/90'>Student Dashboard Page!</h1>
    </>
  )
}

export default StudentDashboard