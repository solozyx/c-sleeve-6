/**
 * @author 落秋
 * @date 2019/10/28 23:42
 */
import {Cell} from "./cell";

class Fence {

    valueTitles = []
    specs
    cells = []
    title
    id

    constructor (specs) {
        this.specs = specs
        this.title = specs[0].key
        this.id = specs[0].key_id
    }

    init () {
        this._initCells()
    }

    _initCells() {
        this.specs.forEach(s => {
            // some：只要求某个元素相同 every：要求全部元素相同
            const existed = this.cells.some( c => {
                return c.id === s.value_id
            })
            if (existed) {
                return
            }
            // this.pushValueTitle(s.value)
            const cell = new Cell(s)
            this.cells.push(cell)
        })
    }

    pushValueTitle(title) {
        this.valueTitles.push(title)
    }

}

export {
    Fence
}