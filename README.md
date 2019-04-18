# NGX PERFORMANCE UI

## Live demo

[See the this readme on another page](https://nicedoc.io/mehmet-erim/ngx-performance-ui)

[Check out the demo page](https://ngx-performance-ui.firebaseapp.com)

## Installation Core

```bash
yarn add @ngx-performance-ui/core
```

or

```bash
npm install @ngx-performance-ui/core
```

```json
  "peerDependencies": {
    "@angular/core": ">=5.0.0 <8.0.0",
    "rxjs": ">=6.0.0 || ^5.6.0-forward-compat.4",
    "@ngx-translate/core": ">=11.0.0",
    "@ngx-translate/http-loader": ">=4.0.0",
    "@ngxs/router-plugin": ">=3.3.0",
    "@ngxs/store": ">=3.3.0",
    "just-compare": ">=1.3.0"
  }
```

## Installation Ui

```bash
yarn add @ngx-performance-ui/ui
```

or

```bash
npm install @ngx-performance-ui/ui
```

```json
    "peerDependencies": {
    "ng2-datepicker": ">=3.1.0",
    "@ngx-performance-ui/core": "^0.0.4"
  }
```

## Usage

Import Core and UI module to your app.module

```typescript
import { CoreModule } from '@ngx-performance-ui/core';
import { UiModule } from '@ngx-performance-ui/ui';

@NgModule({
  imports: [
    CoreModule.forRoot(),
    UiModule,
  ]
```
