import { STAFFS } from "../shared/staffs";
import { DEPARTMENTS } from "../shared/staffs";
import Header from "./HeaderComponent";
import StaffList from "./StaffListComponent";
import StaffDetail from "./StaffDetailComponent";
import Department from "./DepartmentComponent";
import Salary from "./SalaryComponent";
import Footer from "./FooterComponent";
import { Routes, Route, Navigate, useParams } from "react-router-dom";

function Main() {
  function StaffWithId() {
    const staffId = useParams();
    return (
      <StaffDetail
        selectedStaff={
          STAFFS.filter((staff) => staff.id === Number(staffId.staffId))[0]
        }
      />
    );
  }
  return (
    <>
      <Header />
      <Routes>
        <Route path="/staffs" element={<StaffList staffs={STAFFS} />} />
        <Route path="/staffs/:staffId" element={<StaffWithId />} />
        <Route
          path="/departments"
          element={<Department departments={DEPARTMENTS} />}
        />
        <Route path="/salarys" element={<Salary staffs={STAFFS}/>} />
        <Route path="*" element={<Navigate to="/staffs" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Main;
