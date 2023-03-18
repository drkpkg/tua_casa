import {createStore, withProps} from "@ngneat/elf";
import {Injectable} from "@angular/core";
import {User} from "@supabase/supabase-js";

interface UserTokenProps {
  token: string | null;
}

const UserTokenStore = createStore(
  {name: 'userToken'},
  withProps<UserTokenProps>({token: null})
);

@Injectable({
  providedIn: 'root'
})
export class UserTokenRepository {

  updateUserToken(token: string) {
    UserTokenStore.update((state) => ({...state, token: token}));
  }

  hasUser() {
    return UserTokenStore.getValue().token == null;
  }

  getUser() {
    return UserTokenStore.getValue().token;
  }
}
