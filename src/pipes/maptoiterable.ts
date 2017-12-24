import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'maptoiterable', pure: false })
export class MapToIterablePipe implements PipeTransform {
    public transform(value: any, args: any[] = null): any {
        return Object.keys(value).map((key) => value[key]);
    }
}
