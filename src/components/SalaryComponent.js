import { useState } from "react";

function Salary({ staffs }) {
  const [initStaffs, setInitStaffs] = useState(staffs);
  function handleIdSort() {
    const idArrange = staffs.sort((a, b) => {
      return a.id - b.id;
    });
    setInitStaffs((prev) => [...idArrange]);
  }
  function handleSalarySort() {
    const salaryArrange = staffs.sort((a, b) => {
      return (
        a.salaryScale * 3000000 +
        a.overTime * 200000 -
        (b.salaryScale * 3000000 + b.overTime * 200000)
      );
    });
    setInitStaffs((prev) => [...salaryArrange]);
  }
  return (
    <div className="container">
      <div>
        <h3>Sắp xếp theo</h3>
        <button onClick={() => handleIdSort()}>Mã nhân viên</button>
        <button onClick={() => handleSalarySort()}>Mức lương</button>
      </div>
      <div className="row">
        {initStaffs.map((staff) => {
          const salarys = (
            staff.salaryScale * 3000000 +
            staff.overTime * 200000
          ).toFixed(0);
          return (
            <div key={staff.id} className="col-md-4 col-sm-6 col-12">
              <div className="salary">
                <h2>{staff.name}</h2>
                <p>{`Mã nhân viên: ${staff.id}`}</p>
                <p>{`Hệ số lương: ${staff.salaryScale}`}</p>
                <p>{`Số ngày làm thêm: ${staff.overTime}`}</p>
                <p>{`Lương: ${salarys}`}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Salary;
