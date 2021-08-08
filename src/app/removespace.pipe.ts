import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removespace'
})
export class RemovespacePipe implements PipeTransform {

  transform(value: string): string {
    return value.toLocaleLowerCase().replace(/\s/g,'')
  }

}
