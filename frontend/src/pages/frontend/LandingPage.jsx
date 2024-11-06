import React from 'react';

const LandingPage = () => {
  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Section */}
      <header  style={{ backgroundImage: "url('./images/bg1.jpg')" }} className="bg-cover bg-center flex items-center justify-center text-white relative bg-gradient-to-r from-indigo-600 to-indigo-800 py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 animate__animated animate__fadeIn animate__delay-1s">
            Transform Your HR Management with Our All-in-One SaaS Solution
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 max-w-3xl mx-auto opacity-80">
            Automate HR processes, enhance employee engagement, and ensure compliance—manage everything from recruitment to termination, seamlessly.
          </p>
          <a href="#features" className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-100 transition duration-300">
            Start Your Free Trial
          </a>
        </div>
      </header>

      {/* Full HRMS Process Flow */}
      <section id="features" className="py-20 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-10">Manage Your Entire HR Lifecycle in One Place</h2>

          {/* Recruitment Process Section */}
          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-semibold text-indigo-600 mb-4">Recruitment & Hiring</h3>
            <p className="text-lg sm:text-xl mb-4 max-w-3xl mx-auto opacity-70">
              From posting job listings to candidate tracking, interview scheduling, and automated resume screening. The entire recruitment cycle is optimized and streamlined.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
              <div className="p-6 bg-indigo-50 border rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
                <i className="fas fa-briefcase text-4xl text-indigo-600 mb-4"></i>
                <h4 className="text-xl font-semibold text-indigo-600 mb-4">Job Posting & Tracking</h4>
                <p className="text-md mb-4">Post on multiple job boards and track all applicants in one place. Simplify the hiring pipeline.</p>
              </div>
              <div className="p-6 bg-indigo-50 border rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
                <i className="fas fa-users-cog text-4xl text-indigo-600 mb-4"></i>
                <h4 className="text-xl font-semibold text-indigo-600 mb-4">Automated Screening</h4>
                <p className="text-md mb-4">Use AI-powered tools to screen resumes, evaluate candidates' profiles, and schedule interviews automatically.</p>
              </div>
              <div className="p-6 bg-indigo-50 border rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
                <i className="fas fa-chart-line text-4xl text-indigo-600 mb-4"></i>
                <h4 className="text-xl font-semibold text-indigo-600 mb-4">Analytics & Insights</h4>
                <p className="text-md mb-4">Gain actionable insights into your recruitment efforts and optimize your hiring processes with detailed analytics.</p>
              </div>
            </div>
          </div>

          {/* Onboarding Section */}
          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-semibold text-indigo-600 mb-4">Seamless Onboarding</h3>
            <p className="text-lg sm:text-xl mb-4 max-w-3xl mx-auto opacity-70">
              Smoothly onboard new hires with digital document collection, task automation, and easy access to team introductions and training materials.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
              <div className="p-6 bg-indigo-50 border rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
                <i className="fas fa-file-signature text-4xl text-indigo-600 mb-4"></i>
                <h4 className="text-xl font-semibold text-indigo-600 mb-4">Automated Documentation</h4>
                <p className="text-md mb-4">Effortlessly collect employee forms, contracts, and tax documents via secure, digital workflows.</p>
              </div>
              <div className="p-6 bg-indigo-50 border rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
                <i className="fas fa-users text-4xl text-indigo-600 mb-4"></i>
                <h4 className="text-xl font-semibold text-indigo-600 mb-4">Self-Service Portal</h4>
                <p className="text-md mb-4">New hires can easily complete necessary onboarding tasks, view policies, and fill in personal information through their personal portal.</p>
              </div>
              <div className="p-6 bg-indigo-50 border rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
                <i className="fas fa-chalkboard-teacher text-4xl text-indigo-600 mb-4"></i>
                <h4 className="text-xl font-semibold text-indigo-600 mb-4">Training Modules</h4>
                <p className="text-md mb-4">Assign training modules and track progress, all integrated into your onboarding process.</p>
              </div>
            </div>
          </div>

          {/* Attendance & Leave Section */}
          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-semibold text-indigo-600 mb-4">Attendance & Leave Management</h3>
            <p className="text-lg sm:text-xl mb-4 max-w-3xl mx-auto opacity-70">
              Automatically track employee time, manage leave requests, and sync attendance data with payroll to reduce manual errors.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
              <div className="p-6 bg-indigo-50 border rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
                <i className="fas fa-clock text-4xl text-indigo-600 mb-4"></i>
                <h4 className="text-xl font-semibold text-indigo-600 mb-4">Time Tracking</h4>
                <p className="text-md mb-4">Automated clock-in and clock-out with real-time tracking, reducing attendance errors.</p>
              </div>
              <div className="p-6 bg-indigo-50 border rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
                <i className="fas fa-calendar-check text-4xl text-indigo-600 mb-4"></i>
                <h4 className="text-xl font-semibold text-indigo-600 mb-4">Leave Requests</h4>
                <p className="text-md mb-4">Allow employees to request leave directly from their portal, with automatic approvals based on pre-configured rules.</p>
              </div>
              <div className="p-6 bg-indigo-50 border rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
                <i className="fas fa-calendar-day text-4xl text-indigo-600 mb-4"></i>
                <h4 className="text-xl font-semibold text-indigo-600 mb-4">Holiday Management</h4>
                <p className="text-md mb-4">Track national and regional holidays, integrate with employee schedules, and maintain leave balances automatically.</p>
              </div>
            </div>
          </div>

          {/* Payroll & Salary Section */}
          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-semibold text-indigo-600 mb-4">Payroll & Salary Management</h3>
            <p className="text-lg sm:text-xl mb-4 max-w-3xl mx-auto opacity-70">
              Calculate, generate, and distribute payroll automatically. Stay compliant with tax regulations and provide employees with direct deposit options.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
              <div className="p-6 bg-indigo-50 border rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
                <i className="fas fa-wallet text-4xl text-indigo-600 mb-4"></i>
                <h4 className="text-xl font-semibold text-indigo-600 mb-4">Payroll Generation</h4>
                <p className="text-md mb-4">Generate payslips, tax deductions, and manage direct deposits all from within the system.</p>
              </div>
              <div className="p-6 bg-indigo-50 border rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
                <i className="fas fa-percent text-4xl text-indigo-600 mb-4"></i>
                <h4 className="text-xl font-semibold text-indigo-600 mb-4">Tax Calculations</h4>
                <p className="text-md mb-4">Automatic tax calculations for different regions to ensure compliance and reduce errors in payroll.</p>
              </div>
              <div className="p-6 bg-indigo-50 border rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
                <i className="fas fa-credit-card text-4xl text-indigo-600 mb-4"></i>
                <h4 className="text-xl font-semibold text-indigo-600 mb-4">Direct Deposit Integration</h4>
                <p className="text-md mb-4">Automatically deposit salaries into employees' bank accounts, streamlining the payroll process.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Call to Action for Demo */}
      <section className="py-20 bg-indigo-600 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Revolutionize Your HR?</h2>
          <p className="text-xl sm:text-2xl mb-8">Schedule a personalized demo with us to see how we can help you streamline your HR processes.</p>
          <a href="#contact" className="bg-white text-indigo-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-100 transition duration-300">
            Request a Demo
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-indigo-600 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Your HRMS SaaS. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default LandingPage;
