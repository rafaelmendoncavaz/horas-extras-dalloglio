import { TableRow } from "./TableRow/TableRow";

export function TableBody({ tableArray }) {

    return(
        <tbody className="tableBody">
            {
                tableArray.map((data, index) => (
                    <TableRow key={index} tableData={data}/>
                ))
            }
        </tbody>
    )
}