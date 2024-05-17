import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
export default function KanbasNavigation() {
  return (
    <div id="wd-kanbas-navigation" className="list-group rounded-0">
      <a
        id="wd-account-link"
        href="#/Kanbas/Account"
        className="list-group-item border-0 bg-black text-white text-center"
      >
        <FaRegCircleUser className="fs-1" />
        <br />
        Account
      </a>
      <a
        id="wd-dashboard-link"
        href="#/Kanbas/Dashboard"
        className="list-group-item border-0 bg-white text-danger text-center"
      >
        <AiOutlineDashboard className="fs-1" />
        <br />
        Dashboard
      </a>
      <a
        id="wd-course-link"
        href="#/Kanbas/Courses"
        className="list-group-item border-0 bg-black text-danger text-center"
      >
        <LiaBookSolid className="fs-1" />
        <br />
        Courses
      </a>
      <a
        id="wd-calendar-link"
        href="#/Kanbas/Calendar"
        className="list-group-item border-0 bg-black text-danger text-center"
      >
        <IoCalendarOutline className="fs-1" />
        <br />
        Calendar
      </a>
      <a
        id="wd-inbox-link"
        href="#/Kanbas/Inbox"
        className="list-group-item border-0 bg-black text-danger text-center"
      >
        <FaInbox className="fs-1" />
        <br />
        Inbox
      </a>
      <a
        id="wd-labs-link"
        href="#/Labs"
        className="list-group-item border-0 bg-black text-danger text-center"
      >
        <LiaCogSolid className="fs-1" />
        <br />
        Labs
      </a>
    </div>
  );
}
