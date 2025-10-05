
import './App.css'
import Banner from './components/banner'
import Footer from './components/shared/footer'
import Navbar from './components/shared/navbar'

function App() {

	return (
		<>
			<Navbar />
			<Banner />
			{/* Main content */}
			<div className="container pb-20 pt-10">
				<div className="grid grid-cols-12 gap-4 md:gap-6">
					<div className="col-span-8 space-y-5">
						<h3 className='text-[#34485A] font-semibold text-2xl'>Customer Tickets</h3>
						<div className="grid grid-cols-2 gap-4 md:gap-6">
							{/* Tickets Card */}
							<div className='p-4 rounded-lg bg-white space-y-1'>
								<div className='flex gap-2 justify-between'>
									<h4 className='font-medium text-lg text-[#001931] capitalize'>Login Issues - Can't Access Account</h4>
									<div className='bg-[#B9F8CF] py-1 px-3 rounded-full w-fit text-[#0B5E06] flex gap-2 items-center justify-center'>
										<div className='w-4 h-4 rounded-full bg-[#02A53B]'></div>
										Open
									</div>
								</div>
								<p className='text-[#627382] text-base'>Customer is unable to log in to their account. They've tried resetting their password multiple times but still...</p>
								<div className='grid grid-cols-2 gap-4'>
									<div className='flex gap-2 items-center'>
										<p className='text-[#627382]'>#<span>1001</span></p>
										<p className='text-[#F83044] font-medium text-sm uppercase'>HIGH PRIORITY</p>
									</div>
									<div className='flex items-center gap-4'>
										<p className='text-[#627382]'>John Smith</p>
										<div className='flex gap-2'>
											<img src="/calender.svg" alt="Calender" />
											<p className='text-[#627382]'>1/15/2024</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-span-4 space-y-5">
						{/* Task Status */}
						<div className='space-y-3'>
							<h3 className='text-[#34485A] font-semibold text-2xl'>Task Status</h3>
							{/* Task status card */}
							<div className='p-4 rounded-lg bg-white space-y-1'>
								<h4 className='font-medium text-lg text-[#001931] capitalize'>Payment Failed - Card Declined</h4>
								<button className='btn bg-[#02A53B] rounded w-full border-0 font-semibold text-base capitalize text-white'>
									Complete
								</button>
							</div>
							<p className='text-[#627382] text-base'>Select a ticket to add to Task Status</p>
						</div>
						{/* Resolved Task */}
						<div className='space-y-3'>
							<h3 className='text-[#34485A] font-semibold text-2xl'>Resolved Task</h3>
							{/* Resolved task card */}
							<div className='p-4 rounded-lg bg-[#E0E7FF] space-y-1'>
								<h4 className='font-medium text-lg text-[#001931] capitalize'>Incorrect Billing Address</h4>
							</div>
							<p className='text-[#627382] text-base'>No resolved tasks yet.</p>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	)	
}

export default App
