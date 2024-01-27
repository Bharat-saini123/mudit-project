import DataTable from "datatables.net-dt";

let table = new DataTable("#myTable", {
  responsive: true,
});

const DataList = () => {
  return (
    <table id="myTable" className="display">
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
          <th>Column 4</th>
          <th>Column 5</th>
          <th>Column 6</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Data1</td>
          <td>Data2</td>
          <td>Data3</td>
          <td>Data4</td>
          <td>Data5</td>
          <td>Data6</td>
        </tr>
        <tr>
          <td>Data1</td>
          <td>Data2</td>
          <td>Data3</td>
          <td>Data4</td>
          <td>Data5</td>
          <td>Data6</td>
        </tr>
        <tr>
          <td>Data1</td>
          <td>Data2</td>
          <td>Data3</td>
          <td>Data4</td>
          <td>Data5</td>
          <td>Data6</td>
        </tr>

        <tr>
          <td>Data1</td>
          <td>Data2</td>
          <td>Data3</td>
          <td>Data4</td>
          <td>Data5</td>
          <td>Data6</td>
        </tr>
      </tbody>
    </table>
  );
};
export default DataList;
