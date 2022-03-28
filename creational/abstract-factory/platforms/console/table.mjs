import TableComponent from "../../shared/base/tableComponent.mjs";
import chalk from 'chalk'
import chalkTable from 'chalk-table'

export default class TableConsoleComponent extends TableComponent {
    render(data) {
       const collumns = this.prepareData(data)
       const options = {
            leftPad: 2,
            collumns
       }
       const table = chalkTable(options,data)
       console.log(table)
    }

    prepareData(data) {
        const [ firstItem ] = data
        const headers = Object.keys(firstItem)

        const formateHeader = (data, index) => index %2 ===0 ? chalk.yellow(data) : chalk.green(data);

        const collumns = headers.map((item, index) => ({
            field: item,
            name: formateHeader(item, index)
        }))

        return collumns
    }
}