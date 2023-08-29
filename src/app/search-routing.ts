
import {Routes} from '@angular/router';
import { SearchComponent } from './search/search.component';
import { AuthGuard } from './services/auth.guard';

export const SearchRoutes: Routes = [{path: 'search', component: SearchComponent, canActivate:[AuthGuard]}];