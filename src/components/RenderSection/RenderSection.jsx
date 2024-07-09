import { TableSection } from "./TableSection/TableSection";

export function RenderSection({ tableArray }) {

    return(
        <section>
            <TableSection tableArray={tableArray} />
        </section>
    )
}