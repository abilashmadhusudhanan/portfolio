import { useState } from "react";
import Styles from "./Table.module.css";

const Table = (props) => {
    const [isDetailsActive, setIsDetailsActive] = useState(false);

    const detailsButtonOnClickHandler = () => {
        setIsDetailsActive(!isDetailsActive);
    };

    return <table className={Styles.table}>
        <thead>
            <td className={Styles.tableHeadCell} colSpan={2}><b className={`${Styles.title}${isDetailsActive ? ` ${Styles.active}` : ''}`} onClick={detailsButtonOnClickHandler}>{props.content.head}</b><i className={Styles.helperText}>{'(click title to expand)'}</i></td>
        </thead>
        <tbody>
            {isDetailsActive && props.content.body.map((element) => (
                <tr>
                    <td className={Styles.tableBodyCellKey}>{element.key}</td>
                    {element.type === "link" && <td className={Styles.tableBodyCellValue}><a className={Styles.tableBodyCellValueLink} href={element.value}>{element.value}</a></td>}
                    {element.type === "mailid" && <td className={Styles.tableBodyCellValue}><a className={Styles.tableBodyCellValueLink} href={`mailto:${element.value}`}>{element.value}</a></td>}
                    {element.type === "text" && <td className={Styles.tableBodyCellValue}>{element.value}</td>}
                </tr>
            ))}
        </tbody>
    </table>
};

export default Table;