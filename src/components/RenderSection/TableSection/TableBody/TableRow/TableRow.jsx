import { TableDataCell } from "./TableDataCell/TableDataCell";

export function TableRow({ tableData }) {



    return(
        <tr>
            <TableDataCell data={tableData.employee}/>
            <TableDataCell data={tableData.occupation} />
            <TableDataCell data={tableData.branch} />
            <TableDataCell data={tableData.leader} />
            <TableDataCell data={new Date(tableData.date).toLocaleDateString("pt-BR")} />
            <TableDataCell data={Number(tableData.salary).toLocaleString("pt-BR", {style: "currency", currency: "BRL"})} />
            <TableDataCell data={tableData.overtimeDue} />
            <TableDataCell data={Number(tableData.nightShiftHours).toLocaleString("pt-BR", {style: "currency", currency: "BRL"})} />
            <TableDataCell data={tableData.justification} />
            <TableDataCell data={<button>X</button>} />
        </tr>
    )
}