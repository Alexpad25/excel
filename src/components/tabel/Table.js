import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from '@/components/tabel/table.template'
import {resizeHandler} from './table.resize'
import {shouldResize} from './table.function'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown']
    })
  }

  toHTML() {
    return createTable(100)
  }
  onMousedown(event, $root) {
    if (shouldResize()) {
      resizeHandler(this.$root, event)
    }
  }
}
