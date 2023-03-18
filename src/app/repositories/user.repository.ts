import {createStore, withProps} from "@ngneat/elf";
import {Injectable} from "@angular/core";
import {User} from "@supabase/supabase-js";

interface UserProps {
  user: User | null;
}

const UserStore = createStore(
  {name: 'sale'},
  withProps<UserProps>({user: null})
);

@Injectable({
  providedIn: 'root'
})
export class UserRepository {

  updateUser(user: User) {
    UserStore.update((state) => ({...state, user: user}));
  }
}
