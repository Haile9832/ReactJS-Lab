function Department({ departments }) {
  return (
    <div className="container">
      <div className="row">
        {departments.map((department) => {
          return (
            <div
              className="col-md-4 col-sm-6 col-12 "
              key={department.id}
            >
              <div className="department">
                <h2>{department.name}</h2>
                <p>{`Số lượng nhân viên: ${department.numberOfStaff}`}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Department;
