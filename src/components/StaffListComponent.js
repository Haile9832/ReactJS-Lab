import { useState } from "react";
import { Link } from "react-router-dom";

function StaffList({ staffs }) {
  const [searchStaff, setSearchStaff] = useState("");
  const [searchedStaff, setSearchedStaff] = useState("");
  function handleSearch() {
    setSearchedStaff(searchStaff);
  }
  return (
    <div className="container">
      <div >
        <input
          value={searchStaff}
          onChange={(e) => setSearchStaff(e.target.value.toLowerCase())}
          placeholder="Nhập tên nhân viên"
        ></input>
        <button onClick={handleSearch}>Tìm kiếm</button>
      </div>
      <div className="row">
        {staffs
          .filter((item) => {
            if (item.name.toLowerCase().includes(searchedStaff)) {
              return true;
            } else return false;
          })
          .map((staff) => (
            <Link
              to={`/staffs/${staff.id}`}
              key={staff.id}
              className="col-md-2 col-sm-4 col-6"
            >
              <div className="staffList-staff">
                <img src={staff.image}></img>
                <div>{staff.name}</div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default StaffList;
