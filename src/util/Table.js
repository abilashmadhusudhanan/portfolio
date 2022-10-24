import Styles from "./Table.module.css";

const Table = (props) => {
    return <table className={Styles.table}>
        <tr className={Styles.tableRow}>
            {props.content.head.map((element) => (
                <td className={Styles.tableCell}>
                    <p className={Styles.tableCellKey}><b>{element.key}</b>:</p>
                    {!element.value.includes('https') && <p className={Styles.tableCellValue}>{element.value}</p>}
                    {element.value.includes('https') && <p className={Styles.tableCellValue}><a className={Styles.link} href={element.value}>{element.value}</a></p>}
                </td>
            ))}
        </tr>
        <tr className={Styles.tableRow}>
            <td className={Styles.tableCell} colSpan={props.content.head.length}>
                <p className={Styles.tableCellKey}><b>{props.content.body.key}</b>:</p>
                <p className={Styles.tableCellValue}>{props.content.body.value}</p>
            </td>
        </tr>
    </table>
};

export default Table;