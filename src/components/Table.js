import {Fragment} from "react";

function Table({data, config, keyFn}) {
    const tbody = data.map(rowData => {
        const renderCells = config.map((column) => {
            return (
                <td key={column.label} className="p-2">{column.render(rowData)}</td>
            );
        });

        return (
            <tr key={keyFn(rowData)} className="border-b">
                {renderCells}
            </tr>
        );
    })

    const headers = config.map(col => {
        if (col.header) {
            return <Fragment key={col.label}>{col.header()}</Fragment>;
        }

        return <th key={col.label}>{col.label}</th>;
    });

    return (
        <table className="table-auto border-spacing-2">
            <thead>
            <tr className="border-b-2">
                {headers}
            </tr>
            </thead>
            <tbody>
                {tbody}
            </tbody>
        </table>
    );
}

export default Table;