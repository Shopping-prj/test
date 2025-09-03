// src/layouts/AdminLayout.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const AdminLayout = () => {
  return (
    <div className="d-flex">        {/* 가로 배치 */}
      <Sidebar />                    {/* 왼쪽 고정 폭(이미 width:220px 있음) */}
      <main className="flex-grow-1 ps-3">  {/* 오른쪽 영역 */}
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;