import { useState } from "react";
import StaffDetail from "./StaffDetailComponent";

function StaffList({ staffs }) {
  const [selectedStaff, setSelectedStaff] = useState();
  const [selectedColumn, setSelectedColumn] = useState(
    "col-md-4 col-sm-6 col-xs-12"
  );
  const handleSelectStaff = (staff) => {
    setSelectedStaff(staff);
  };
  const handleSelectColumn2 = () => {
    setSelectedColumn("col-md-6 col-sm-6 col-xs-6")
  };

  const handleSelectColumn3 = () => {
    setSelectedColumn('col-md-4 col-sm-4 col-xs-4')
  };

  const handleSelectColumn6 = () => {
    setSelectedColumn('col-md-2 col-sm-2 col-xs-2')
  };
  return (
    <div className="container">
      <div className="staffList-btn d-sm-flex">
        hiển thị
        <button onClick={() => handleSelectColumn2()}>2 Cột</button>
        <button onClick={() => handleSelectColumn3()}>3 Cột</button>
        <button onClick={() => handleSelectColumn6()}>6 Cột</button>
      </div>
      <div className="row">
        {staffs.map((staff) => (
          <div
            key={staff.id}
            className={selectedColumn}
            onClick={() => handleSelectStaff(staff)}
          >
            <div className="staffList-staff">{staff.name}</div>
          </div>
        ))}
      </div>
      <StaffDetail selectedStaff={selectedStaff} />
    </div>
  );
}

export default StaffList;
