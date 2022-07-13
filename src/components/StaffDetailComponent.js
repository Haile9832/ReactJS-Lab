import dateFormat from "dateformat";

function StaffDetail({ selectedStaff }) {
  if (selectedStaff) {
    return (
      <div className="row">
        <div className="StaffDetail col-md-4 col-sm-6 col-xs-12">
          <h4>Họ và tên: {selectedStaff.name}</h4>
          <p>Ngày sinh: {dateFormat(selectedStaff.doB, "dd/mm/yyyy")}</p>
          <p>Phòng ban: {selectedStaff.department.name}</p>
          <p>Số ngày nghỉ còn lại: {selectedStaff.annualLeave}</p>
          <p>Số ngày đã làm thêm: {selectedStaff.overTime}</p>
        </div>
      </div>
    );
  } else {
    return <div>Bấm vào tên nhân viên để xem thông tin</div>;
  }
}
export default StaffDetail;
