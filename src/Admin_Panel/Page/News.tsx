import { BookCopy, Filter } from "lucide-react";
import News_Table from "../Page_Components/News/News_Table";
import Sidebar from "../Page_Components/Sidebar/Sidebar";
import { Link } from "react-router-dom";
const Admin_News = () => {
  return (
    <div className="md:flex md:gap-3 ">
      <Sidebar/>
    <div className=" flex flex-col w-full  mt-1 md:mt-6 items-center h-screen">
      <div className="w-10/12 flex justify-between items-center p-2">
        <Link to="/admin/news/add" className="px-3 flex gap-6 py-1 bg-blue-700 text-white border-2 items-center rounded-lg">
          <BookCopy size={20} color="white" />
          <h1 className="text-xl">Add News Form</h1>
        </Link>
        <Filter />
      </div>

      <News_Table />
    </div>
    </div>
  );
};

export default Admin_News;
