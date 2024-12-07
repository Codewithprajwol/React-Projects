import { Link,  Outlet } from "react-router-dom";
import Header from "../../others/Header";

function AdminDashboard(): JSX.Element {
  return (
    <div>
      <Header />
      <div className=" flex items-start justify-between  gap-5 w-full min-h-52 bg-[#F4F5F8]">
        <div className="max-w-20 w-20 min-h-52 bg-white pt-5">
          <ul className="admin-icon flex items-center justify-center flex-col gap-7 ">
            <li className="relative group">
              <Link to='/admin'>
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-home"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </Link><span className="hidden  absolute -top-3 left-11 w-32 h-10 bg-white group-hover:flex items-start justify-center flex-col gap-3">Dashboard</span>
            </li>
            <li className="group relative">
              <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </a>
              <span className="hidden  absolute -top-3 left-11 w-32 h-10 bg-white group-hover:flex items-start justify-center flex-col gap-3 ">Chat</span>
            </li>
            <li className="relative group">
              <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </a>
              <span className="hidden  absolute -top-3 left-11 w-32 h-10 bg-white group-hover:flex items-start justify-center flex-col gap-3 ">Email</span>
            </li>
            <li className="relative group">
              <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              </a>
              <span className="hidden  absolute -top-3 left-11 w-32 h-10 bg-white group-hover:flex items-start justify-center flex-col gap-3">Calander</span>
            </li>
            <li className="relative group">
              <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </a>
              <span className="hidden  absolute -top-3 left-11 w-32 h-10 bg-white group-hover:flex items-start justify-center flex-col gap-3">Contact</span>
            </li>
            <li className="relative group">
              <Link to="/admin/createTask">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-trello"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect></svg>
              </Link>
              <span className="hidden  absolute -top-3 left-11 w-32 h-10 bg-white group-hover:flex items-start justify-center flex-col gap-3 ">Tasks</span>
            </li>

          </ul>
        </div>
        <div className="w-full  min-h-52 bg-white">
          <div className="flex items-center justify-between bg-[#F4F5F8] p-5">
            <h2 className="text-xl">Create Task</h2>
            <h3 className="text-[1rem] text-[#dadada] ">
              Tasks - <span className="text-xs text-[#000]">Create Tasks</span>
            </h3>
          </div>
          <div className="w-full p-5 h-53 bg-red-300">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
