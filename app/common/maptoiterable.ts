﻿import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'mapToIterable', pure: false })
export class MapToIterablePipe implements PipeTransform {
    transform(value: any, args: any[] = null): any {
        return Object.keys(value).map(key => value[key]);
    }
}