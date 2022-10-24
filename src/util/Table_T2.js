import Styles from "./Table_T2.module.css";

const Table_T2 = (props) => {
    return <table className={Styles.table}>
        <thead>
            <td className={Styles.tableHeadCell} colSpan={2}><b>{props.content.head}</b>:</td>
        </thead>
        <tbody>
            {props.content.body.map((element) => (
                <tr>
                    <td className={Styles.tableBodyCellKey}>{element.key}</td>
                    {element.value.includes('https') && <td><a className={Styles.tableBodyCellValue} href={element.value}>{element.value}</a></td>}
                    {element.value.includes('mailto:') && <td><a className={Styles.tableBodyCellValue} href={element.value}>{element.value.substr(7)}</a></td>}
                </tr>
            ))}
        </tbody>
    </table>
};

export default Table_T2;