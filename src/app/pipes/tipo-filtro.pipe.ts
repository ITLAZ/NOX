import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoFiltro'
})
export class TipoFiltroPipe implements PipeTransform {
  transform(items: any[], tipo: string): any[] {
    if (!items || !tipo) return items;
    return items.filter(item => item.tipo === tipo);
  }
}