import { TableBody } from "./TableBody/TableBody"
import { TableHeader } from "./TableHeader/TableHeader"
import { TableFooter } from "./TableFooter/TableFooter"

export function TableSection({ tableArray }) {

    return(
        <table className="tableContainer">
            <TableHeader />
            <TableBody tableArray={tableArray} />
            <TableFooter />
        </table>
    )
}