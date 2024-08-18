import { InjectionToken } from "@angular/core";

export const Browser_Storage = new
      InjectionToken<Storage>('Browser Storage', {
        providedIn: 'root',
        factory: () => localStorage
      });
export class Storage {
}
