
const MyAddedClass = () => {
  return (
    <div className="min-h-screen">
        <h1 className="text-center my-6">My All Added Classes</h1>
      <main className="flex-grow p-4 bg-gray-100">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>#</th>
                <th>Class Name</th>
                <th>Status</th>
                <th>Total Enrolled Students</th>
                <th>Action</th>
                <th>Feedback</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>className</td>
                <td>Pending</td>
                <td>0</td>
                <td>Update</td>
                <td><input type="textarea" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default MyAddedClass;
