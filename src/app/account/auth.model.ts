import { signinQuery } from "@/shared/actions/sign-in-query";
import { createEvent, createStore, createWatch, sample } from "effector";

type User = {
  id: number;
  email: string;
  login: string;
  first_name: string;
  last_name: string;
  birthdate: string | null;
  address: string;
  phone: string;
  know_about_us: string | null;
  active_account: {
    id: number;
    discount: string;
    level: number;
    account_amount: string;
    experience: string;
    amount_last_mod_date: string;
    create_date: string;
  };
};

type Token = {
  token: string;
  expiration_date: string;
  user_id: number;
};

type UserData = {
  user: User;
  token: Token;
} | null;

const isAuth = createStore(false);

const user = createStore<UserData>(null);

const updateUser = createEvent<UserData>();

const signin = createEvent();

sample({
  clock: updateUser,
  target: user,
});

sample({
  source: signinQuery.finished.success,
  fn: () => true,
  target: isAuth,
});

sample({
  source: signinQuery.finished.failure,
  fn: () => false,
  target: isAuth,
});

sample({
  clock: signin,
  target: signinQuery.start
})

sample({
  clock: signinQuery.finished.success,
  fn: ({ result }) => result,
  target: updateUser
})

createWatch({
  unit: user,
  fn: (user) => console.log(user)
});

const outputs = {
  isAuth,
  user,
};

const inputs = {
  updateUser,
  signin

}

export const authModel = {
  outputs,
  inputs
}
